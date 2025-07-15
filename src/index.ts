import { FandomApiClient } from "./client/api-client.js";
import { PagesModule } from "./modules/pages.js";
import { CategoriesModule } from "./modules/categories.js";
import { SearchModule } from "./modules/search.js";
import { UsersModule } from "./modules/users.js";
import { ActivityModule } from "./modules/activity.js";

export * from "./types/index.js";

/**
 * Main SDK class for interacting with Fandom wikis
 */
export class FandomSDK {
  private client: FandomApiClient;
  
  /** Module for page-related operations */
  public pages: PagesModule;
  /** Module for category-related operations */
  public categories: CategoriesModule;
  /** Module for search operations */
  public search: SearchModule;
  /** Module for user-related operations */
  public users: UsersModule;
  /** Module for activity and recent changes operations */
  public activity: ActivityModule;

  /**
   * Creates a new FandomSDK instance
   * @param wiki - The wiki subdomain (e.g., 'sonic' for sonic.fandom.com)
   */
  constructor(wiki: string) {
    this.client = new FandomApiClient(wiki);
    this.pages = new PagesModule(this.client);
    this.categories = new CategoriesModule(this.client);
    this.search = new SearchModule(this.client);
    this.users = new UsersModule(this.client);
    this.activity = new ActivityModule(this.client);
  }
}

/**
 * Legacy function for getting full page details
 * @param wiki - The wiki subdomain
 * @param title - The page title
 * @returns Complete page details
 * @deprecated Use `new FandomSDK(wiki).pages.getFullPageDetails(title)` instead
 */
export async function getFullPageDetails(wiki: string, title: string) {
  const sdk = new FandomSDK(wiki);
  return sdk.pages.getFullPageDetails(title);
}

/**
 * Legacy function for getting category members
 * @param wiki - The wiki subdomain
 * @param category - The category name
 * @param limit - Maximum number of members to return
 * @returns Array of category members
 * @deprecated Use `new FandomSDK(wiki).categories.getCategoryMembers(category, limit)` instead
 */
export async function getCategoryMembers(wiki: string, category: string, limit: number = 10) {
  const sdk = new FandomSDK(wiki);
  return sdk.categories.getCategoryMembers(category, limit);
}

/**
 * Legacy function for searching pages
 * @param wiki - The wiki subdomain
 * @param query - The search query
 * @param limit - Maximum number of results to return
 * @returns Array of search results
 * @deprecated Use `new FandomSDK(wiki).search.searchPages(query, limit)` instead
 */
export async function searchPages(wiki: string, query: string, limit: number = 5) {
  const sdk = new FandomSDK(wiki);
  return sdk.search.searchPages(query, limit);
}