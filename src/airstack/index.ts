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
  existingUsers: object[];
  /**
   *
   */
  constructor(airstackAPIKey: string) {
    this.APIKEY = airstackAPIKey;
    init(airstackAPIKey);
    this.existingUsers = [];
  }

  async fetchData<T extends Record<string, unknown>>(
    query: string,
    queryVariables?: Record<string, string | number | string[] | number[]>,
  ) {
    return (await fetchQuery(query, queryVariables)) as QueryResponse<T>;
  }

  async getLensFollowing(address: string) {
    const { data, error } = await this.fetchData<{
      SocialFollowings: {
        Following: Array<{
          followingAddress: {
            addresses: Array<string>;
            socials: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp?: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
    }>(lensFollowingQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    const userData = data.SocialFollowings.Following.map(
      (e) => e.followingAddress,
    );
    this.existingUsers = [...this.existingUsers, ...userData];
    return userData;
  }

  async getLensFollower(address: string) {
    const { data, error } = await this.fetchData<{
      SocialFollowers: {
        Follower: Array<{
          followerAddress: {
            addresses: Array<string>;
            socials: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
    }>(lensFollowerQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    const userData = data.SocialFollowers.Follower.map(
      (e) => e.followerAddress,
    );
    this.existingUsers = [...this.existingUsers, ...userData];
    return userData;
  }

  async getFarcasterFollower(address: string) {
    const { data, error } = await this.fetchData<{
      SocialFollowers: {
        Follower: Array<{
          followerAddress: {
            addresses: Array<string>;
            socials: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp?: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
    }>(farcasterFollowerQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    const userData = data.SocialFollowers.Follower.map(
      (e) => e.followerAddress,
    );
    this.existingUsers = [...this.existingUsers, ...userData];
    return userData;
  }

  async getFarcasterFollowing(address: string) {
    const { data, error } = await this.fetchData<{
      SocialFollowings: {
        Following: Array<{
          followingAddress: {
            addresses: Array<string>;
            socials: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp?: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
    }>(farcasterFollowingQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    const userData = data.SocialFollowings.Following.map(
      (e) => e.followingAddress,
    );
    this.existingUsers = [...this.existingUsers, ...userData];
    return userData;
  }

  async getTokenReceive(address: string) {
    const { data, error } = await this.fetchData<{
      Ethereum: {
        TokenTransfer: Array<{
          account: {
            addresses: Array<string>;
            socials: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
      Polygon: {
        TokenTransfer: Array<{
          account: {
            addresses: Array<string>;
            socials: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
      Base: {
        TokenTransfer: Array<{
          account: {
            addresses: Array<string>;
            socials: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
    }>(tokenReceiveQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    const baseData = data.Base.TokenTransfer.map((e) => e.account);
    const ethereumData = data.Ethereum.TokenTransfer.map((e) => e.account);
    const PolygonData = data.Polygon.TokenTransfer.map((e) => e.account);
    this.existingUsers = [
      ...this.existingUsers,
      ...baseData,
      ...ethereumData,
      ...PolygonData,
    ];
    return [...baseData, ...ethereumData, ...PolygonData];
  }

  async getTokenSent(address: string) {
    const { data, error } = await this.fetchData<{
      Ethereum: {
        TokenTransfer: Array<{
          account: {
            addresses: Array<string>;
            socials?: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp?: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
      Polygon: {
        TokenTransfer: Array<{
          account: {
            addresses: Array<string>;
            socials?: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp?: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
      Base: {
        TokenTransfer: Array<{
          account: {
            addresses: Array<string>;
            socials?: Array<{
              dappName: string;
              blockchain: string;
              profileName: string;
              profileImage: string;
              profileTokenId: string;
              profileTokenAddress: string;
            }>;
            xmtp?: Array<{
              isXMTPEnabled: boolean;
            }>;
          };
        }>;
      };
    }>(tokenSentQuery, {
      user: address,
    });
    if (error) {
      throw new Error(error.message);
    }
    const baseData = data.Base.TokenTransfer.map((e) => e.account);
    const ethereumData = data.Ethereum.TokenTransfer.map((e) => e.account);
    const PolygonData = data.Polygon.TokenTransfer.map((e) => e.account);
    this.existingUsers = [
      ...this.existingUsers,
      ...baseData,
      ...ethereumData,
      ...PolygonData,
    ];
    return [...baseData, ...ethereumData, ...PolygonData];
  }
}
