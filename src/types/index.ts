/**
 * Represents a member of a category
 */
export interface CategoryMember {
  /** The page ID */
  pageid: number;
  /** The namespace number */
  ns: number;
  /** The page title */
  title: string;
}

/**
 * Detailed information about an image file
 */
export interface ImageInfo {
  /** The image file name */
  name: string;
  /** The full URL to the image */
  url: string;
  /** The file type (e.g., PNG, JPG) */
  type: string;
  /** File size in bytes */
  size?: number;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
  /** Upload timestamp */
  timestamp?: string;
  /** User who uploaded the image */
  user?: string;
  /** Upload comment/description */
  comment?: string;
}

/**
 * Complete page details including content, metadata, and related information
 */
export interface PageDetails {
  /** The page title */
  title: string;
  /** The page content as HTML */
  html: string;
  /** The page content as markdown/wikitext */
  markdown: string;
  /** The display title (may include styling) */
  displayTitle: string;
  /** Page sections */
  sections: any[];
  /** Categories the page belongs to */
  categories: any[];
  /** Internal links on the page */
  links: any[];
  /** Templates used on the page */
  templates: any[];
  /** Images used on the page with detailed information */
  images: ImageInfo[];
  /** External links on the page */
  externallinks: string[];
  /** Language links */
  langlinks: any[];
  /** Revision ID */
  revid: number;
  /** Interwiki links */
  iwlinks: any[];
  /** Page properties */
  properties: Record<string, any>;
}

/**
 * Search result from page search
 */
export interface SearchResult {
  /** Namespace number */
  ns: number;
  /** Page title */
  title: string;
  /** Page ID */
  pageid: number;
  /** Page size in bytes */
  size: number;
  /** Word count */
  wordcount: number;
  /** Search snippet with highlighted terms */
  snippet: string;
  /** Last modification timestamp */
  timestamp: string;
}

/**
 * Basic page information
 */
export interface PageInfo {
  /** Page ID */
  pageid: number;
  /** Namespace number */
  ns: number;
  /** Page title */
  title: string;
  /** Page length in bytes */
  length: number;
  /** Last touched timestamp */
  touched: string;
  /** Last revision ID */
  lastrevid: number;
}

/**
 * Recent change entry
 */
export interface RecentChange {
  /** Type of change (edit, new, log, etc.) */
  type: string;
  /** Namespace number */
  ns: number;
  /** Page title */
  title: string;
  /** Page ID */
  pageid: number;
  /** Revision ID */
  revid: number;
  /** Previous revision ID */
  old_revid: number;
  /** Recent changes ID */
  rcid: number;
  /** User who made the change */
  user: string;
  /** Change timestamp */
  timestamp: string;
  /** Edit comment */
  comment: string;
  /** Change tags */
  tags: string[];
}

/**
 * User information and permissions
 */
export interface UserInfo {
  /** User ID */
  id: number;
  /** Username */
  name: string;
  /** Total edit count */
  editcount: number;
  /** Registration timestamp */
  registration: string;
  /** User groups */
  groups: string[];
  /** User rights */
  rights: string[];
  /** User who blocked this user (if blocked) */
  blockedby?: string;
  /** Block reason (if blocked) */
  blockreason?: string;
  /** Block expiry (if blocked) */
  blockexpiry?: string;
}

/**
 * Revision information
 */
export interface RevisionInfo {
  /** Revision ID */
  revid: number;
  /** Parent revision ID */
  parentid: number;
  /** User who made the revision */
  user: string;
  /** Revision timestamp */
  timestamp: string;
  /** Edit comment */
  comment: string;
  /** Content format */
  contentformat: string;
  /** Content model */
  contentmodel: string;
  /** Revision content (if requested) */
  content?: string;
}

/**
 * @internal
 * Internal response type for image info API calls
 */
export interface ImageInfoResponse {
  query: {
    pages: {
      title?: string;
      imageinfo?: {
        url: string;
        size: number;
        width: number;
        height: number;
        timestamp: string;
        user: string;
        comment: string;
      }[];
    }[];
  };
}
