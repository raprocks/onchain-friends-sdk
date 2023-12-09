
import fetchLensFollowing from "./function/fetchLensFollowing.js";
import fetchLensFollowers from "./function/fetchLensFollowers.js";
import fetchFarcasterFollowings from "./function/fetchFarcasterFollowings.js";
import fetchFarcasterFollowers from "./function/fetchFarcasterFollowers.js";
import fetchTokenSent from "./function/fetchTokenSent.js";
import fetchTokenReceived from "./function/fetchTokenReceived.js";


import calculatingScore from "./score.js";
import sortByScore from "./sort.js";
// finalOnChainGraphUsers can be stored in database



const fetchOnChainGraphData = async (address) => {
  let recommendedUsers = [];
  const fetchFunctions = [
    fetchLensFollowing,
    fetchLensFollowers,
    fetchFarcasterFollowings,
    //fetchFarcasterFollowers,
    fetchTokenSent,
    fetchTokenReceived

  ];
  for (const func of fetchFunctions) {
    recommendedUsers = await func(address, recommendedUsers);
  }
  return recommendedUsers;
};

// const res= await fetchOnChainGraphData("vitalik.eth")
// console.log(res)
const onChainGraphUsers = await fetchOnChainGraphData("vitalik.eth");
const onChainGraphUsersWithScore = onChainGraphUsers.map(user => calculatingScore(user));
// console.log(onChainGraphUsersWithScore);

const finalOnChainGraphUsers = sortByScore(onChainGraphUsersWithScore);
const res=finalOnChainGraphUsers.slice(0,6)
console.dir(res, {depth:null});