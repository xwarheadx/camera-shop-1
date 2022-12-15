import { combineReducers } from '@reduxjs/toolkit';
import {complementaryProcess} from './complementary-process/complementary-process';
import { productProcess } from './product-process/product-process';
import { reviewProcess } from './review-process/review-process';
import { utilsProcess } from './utils-process/utils-process';
import { NameSpace } from '../consts';

export const rootReducer = combineReducers({
  [NameSpace.Product]: productProcess.reducer,
  [NameSpace.Utils]: utilsProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
  [NameSpace.Complementary]: complementaryProcess.reducer,
});
