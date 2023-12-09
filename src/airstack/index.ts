import { init, fetchQuery } from "@airstack/node";
import { lensFollowingQuery } from "./queries";
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


}
