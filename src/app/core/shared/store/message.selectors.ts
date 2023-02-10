import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessageState } from './message.reducer';

const getMessageFeatureState = createFeatureSelector<MessageState>('message');

export const getMessages = createSelector(
  getMessageFeatureState,
  (state) => state.messages
);

export const getError = createSelector(
  getMessageFeatureState,
  (state) => state.error
);

export const getIsLoading = createSelector(
  getMessageFeatureState,
  (state) => state.isLoading
);
