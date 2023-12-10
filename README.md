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
friendFetcher
  .connectWithFriend(userId)
  .then((connection) => {
    // Handle the connection
  })
  .catch((error) => {
    // Handle errors
  });
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
- [ ] 