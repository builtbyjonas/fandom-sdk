# fandom-sdk

> 🧠 A lightweight TypeScript SDK to fetch data from any [Fandom](https://www.fandom.com/) wiki via the MediaWiki API.

## Features

- ✅ Get full page details (HTML, markdown, metadata) with enhanced image information
- 📂 Get pages in categories and browse category trees
- 🔍 Advanced search functionality with namespace filtering
- 👥 User information and contributions
- 📊 Recent changes and activity tracking
- 🎯 Modular design with dedicated modules for different features
- 🔄 Backward compatibility with legacy function exports

## Installation

```bash
npm install fandom-sdk
# or
yarn add fandom-sdk
# or
pnpm add fandom-sdk
# or
bun add fandom-sdk
```

## Usage

### Modern SDK API

```ts
import { FandomSDK } from "fandom-sdk";

const sdk = new FandomSDK("sonic");

// Get page details with enhanced image information
const pageDetails = await sdk.pages.getFullPageDetails("Sonic_the_Hedgehog");
console.log(pageDetails.images); // Array of ImageInfo objects with URLs, types, sizes, etc.

// Search functionality
const searchResults = await sdk.search.searchPages("Sonic");
const titleSuggestions = await sdk.search.searchTitles("Sonic");

// Category operations
const categoryMembers = await sdk.categories.getCategoryMembers("Characters");
const allCategories = await sdk.categories.getAllCategories();

// User information
const userInfo = await sdk.users.getUserInfo("ExampleUser");
const userContribs = await sdk.users.getUserContributions("ExampleUser");

// Recent activity
const recentChanges = await sdk.activity.getRecentChanges(20);
```

### Legacy API (backward compatible)

```ts
import {
  getFullPageDetails,
  getCategoryMembers,
  searchPages,
} from "fandom-sdk";

const data = await getFullPageDetails("sonic", "Sonic_the_Hedgehog");
console.log(data.title); // "Sonic the Hedgehog"
console.log(data.images); // Enhanced image objects with URLs and metadata
```

### Enhanced Image Information

Images now include comprehensive metadata:

```ts
const pageDetails = await sdk.pages.getFullPageDetails("Sonic_the_Hedgehog");
console.log(pageDetails.images[0]);
// {
//   name: "TSR_Sonic.png",
//   url: "https://static.wikia.nocookie.net/sonic/images/...",
//   type: "PNG",
//   size: 524288,
//   width: 1024,
//   height: 768,
//   timestamp: "2023-01-01T00:00:00Z",
//   user: "ExampleUser",
//   comment: "Upload description"
// }
```

## API Reference

### FandomSDK

- `pages`: Page-related operations
- `categories`: Category browsing and management
- `search`: Search functionality
- `users`: User information and contributions
- `activity`: Recent changes and activity tracking

### Types

All TypeScript interfaces are exported for type safety:

- `PageDetails`, `ImageInfo`, `CategoryMember`
- `SearchResult`, `UserInfo`, `RecentChange`
- And more...

## License

[BSL-1.0](LICENSE)
