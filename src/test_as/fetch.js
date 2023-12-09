import { init, fetchQuery } from '@airstack/node';

init('118f7b49bcf804ce9af37bbfe3cad9f24');

const query = `query MyQuery($user: Identity!) {
  SocialFollowings(
    input: {
      filter: { identity: { _eq: $user }, dappName: { _eq: lens } }
      blockchain: ALL
      limit: 200
    }
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
          input: {
            filter: { identity: { _eq: $user }, dappName: { _eq: lens } }
          }
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
}`;

(async () => {
    try {
        const { data, error } = await fetchQuery(query, { user: 'vitalik.eth' });
        if (error) {
            console.error('Error:', error);
        } else {
            console.dir(data, {
              depth: null
            });
        }
    } catch (err) {
        console.error('Exception:', err);
    }
})();
