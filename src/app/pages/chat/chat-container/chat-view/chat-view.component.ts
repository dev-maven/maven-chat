import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MessageResponse } from 'src/app/core/shared/models/message-response.model';
import { Message } from 'src/app/core/shared/models/message.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent implements OnInit, AfterViewChecked {
  @Input() isLoading = false;
  @Input() messages: Message[] = [];
  @Input() error: any;
  @Output() outputText: EventEmitter<string> = new EventEmitter();
  @ViewChild('scrollContainer', { static: false })
  private scrollContainer: ElementRef;
  send = faPaperPlane;
  constructor() {}

  ngOnInit() {}

  sendMessage(text: string) {
    if (text) {
      this.outputText.emit(text);
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop =
      this.scrollContainer.nativeElement.scrollHeight;
  }
}
{
}
