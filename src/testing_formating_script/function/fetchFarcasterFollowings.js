import { init, fetchQuery } from "@airstack/node"; // or @airstack/airstack-react for frontend javascript

// get your API key at https://app.airstack.xyz/profile-settings/api-keys
init("118f7b49bcf804ce9af37bbfe3cad9f24");

const socialFollowingsQuery = `
query MyQuery($user: Identity!) {
  SocialFollowings(
    input: {filter: {identity: {_eq: $user}, dappName: {_eq: farcaster}}, blockchain: ALL, limit: 200}
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
          input: {filter: {identity: {_eq: $user}, dappName: {_eq: farcaster}}}
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

const fetchFarcasterFollowings = async (address, existingUsers = []) => {
  let farcasterFollowingsDataResponse;
  let recommendedUsers = [...existingUsers];
  while (true) {
    if (!farcasterFollowingsDataResponse) {
      farcasterFollowingsDataResponse = await fetchQuery(
        socialFollowingsQuery,
        {
          user: address,
        }
      );
    }
    const {
      data: farcasterFollowingsData,
      error: farcasterFollowingsError,
      hasNextPage: farcasterFollowingsHasNextPage,
      getNextPage: farcasterFollowingsGetNextPage,
    } = farcasterFollowingsDataResponse ?? {};
    if (!farcasterFollowingsError) {
      const followings =
        farcasterFollowingsData?.SocialFollowings?.Following?.map(
          following => following.followingAddress
        ) ?? [];
      recommendedUsers = followings;
      if (!farcasterFollowingsHasNextPage) {
        break;
      } else {
        farcasterFollowingsDataResponse = await farcasterFollowingsGetNextPage();
      }
    } else {
      console.error("Error: ", farcasterFollowingsError);
      break;
    }
  }
  return recommendedUsers;
};

export default fetchFarcasterFollowings;