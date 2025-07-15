import { FandomApiClient } from "../client/api-client.js";
import { CategoryMember } from "../types/index.js";

interface CategoryMembersResponse {
  query: {
    categorymembers: CategoryMember[];
  };
}

/**
 * Module for category-related operations
 */
export class CategoriesModule {
  /**
   * Creates a new CategoriesModule instance
   * @param client - The API client instance
   */
  constructor(private client: FandomApiClient) {}

  /**
   * Gets members of a specific category
   * @param category - The category name (without "Category:" prefix)
   * @param limit - Maximum number of members to return (default: 10)
   * @returns Array of category members
   */
  async getCategoryMembers(
    category: string,
    limit: number = 10,
  ): Promise<CategoryMember[]> {
    const data = await this.client.makeRequest<CategoryMembersResponse>({
      action: "query",
      format: "json",
      list: "categorymembers",
      cmtitle: `Category:${category}`,
      cmlimit: limit.toString(),
    });

    return data.query.categorymembers;
  }

  /**
   * Gets a list of all categories on the wiki
   * @param limit - Maximum number of categories to return (default: 50)
   * @returns Array of category names
   */
  async getAllCategories(limit: number = 50): Promise<string[]> {
    const data = await this.client.makeRequest<any>({
      action: "query",
      format: "json",
      list: "allcategories",
      aclimit: limit.toString(),
    });

    return data.query.allcategories.map((cat: any) => cat.category);
  }

  /**
   * Gets subcategories of a specific category
   * @param category - The category name (without "Category:" prefix)
   * @param depth - Depth of subcategories to retrieve (default: 2)
   * @returns Array of subcategory information
   */
  async getCategoryTree(category: string, depth: number = 2): Promise<any> {
    const data = await this.client.makeRequest<any>({
      action: "query",
      format: "json",
      list: "categorymembers",
      cmtitle: `Category:${category}`,
      cmtype: "subcat",
      cmlimit: "500",
    });

    return data.query.categorymembers;
  }
}
