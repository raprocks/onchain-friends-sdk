# Onchain Friends SDK

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Onchain Friends SDK facilitates seamless integration with social features on the blockchain. It enables users to connect, interact, and share information securely across decentralized networks.

## Installation

To install the Onchain Friends SDK from npm, use the following command:

bash
npm install onchain-friends-sdk

## Getting Started

To start using the SDK, follow these steps:

### Initialization

```javascript
const FriendFetcher = require("onchain-friends-sdk");
//or
import { FriendFetcher } from "onchain-friends-sdk";
// Initialize the SDK
const friendFetcher = new FriendFetcher({
  "<airstack api key here>"
});
```

### Usage

we provide all functions on a promise based interface.
you are free to use async/await or ".then" chaining

```javascript
// find friends on chain using airstack!
friendFetcher
  .getFarcasterFollower("<users_wallet_address>")
  .then((res) => {
    // Handle the results
  })
  .catch((error) => {
    // Handle errors
  });

// use xmtp client to invite them to a conversation
friendFetcher.inviteUser(
  xmtpClient, // a instance of a xmtp client that can send invites to the recepient
  "0x27b721B321873BaC51b1138C0310695e421fC46b", // receipient address
  "Inviting you to the App that i buidl'ed :)", // custom message
);
```

### Contributing

Contributions to the Onchain Friends SDK are welcome! To contribute, follow these steps:

1. Fork the repository
2. Create your branch (git checkout -b feature/YourFeature)
3. Commit your changes (git commit -am 'Add your feature')
4. Push to the branch (git push origin feature/YourFeature)
5. Create a new Pull Request
   Support

For additional help or queries, please visit our documentation site or open an issue.

### License

This SDK is licensed under the MIT License.

##### TODO

- [ ] Better Docs
- [ ] reactive interface for use with frontend
- [ ] dynamic types for graphql
- [ ] more sources
- [ ] Streamline SDK
- [ ] implement paginated queries to get entire list of users // might take time
- [ ] most recommended friends from accumulated users based on different scoring mechanisms
