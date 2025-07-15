import { FandomApiClient } from "../client/api-client.js";
import {
  PageDetails,
  ImageInfo,
  PageInfo,
  RevisionInfo,
} from "../types/index.js";

interface PageDetailsResponse {
  parse: {
    title: string;
    text: string;
    wikitext: string;
    displaytitle: string;
    sections: any[];
    categories: any[];
    links: any[];
    templates: any[];
    images: string[];
    externallinks: string[];
    langlinks: any[];
    revid: number;
    iwlinks: any[];
    properties: Record<string, any>;
  };
}

/**
 * Module for page-related operations
 */
export class PagesModule {
  /**
   * Creates a new PagesModule instance
   * @param client - The API client instance
   */
  constructor(private client: FandomApiClient) {}

  /**
   * Gets complete page details including content, metadata, and enhanced image information
   * @param title - The page title
   * @returns Complete page details
   * @throws Error if the page is not found
   */
  async getFullPageDetails(title: string): Promise<PageDetails> {
    const data = await this.client.makeRequest<PageDetailsResponse>({
      action: "parse",
      format: "json",
      page: title,
      prop: "text|wikitext|displaytitle|sections|categories|links|templates|images|externallinks|langlinks|revid|iwlinks|properties",
      formatversion: "2",
    });

    if (!data.parse) throw new Error("Page not found");

    const images = await this.getImageDetails(data.parse.images);

    return {
      title: data.parse.title,
      html: data.parse.text,
      markdown: data.parse.wikitext,
      displayTitle: data.parse.displaytitle,
      sections: data.parse.sections,
      categories: data.parse.categories,
      links: data.parse.links,
      templates: data.parse.templates,
      images,
      externallinks: data.parse.externallinks,
      langlinks: data.parse.langlinks,
      revid: data.parse.revid,
      iwlinks: data.parse.iwlinks,
      properties: data.parse.properties,
    };
  }

  /**
   * Gets detailed information for multiple images
   * @param imageNames - Array of image file names
   * @returns Array of image information objects
   */
  private async getImageDetails(imageNames: string[]): Promise<ImageInfo[]> {
    if (imageNames.length === 0) return [];

    const chunkSize = 50;
    const allImageInfo: ImageInfo[] = [];

    for (let i = 0; i < imageNames.length; i += chunkSize) {
      const chunk = imageNames.slice(i, i + chunkSize);
      const titles = chunk.map((name) => `File:${name}`).join("|");

      try {
        const data = await this.client.makeRequest<any>({
          action: "query",
          format: "json",
          titles,
          prop: "imageinfo",
          iiprop: "url|size|width|height|timestamp|user|comment",
          formatversion: "2",
        });

        const pages = data.query.pages;

        for (const page of pages) {
          if (page.title && page.imageinfo?.length > 0) {
            const name = page.title.replace(/^File:/, "");
            const info = page.imageinfo[0];
            allImageInfo.push({
              name,
              url: info.url,
              type: name.split(".").pop()?.toUpperCase() || "UNKNOWN",
              size: info.size,
              width: info.width,
              height: info.height,
              timestamp: info.timestamp,
              user: info.user,
              comment: info.comment,
            });
          }
        }
      } catch (error) {
        console.warn(
          `Failed to fetch image details for chunk starting at ${i}:`,
          error,
        );
        // Skip this chunk entirely - no fallback
      }
    }

    return allImageInfo;
  }

  /**
   * Gets information for a single image file
   * @param name - The image file name
   * @returns Image information object or null if not found
   */
  private async getSingleImageInfo(name: string): Promise<ImageInfo | null> {
    try {
      const data = await this.client.makeRequest<any>({
        action: "query",
        format: "json",
        titles: `File:${name}`,
        prop: "imageinfo",
        iiprop: "url|size|width|height|timestamp|user|comment",
        formatversion: "2",
      });

      const page = data.query?.pages?.[0];
      if (page?.imageinfo?.length > 0) {
        const info = page.imageinfo[0];
        return {
          name,
          url: info.url,
          type: name.split(".").pop()?.toUpperCase() || "UNKNOWN",
          size: info.size,
          width: info.width,
          height: info.height,
          timestamp: info.timestamp,
          user: info.user,
          comment: info.comment,
        };
      }
    } catch (error) {
      console.warn(`Failed to fetch individual image info for ${name}:`, error);
    }

    return null;
  }

  /**
   * Gets basic information for multiple pages
   * @param titles - Array of page titles
   * @returns Array of page information objects
   */
  async getPageInfo(titles: string[]): Promise<PageInfo[]> {
    const data = await this.client.makeRequest<any>({
      action: "query",
      format: "json",
      titles: titles.join("|"),
      prop: "info",
      formatversion: "2",
    });

    return data.query.pages.map((page: any) => ({
      pageid: page.pageid,
      ns: page.ns,
      title: page.title,
      length: page.length,
      touched: page.touched,
      lastrevid: page.lastrevid,
    }));
  }

  /**
   * Gets revision history for a page
   * @param title - The page title
   * @param limit - Maximum number of revisions to return (default: 10)
   * @returns Array of revision information objects
   */
  async getPageRevisions(
    title: string,
    limit: number = 10,
  ): Promise<RevisionInfo[]> {
    const data = await this.client.makeRequest<any>({
      action: "query",
      format: "json",
      titles: title,
      prop: "revisions",
      rvprop: "ids|timestamp|user|comment|contentformat|contentmodel",
      rvlimit: limit.toString(),
      formatversion: "2",
    });

    const page = data.query.pages[0];
    if (!page.revisions) return [];

    return page.revisions.map((rev: any) => ({
      revid: rev.revid,
      parentid: rev.parentid,
      user: rev.user,
      timestamp: rev.timestamp,
      comment: rev.comment,
      contentformat: rev.contentformat,
      contentmodel: rev.contentmodel,
    }));
  }
}
