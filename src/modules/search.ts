import { FandomApiClient } from "../client/api-client.js";
import { SearchResult } from "../types/index.js";

interface SearchResponse {
  query: {
    search: SearchResult[];
  };
}

/**
 * Module for search-related operations
 */
export class SearchModule {
  /**
   * Creates a new SearchModule instance
   * @param client - The API client instance
   */
  constructor(private client: FandomApiClient) {}

  /**
   * Searches for pages matching a query
   * @param query - The search query
   * @param limit - Maximum number of results to return (default: 5)
   * @returns Array of search results
   */
  async searchPages(query: string, limit: number = 5): Promise<SearchResult[]> {
    const data = await this.client.makeRequest<SearchResponse>({
      action: "query",
      list: "search",
      format: "json",
      srsearch: query,
      srlimit: limit.toString(),
    });

    return data.query.search;
  }

  /**
   * Searches for pages in a specific namespace
   * @param query - The search query
   * @param namespace - The namespace number to search in
   * @param limit - Maximum number of results to return (default: 5)
   * @returns Array of search results
   */
  async searchInNamespace(
    query: string,
    namespace: number,
    limit: number = 5,
  ): Promise<SearchResult[]> {
    const data = await this.client.makeRequest<SearchResponse>({
      action: "query",
      list: "search",
      format: "json",
      srsearch: query,
      srnamespace: namespace.toString(),
      srlimit: limit.toString(),
    });

    return data.query.search;
  }

  /**
   * Gets title suggestions for a query using OpenSearch
   * @param query - The search query
   * @param limit - Maximum number of suggestions to return (default: 10)
   * @returns Array of title suggestions
   */
  async searchTitles(query: string, limit: number = 10): Promise<string[]> {
    const data = await this.client.makeRequest<any>({
      action: "opensearch",
      format: "json",
      search: query,
      limit: limit.toString(),
    });

    return data[1] || [];
  }
}
