export const SORT_BY_VOTESCORE = 'SORT_BY_VOTESCORE';
export const SORT_BY_TIMESTAMP = 'SORT_BY_TIMESTAMP';

const compareVoteScore = (postA, postB, isDescending) => {
  if (isDescending) {
    return postB.voteScore - postA.voteScore;
  } else {
    return postA.voteScore - postB.voteScore;
  }
};

const compareTimestamp = (postA, postB, isDescending) => {
  if (isDescending) {
    return postB.timestamp - postA.timestamp;
  } else {
    return postA.timestamp - postB.timestamp;
  }
}

export const comparePosts = (postA, postB, option = SORT_BY_VOTESCORE , isDescending) => {
  switch(option) {
    case SORT_BY_TIMESTAMP:
      return compareTimestamp(postA, postB, isDescending);
    case SORT_BY_VOTESCORE:
    default:
      return compareVoteScore(postA, postB, isDescending);
  }
}