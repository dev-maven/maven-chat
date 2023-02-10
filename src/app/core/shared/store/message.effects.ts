import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import * as MessageActions from './message.actions';

@Injectable()
export class MessageEffects {
  replyMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.replyMessages),
      switchMap((action) =>
        this.messageService.replyMessages(action.data).pipe(
          map((data) => MessageActions.replyMessagesSuccess({ data })),
          catchError((error) =>
            of(MessageActions.replyMessagesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}
}
