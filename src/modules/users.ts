import { FandomApiClient } from "../client/api-client.js";
import { UserInfo } from "../types/index.js";

/**
 * Module for user-related operations
 */
export class UsersModule {
  /**
   * Creates a new UsersModule instance
   * @param client - The API client instance
   */
  constructor(private client: FandomApiClient) {}

  /**
   * Gets information about a specific user
   * @param username - The username to look up
   * @returns User information object
   * @throws Error if the user is not found
   */
  async getUserInfo(username: string): Promise<UserInfo> {
    const data = await this.client.makeRequest<any>({
      action: "query",
      format: "json",
      list: "users",
      ususers: username,
      usprop: "blockinfo|groups|editcount|registration|rights",
      formatversion: "2"
    });

    const user = data.query.users[0];
    if (!user) throw new Error("User not found");

    return {
      id: user.userid,
      name: user.name,
      editcount: user.editcount,
      registration: user.registration,
      groups: user.groups || [],
      rights: user.rights || [],
      blockedby: user.blockedby,
      blockreason: user.blockreason,
      blockexpiry: user.blockexpiry
    };
  }

  /**
   * Gets a user's recent contributions
   * @param username - The username to look up
   * @param limit - Maximum number of contributions to return (default: 10)
   * @returns Array of user contributions
   */
  async getUserContributions(username: string, limit: number = 10): Promise<any[]> {
    const data = await this.client.makeRequest<any>({
      action: "query",
      format: "json",
      list: "usercontribs",
      ucuser: username,
      uclimit: limit.toString(),
      ucprop: "ids|title|timestamp|comment|size|flags|tags"
    });

    return data.query.usercontribs;
  }
}
