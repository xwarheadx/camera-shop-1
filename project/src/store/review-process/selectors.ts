import { ReviewType } from '../../types/review';
import { State } from '../../types/state';
import { NameSpace } from '../../consts';

export const getLoadedReviewsStatus = (state: State): boolean => state[NameSpace.Review].isReviewsDataLoaded;
export const getReviews = (state: State): ReviewType[] => state[NameSpace.Review].reviews;
export const getPostReviewStatus = (state: State): boolean => state[NameSpace.Review].isReviewPosted;
