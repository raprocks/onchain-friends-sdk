import { init, fetchQuery } from "@airstack/node";
import {
  lensFollowingQuery,
  lensFollowerQuery,
  farcasterFollowerQuery,
  farcasterFollowingQuery,
  tokenReceiveQuery,
  tokenSentQuery,
} from "./queries";
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

  async fetchData<T extends Record<string, unknown>>(
    query: string,
    queryVariables?: Record<string, string | number | string[] | number[]>,
  ) {
    return (await fetchQuery(query, queryVariables)) as QueryResponse<T>;
  }

  async getLensFollowing(address: string) {
    const { data, error } = await this.fetchData(lensFollowingQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getLensFollower(address: string) {
    const { data, error } = await this.fetchData(lensFollowerQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getFarcasterFollower(address: string) {
    const { data, error } = await this.fetchData(farcasterFollowerQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getFarcasterFollowing(address: string) {
    const { data, error } = await this.fetchData(farcasterFollowingQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getTokenReceive(address: string) {
    const { data, error } = await this.fetchData(tokenReceiveQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getTokenSent(address: string) {
    const { data, error } = await this.fetchData(tokenSentQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
