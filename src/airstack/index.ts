import { init, fetchQuery } from "@airstack/node";
import { lensFollowingQuery,lensFollowerQuery ,farcasterFollowerQuery,farcasterFollowingQuery, tokenReceiveQuery,tokenSentQuery} from "./queries";
import { QueryResponse } from "../types/query";

export default class Airstack {
  APIKEY: string;
  /**
   *
   */
  constructor(airstackAPIKey: string) {
    this.APIKEY = airstackAPIKey;
    init(airstackAPIKey);
  }

  async getLensFollowing(address: string){
    const { data, error } = await fetchQuery(lensFollowingQuery, {
      user: address
    }) as QueryResponse;
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getLensFollower(address: string){
    const { data, error } = await fetchQuery(lensFollowerQuery, {
      user: address
    }) as QueryResponse;
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getFarcasterFollower(address: string){
    const { data, error } = await fetchQuery(farcasterFollowerQuery, {
      user: address
    }) as QueryResponse;
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getFarcasterFollowing(address: string){
    const { data, error } = await fetchQuery(farcasterFollowingQuery, {
      user: address
    }) as QueryResponse;
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getTokenReceive(address: string){
    const { data, error } = await fetchQuery(tokenReceiveQuery, {
      user: address
    }) as QueryResponse;
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getTokenSent(address: string){
    const { data, error } = await fetchQuery(tokenSentQuery, {
      user: address
    }) as QueryResponse;
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

}
