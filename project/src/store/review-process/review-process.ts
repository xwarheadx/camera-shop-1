import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { ReviewProcess } from '../../types/state';
import { fetchReviewsAction, postReviewAction } from '../api-actions';

const initialState: ReviewProcess = {
  isReviewsDataLoaded: false,
  isReviewPosted: true,
  reviews: [],
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsDataLoaded = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isReviewsDataLoaded = true;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsDataLoaded = false;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.isReviewPosted = false;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.isReviewPosted = true;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isReviewPosted = true;
      });
  }
});
