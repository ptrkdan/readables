export const SORT_BY_VOTESCORE_ASC = 'SORT_BY_VOTESCORE_ASC';
export const SORT_BY_VOTESCORE_DES = 'SORT_BY_VOTESCORE_DES';
export const SORT_BY_TIMESTAMP_ASC = 'SORT_BY_TIMESTAMP_ASC';
export const SORT_BY_TIMESTAMP_DES = 'SORT_BY_TIMESTAMP_DES';

const compareVoteScore = (postA, postB, option) => {
  if (option === SORT_BY_VOTESCORE_DES) {
    return postB.voteScore - postA.voteScore;
  } else {
    return postA.voteScore - postB.voteScore;
  }
};

const compareTimestamp = (postA, postB, option) => {
  if (option === SORT_BY_TIMESTAMP_DES) {
    return postB.timestamp - postA.timestamp;
  } else {
    return postA.timestamp - postB.timestamp;
  }
}

export const comparePosts = (postA, postB, option = SORT_BY_VOTESCORE_ASC) => {
  switch(option) {
    case SORT_BY_TIMESTAMP_ASC:
    case SORT_BY_TIMESTAMP_DES:
      return compareTimestamp(postA, postB, option);
    case SORT_BY_VOTESCORE_ASC:
    case SORT_BY_VOTESCORE_DES:
    default:
      return compareVoteScore(postA, postB, option);
  }
}