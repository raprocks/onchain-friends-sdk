import { Client } from "@xmtp/xmtp-js";
import { Wallet } from "ethers";
// You'll want to replace this with a wallet from your application

export const sendInvite = async (client: Client, toAddress: string) => {
  const isIdentityCreated = await client.canMessage(toAddress);
  console.log("Can message: " + isIdentityCreated);
  if (!isIdentityCreated) {
    console.log("The recipient is not on the dev network.");
    return false;
  }
  const conversation = await client.conversations.newConversation(toAddress);
  console.log(`Conversation created with ${conversation.peerAddress}`);
  if (!conversation) {
    console.log("Conversation not created");
    return false;
  }
  const message = await conversation.send("gm from the quickstart.");
  console.log(`Message sent: "${message.content}"`);
  return true;
};

if (require.main === module) {
  const wallet = new Wallet(
    "4d06d3f0bdae95c453412ce6fbb3df5fd300ae87e11250625b1997c9a9ac82eb",
  );
  console.log("Wallet address: " + wallet.address);

  Client.create(wallet, { env: "production" })
    .then((xmtp) => {
      console.log("Client created", xmtp.address);
      sendInvite(xmtp, "0x27b721B321873BaC51b1138C0310695e421fC46b")
        .then((res) => console.log("Done: ", res))
        .catch(console.error);
    })
    .catch(console.error);
}
