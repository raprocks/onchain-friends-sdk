import { init, fetchQuery } from "@airstack/node"; // or @airstack/airstack-react for frontend javascript
import formatTokenSentData from "../utils/formatTokenSentData.js";

// get your API key at https://app.airstack.xyz/profile-settings/api-keys
init("118f7b49bcf804ce9af37bbfe3cad9f24");

const tokenSentQuery = `
query TokenSent($user: Identity!) {
    Ethereum: TokenTransfers(
      input: {filter: {from: {_eq: $user}}, blockchain: ethereum, limit: 200}
    ) {
      TokenTransfer {
        account: to {
          addresses
          primaryDomain {
            name
          }
          domains {
            name
            isPrimary
          }
          socials {
            dappName
            blockchain
            profileName
            profileImage
            profileTokenId
            profileTokenAddress
          }
          xmtp {
            isXMTPEnabled
          }
        }
      }
    }
    Polygon: TokenTransfers(
      input: {filter: {from: {_eq: $user}}, blockchain: polygon, limit: 200}
    ) {
      TokenTransfer {
        account: to {
          addresses
          primaryDomain {
            name
          }
          domains {
            name
            isPrimary
          }
          socials {
            dappName
            blockchain
            profileName
            profileImage
            profileTokenId
            profileTokenAddress
          }
          xmtp {
            isXMTPEnabled
          }
        }
      }
    }
    Base: TokenTransfers(
      input: {filter: {from: {_eq: $user}}, blockchain: base, limit: 200}
    ) {
      TokenTransfer {
        account: to {
          addresses
          primaryDomain {
            name
          }
          domains {
            name
            isPrimary
          }
          socials {
            dappName
            blockchain
            profileName
            profileImage
            profileTokenId
            profileTokenAddress
          }
          xmtp {
            isXMTPEnabled
          }
        }
      }
    }
  }
`;

const fetchTokenSent = async (address, existingUsers = []) => {
  let res;
  let recommendedUsers = [...existingUsers];
  while (true) {
    if (!res) {
      res = await fetchQuery(tokenSentQuery, {
        user: address,
      });
    }
    const { data, error, hasNextPage, getNextPage } = res ?? {};
    if (!error) {
      const ethData = (data?.Ethereum?.TokenTransfer ?? []).map(
        (transfer) => transfer.account
      );
      const polygonData = (data?.Polygon?.TokenTransfer ?? []).map(
        (transfer) => transfer.account
      );
      const baseData = (data?.Base?.TokenTransfer ?? []).map(
        (transfer) => transfer.account
      );

      const tokenTransfer = [...ethData, ...polygonData, ...baseData];
      recommendedUsers = [
        ...formatTokenSentData(tokenTransfer, recommendedUsers),
      ];
      if (!hasNextPage) {
        break;
      } else {
        res = await getNextPage();
      }
    } else {
      console.error("Error: ", error);
      break;
    }
  }
  return recommendedUsers;
};

export default fetchTokenSent;