import { FandomApiClient } from "../client/api-client.js";
import { RecentChange } from "../types/index.js";

/**
 * Module for activity and recent changes operations
 */
export class ActivityModule {
  /**
   * Creates a new ActivityModule instance
   * @param client - The API client instance
   */
  constructor(private client: FandomApiClient) {}

  /**
   * Gets recent changes on the wiki
   * @param limit - Maximum number of changes to return (default: 10)
   * @returns Array of recent changes
   */
  async getRecentChanges(limit: number = 10): Promise<RecentChange[]> {
    const data = await this.client.makeRequest<any>({
      action: "query",
      format: "json",
      list: "recentchanges",
      rclimit: limit.toString(),
      rcprop: "user|comment|timestamp|title|ids|sizes|flags|tags"
    });

    return data.query.recentchanges.map((rc: any) => ({
      type: rc.type,
      ns: rc.ns,
      title: rc.title,
      pageid: rc.pageid,
      revid: rc.revid,
      old_revid: rc.old_revid,
      rcid: rc.rcid,
      user: rc.user,
      timestamp: rc.timestamp,
      comment: rc.comment,
      tags: rc.tags || []
    }));
  }

  /**
   * Gets watchlist entries (requires authentication)
   * @param limit - Maximum number of entries to return (default: 10)
   * @returns Array of watchlist entries
   */
  async getWatchlist(limit: number = 10): Promise<any[]> {
    const data = await this.client.makeRequest<any>({
      action: "query",
      format: "json",
      list: "watchlist",
      wllimit: limit.toString(),
      wlprop: "ids|title|timestamp|comment|user|flags"
    });

    return data.query.watchlist;
  }
}
