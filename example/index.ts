import { FandomSDK } from "../dist/index.js";

(async () => {
  const sdk = new FandomSDK("sonic");

  const data = await sdk.pages.getFullPageDetails("Sonic_the_Hedgehog");

  const images = JSON.stringify(data.images, null, 2);
  console.log(images);
})();
