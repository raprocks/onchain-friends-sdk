import { init } from "@airstack/node";

export default class Airstack {
  APIKEY: string;
  /**
   *
   */
  constructor(airstackAPIKey: string) {
    this.APIKEY = airstackAPIKey;
    init(airstackAPIKey);
  }
}
