import { createAction, props } from '@ngrx/store';
import { MessageResponse } from '../models/message-response.model';
import { MessageSent } from '../models/message-sent.model';

export const replyMessages = createAction(
  '[Message] ReplyMessages',
  props<{ data: MessageSent }>()
);

export const populateMessages = createAction(
  '[Message] PopulateMessages',
  props<{ data: MessageSent }>()
);

export const replyMessagesSuccess = createAction(
  '[Message] Reply Messages Success',
  props<{ data: MessageResponse }>()
);

export const replyMessagesFailure = createAction(
  '[Message] ReplyMessages Failure',
  props<{ error: any }>()
);
