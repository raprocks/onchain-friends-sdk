import { Client } from "@xmtp/xmtp-js";
import Airstack from "./airstack";
import { sendInvite } from "./xmtp";

export default class OnChainFriendsSDK extends Airstack {
  /**
   * Instantiate the OnChainFriends SDK using the airstack api key
   */
  constructor(airstackApiKey: string) {
    super(airstackApiKey);
  }

  async inviteUser(client: Client, toAddress: string, messageContent: string) {
    return await sendInvite(client, toAddress, messageContent);
  }
}

export const FriendFetcher = OnChainFriendsSDK;
