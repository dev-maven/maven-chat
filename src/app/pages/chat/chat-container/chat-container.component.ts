import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from 'src/app/core/shared/models/message.model';
import { generateId } from 'src/app/core/utils/util.scripts';
import { MessageResponse } from '../../../core/shared/models/message-response.model';
import { MessageSent } from '../../../core/shared/models/message-sent.model';
import {
  replyMessages,
  populateMessages,
} from '../../../core/shared/store/message.actions';
import {
  getMessages,
  getIsLoading,
  getError,
} from '../../../core/shared/store/message.selectors';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent implements OnInit {
  isLoading$: Observable<boolean>;
  messages$: Observable<Message[]>;
  error$: Observable<any>;
  userId = generateId();
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.messages$ = this.store.pipe(select(getMessages));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.error$ = this.store.pipe(select(getError));
  }

  sendGreeting() {
    const messageObject: MessageSent = {
      id: this.userId,
      message: 'Hi',
    };
    this.store.dispatch(replyMessages({ data: messageObject }));
  }

  sendMessage(event: string) {
    const messageObject: MessageSent = {
      id: this.userId,
      message: event,
    };
    this.store.dispatch(populateMessages({ data: messageObject }));
    this.store.dispatch(replyMessages({ data: messageObject }));
  }
}
