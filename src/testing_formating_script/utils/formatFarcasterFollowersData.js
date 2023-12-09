function formatFarcasterFollowersData(followers, existingUser = []) {
  const recommendedUsers = [...existingUser];

  for (const follower of followers) {
    const existingUserIndex = recommendedUsers.findIndex(
      ({ addresses: recommendedUsersAddresses }) =>
        recommendedUsersAddresses?.some?.((address) =>
          follower.addresses?.includes?.(address)
        )
    );

    const following = Boolean(follower?.mutualFollowing?.Following?.length);

    if (existingUserIndex !== -1) {
      const follows = recommendedUsers?.[existingUserIndex]?.follows ?? {};

      follows.followedOnFarcaster = true;
      follows.followingOnFarcaster = follows.followingOnFarcaster || following;

      recommendedUsers[existingUserIndex] = {
        ...follower,
        ...recommendedUsers[existingUserIndex],
        follows,
      };
    } else {
      recommendedUsers.push({
        ...follower,
        follows: {
          followingOnFarcaster: following,
          followedOnFarcaster: true,
        },
      });
    }
  }
  return recommendedUsers;
}

export default formatFarcasterFollowersData;