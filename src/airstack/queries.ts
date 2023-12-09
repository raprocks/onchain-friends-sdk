export const lensFollowingQuery = `
query MyQuery($user: Identity!) {
    SocialFollowings(
      input: {filter: {identity: {_eq: $user}, dappName: {_eq: lens}}, blockchain: ALL, limit: 200}
    ) {
      Following {
        followingAddress {
          addresses
          socials(input: {filter: {dappName: {_eq: lens}}}) {
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

export const lensFollowerQuery=`
query MyQuery($user: Identity!) {
  SocialFollowers(
    input: {filter: {identity: {_eq: $user}, dappName: {_eq: lens}}, blockchain: ALL, limit: 50}
  ) {
    Follower {
      followerAddress {
        addresses
        socials(input: {filter: {dappName: {_eq: lens}}}) {
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

export const farcasterFollowerQuery=`
query MyQuery($user: Identity!) {
  SocialFollowers(
    input: {filter: {identity: {_eq: $user}, dappName: {_eq: farcaster}}, blockchain: ALL, limit: 200}
  ) {
    Follower {
      followerAddress {
        addresses
        socials(input: {filter: {dappName: {_eq: lens}}}) {
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

export const farcasterFollowingQuery=`
query MyQuery($user: Identity!) {
  SocialFollowings(
    input: {filter: {identity: {_eq: $user}, dappName: {_eq: farcaster}}, blockchain: ALL, limit: 200}
  ) {
    Following {
      followingAddress {
        addresses
        socials(input: {filter: {dappName: {_eq: lens}}}){
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

export const tokenReceiveQuery=`
query MyQuery($user: Identity!) {
  Ethereum: TokenTransfers(
    input: {filter: {to: {_eq: $user}}, blockchain: ethereum, limit: 200}
  ) {
    TokenTransfer {
      account: to {
        addresses
        socials(input: {filter: {dappName: {_eq: lens}}}) {
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
    input: {filter: {to: {_eq: $user}}, blockchain: polygon, limit: 200}
  ) {
    TokenTransfer {
      account: to {
        addresses
        socials(input: {filter: {dappName: {_eq: lens}}}) {
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
    input: {filter: {to: {_eq: $user}}, blockchain: base, limit: 200}
  ) {
    TokenTransfer {
      account: to {
        addresses
        socials(input: {filter: {dappName: {_eq: lens}}}) {
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
