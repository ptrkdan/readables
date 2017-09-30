export const compareVoteScore = (postA, postB, isDescending) => {
  if (isDescending) {
    return postB.voteScore - postA.voteScore;
  } else {
    return postA.voteScore - postB.voteScore;
  }
};