import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../core/shared/shared.module';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatViewComponent } from './chat-container/chat-view/chat-view.component';

export const routes = [
  {
    path: '',
    component: ChatContainerComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [ChatViewComponent, ChatContainerComponent],
})
export class ChatModule {}
