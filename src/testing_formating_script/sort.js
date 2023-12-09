const sortByScore = (recommendations) => {
    return recommendations.sort((a, b) => {
      return (b._score || 0) - (a._score || 0);
    });
  };
  
  export default sortByScore;