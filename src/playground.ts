import { FriendFetcher } from ".";

const sdk = new FriendFetcher("118f7b49bcf804ce9af37bbfe3cad9f24");

sdk
  .getLensFollower("0x27b721B321873BaC51b1138C0310695e421fC46b")
  .then((res) => console.dir(res))
  .catch((e) => console.error(e));
