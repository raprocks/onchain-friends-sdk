export interface QueryResponse {
  data: Data;
  error: Error;
}

export interface Data {
  Wallet: Wallet;
}

export interface Error {
  message: string;
}

export interface Wallet {
  socials: Social[];
  addresses: string[];
}

export interface Social {
  dappName: "lens" | "farcaster";
  profileName: string;
}
