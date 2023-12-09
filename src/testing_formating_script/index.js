
import fetchLensFollowing from "./function/fetchLensFollowing.js";
import fetchLensFollowers from "./function/fetchLensFollowers.js";
import calculatingScore from "./score.js";
import sortByScore from "./sort.js";
// finalOnChainGraphUsers can be stored in database



const fetchOnChainGraphData = async (address) => {
  let recommendedUsers = [];
  const fetchFunctions = [
    fetchLensFollowing,
    // fetchLensFollowers

  ];
  for (const func of fetchFunctions) {
    recommendedUsers = await func(address, recommendedUsers);
  }
  return recommendedUsers;
};

// const onChainGraphUsers = await fetchOnChainGraphData("vitalik.eth");
// const onChainGraphUsersWithScore = onChainGraphUsers.map(user => calculatingScore(user));
// //console.log(onChainGraphUsersWithScore);

// const finalOnChainGraphUsers = sortByScore(onChainGraphUsersWithScore);
// const res=finalOnChainGraphUsers.slice(0,5)
// console.log(res);
fetchOnChainGraphData('vitalik.eth').then(res => console.dir(res, { depth: null }))