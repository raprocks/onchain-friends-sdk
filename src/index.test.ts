import { Wallet } from "ethers";
import { Client } from "@xmtp/xmtp-js";
import { sendInvite } from ".";
import { describe, expect, it } from "vitest";

describe(
  "Initial Test",
  () => {
    it("should send DM", async () => {
      const wallet = new Wallet(
        "b5c2cdad8cc84753268cc86fa06cd90c88b0f3cb4c37de70d1a6d76455f8731d",
      );
      console.log("Wallet address: " + wallet.address);

      const xmtpClient = await Client.create(wallet, { env: "dev" });

      console.log("Client created", xmtpClient.address);
      const res = await sendInvite(
        xmtpClient,
        "0x27b721B321873BaC51b1138C0310695e421fC46b",
      );
      expect(res).toBe(true);
    });
  },
  {
    timeout: 20 * 1000,
  },
);
