// import OnChainFriendsSDK from "./index.js";

// const sdk = new OnChainFriendsSDK("118f7b49bcf804ce9af37bbfe3cad9f24");

import Airstack from "./airstack/index";
const sdk = new Airstack("118f7b49bcf804ce9af37bbfe3cad9f24");

sdk
  .getFarcasterFollowing("vitalik.eth")
  .then((res) => {
    console.dir(res, { depth: null });
  })
  .catch((err) => console.log(err));
