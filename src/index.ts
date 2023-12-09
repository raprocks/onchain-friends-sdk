import Airstack from "./airstack";

export { sendInvite } from "./xmtp";

export default class OnChainFriendsSDK {
  Airstack: Airstack;
  /**
   * Instantiate the OnChainFriends SDK using the airstack api key
   */
  constructor(airstackApiKey: string) {
    this.Airstack = new Airstack(airstackApiKey);
  }
}
