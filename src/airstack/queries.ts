export const lensFollowingQuery = `
query MyQuery($user: Identity!) {
    SocialFollowings(
      input: {filter: {identity: {_eq: $user}, dappName: {_eq: lens}}, blockchain: ALL, limit: 200}
    ) {
      Following {
        followingAddress {
          addresses
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
          mutualFollower: socialFollowers(
            input: {filter: {identity: {_eq: $user}, dappName: {_eq: lens}}}
          ) {
            Follower {
              followerAddress {
                socials {
                  profileName
                }
              }
            }
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
        mutualFollowing: socialFollowings(
          input: {filter: {identity: {_eq: $user}, dappName: {_eq: lens}}}
        ) {
          Following {
            followingAddress {
              socials {
                profileName
              }
            }
          }
        }
      }
    }
  }
}
`;