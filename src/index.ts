import { Wallet } from "ethers";
import { Client } from "@xmtp/xmtp-js";

// You'll want to replace this with a wallet from your application
// const wallet = new Wallet("4d06d3f0bdae95c453412ce6fbb3df5fd300ae87e11250625b1997c9a9ac82eb");
// console.log("Wallet address: " + wallet.address);

// const xmtp = await Client.create(wallet, { env: "dev" });
// console.log("Client created", xmtp.address);

export const sendInvite = async(client: Client, toAddress: string) => {
    const isIdentityCreated = await client.canMessage(toAddress);
    console.log("Can message: " + isIdentityCreated);
    if (!isIdentityCreated) {
        console.log("The recipient is not on the dev network.");
        return false;
    }
    const conversation = await client.conversations.newConversation(toAddress);
    console.log(`Conversation created with ${conversation.peerAddress}`);
    if(!conversation) {
        console.log("Conversation not created");
        return false;
    }
    const message = await conversation.send("gm from the quickstart.");
    console.log(`Message sent: "${message.content}"`);
    return true;
};