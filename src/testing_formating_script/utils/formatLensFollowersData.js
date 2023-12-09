function formatLensFollowersData(followers, existingUser = []) {
    const recommendedUsers = [...existingUser];
  
    for (const follower of followers) {
      const existingUserIndex = recommendedUsers.findIndex(
        ({ addresses: recommendedUsersAddresses }) =>
          recommendedUsersAddresses?.some?.((address) =>
            follower.addresses?.includes?.(address)
          )
      );
  
      const following = Boolean(follower?.mutualFollower?.Following?.length);
  
      if (existingUserIndex !== -1) {
        const follows = recommendedUsers?.[existingUserIndex]?.follows ?? {};
  
        follows.followedOnLens = true;
        follows.followingOnLens = follows.followingOnLens || following;
  
        recommendedUsers[existingUserIndex] = {
          ...follower,
          ...recommendedUsers[existingUserIndex],
          follows,
        };
      } else {
        recommendedUsers.push({
          ...follower,
          follows: {
            followingOnLens: following,
            followedOnLens: true,
          },
        });
      }
    }
    return recommendedUsers;
  }
  
  export default formatLensFollowersData;