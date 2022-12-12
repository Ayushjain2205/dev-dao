import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0x9e5E6Dd2c5a6290640098F73995Ee60510E00a5A",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "DevDao KEYboard",
        description: "This NFT will give you access to DevDAO!",
        image: readFileSync("scripts/assets/key.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
