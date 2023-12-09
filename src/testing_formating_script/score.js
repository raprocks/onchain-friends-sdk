const defaultScoreMap = {
    
    followedByOnLens: 5,
    followingOnLens: 5,
    
  };
  
  const identityMap = (identities) =>
    identities.reduce((acc, identity) => {
      acc[identity] = true;
      return acc;
    }, {});
  
  
  
  const calculatingScore = (user, scoreMap = defaultScoreMap) => {
    const identities = [user];
    if (
      user.addresses?.some((address) => identityMap(identities)[address]) ||
      user.domains?.some(({ name }) => identityMap(identities)[name])
    ) {
      return;
    }
  
    let score = 0;
    if (user.follows?.followingOnLens) {
      score += scoreMap.followingOnLens;
    }
    if (user.follows?.followedOnLens) {
      score += scoreMap.followedByOnLens;
    }
    
    
    
  
    return {
      ...user,
      _score: score,
    };
  };
  
  export default calculatingScore;