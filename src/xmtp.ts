import { Client } from "@xmtp/xmtp-js";
// You'll want to replace this with a wallet from your application

export const sendInvite = async (
  client: Client,
  toAddress: string,
  messageContent: string,
) => {
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
  const message = await conversation.send(messageContent);
  console.log(`Message sent: "${message.content}"`);
  return true;
};
