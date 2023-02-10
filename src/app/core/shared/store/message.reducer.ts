import { createReducer, on } from '@ngrx/store';
import * as MessageActions from './message.actions';
import { Message } from '../models/message.model';

export interface MessageState {
  error: any;
  isLoading: boolean;
  messages: Message[];
}

const initialState: MessageState = {
  error: null,
  isLoading: false,
  messages: [],
};

export const messageReducer = createReducer(
  initialState,
  on(MessageActions.populateMessages, (state, { data }) => ({
    ...state,
    messages: [...state.messages, { text: data.message, type: 'sent' }],
  })),
  on(MessageActions.replyMessages, (state, { data }) => ({
    ...state,
    isLoading: true,
  })),
  on(MessageActions.replyMessagesSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    messages: [...state.messages, { text: data.cnt, type: 'received' }],
  })),
  on(MessageActions.replyMessagesFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
