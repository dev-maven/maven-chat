import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MessageResponse } from '../models/message-response.model';
import { MessageSent } from '../models/message-sent.model';

@Injectable()
export class MessageService {
  appUrl = environment.url;
  corsFixUrl = 'https://thingproxy.freeboard.io/fetch/';
  constructor(private http: HttpClient) {}

  replyMessages(data: MessageSent): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(
      `${this.corsFixUrl}${this.appUrl}&uid=${data.id}&msg=${data.message}`
    );
  }
}
