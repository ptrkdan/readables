export const SORT_BY_VOTESCORE_ASC = 'SORT_BY_VOTESCORE_ASC';
export const SORT_BY_VOTESCORE_DES = 'SORT_BY_VOTESCORE_DES';
export const SORT_BY_TIMESTAMP_ASC = 'SORT_BY_TIMESTAMP_ASC';
export const SORT_BY_TIMESTAMP_DES = 'SORT_BY_TIMESTAMP_DES';

const compareVoteScore = (a, b, option) => {
  if (option === SORT_BY_VOTESCORE_DES) {
    return b.voteScore - a.voteScore;
  } else {
    return a.voteScore - b.voteScore;
  }
};

const compareTimestamp = (a, b, option) => {
  if (option === SORT_BY_TIMESTAMP_DES) {
    return b.timestamp - a.timestamp;
  } else {
    return a.timestamp - b.timestamp;
  }
};

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
};

export const compareComments = (commentA, commentB, option = SORT_BY_VOTESCORE_ASC) => {
  switch(option) {
    case SORT_BY_TIMESTAMP_ASC:
    case SORT_BY_TIMESTAMP_DES:
      return compareTimestamp(commentA, commentB, option);
    case SORT_BY_VOTESCORE_ASC:
    case SORT_BY_VOTESCORE_DES:
    default:
      return compareVoteScore(commentA, commentB, option);
  }
};