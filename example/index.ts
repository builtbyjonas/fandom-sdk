import { FandomSDK } from "../dist/index.js";

(async () => {
  const sdk = new FandomSDK("sonic");

  const data = await sdk.pages.getFullPageDetails("Sonic_the_Hedgehog");
  const images = JSON.stringify(data.images.slice(0, 5), null, 2);

  console.log(images); // Log the first 5 images from the page details
  console.log(data.title); // Log the title of the page
  console.log(data.categories); // Log the categories of the page
})();
