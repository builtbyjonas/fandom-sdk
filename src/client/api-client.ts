import fetch from "node-fetch";

/**
 * API client for making requests to Fandom's MediaWiki API
 */
export class FandomApiClient {
  private baseUrl: string;

  /**
   * Creates a new FandomApiClient instance
   * @param wiki - The wiki subdomain (e.g., 'sonic' for sonic.fandom.com)
   */
  constructor(private wiki: string) {
    this.baseUrl = `https://${wiki}.fandom.com/api.php`;
  }

  /**
   * Gets the wiki name
   * @returns The wiki subdomain
   */
  getWiki(): string {
    return this.wiki;
  }

  /**
   * Determines if a POST request should be used based on parameter size
   * @param params - The request parameters
   * @returns True if POST should be used, false for GET
   */
  private shouldUsePost(params: Record<string, string>): boolean {
    const paramCount = Object.keys(params).length;
    const totalLength = Object.entries(params).reduce(
      (sum, [key, value]) => sum + key.length + value.length,
      0,
    );

    return paramCount > 10 || totalLength > 1500;
  }

  /**
   * Makes a request to the MediaWiki API
   * @param params - The API parameters
   * @returns The parsed JSON response
   * @throws Error if the request fails
   */
  async makeRequest<T>(params: Record<string, string>): Promise<T> {
    const usePost = this.shouldUsePost(params);

    if (usePost) {
      // Use POST request
      const formData = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }

      return (await res.json()) as T;
    } else {
      // Use GET request
      const url = new URL(this.baseUrl);
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });

      const res = await fetch(url.toString());
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }

      return (await res.json()) as T;
    }
  }

  async makeMultipleRequests<T>(
    requests: Record<string, string>[],
  ): Promise<T[]> {
    const promises = requests.map((params) => this.makeRequest<T>(params));
    return Promise.all(promises);
  }
}
