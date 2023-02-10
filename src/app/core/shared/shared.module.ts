import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageLoadingComponent } from './components/message-loading/message-loading.component';
import { MessageService } from './services/message.service';

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, FontAwesomeModule],
  declarations: [HeaderComponent, MessageLoadingComponent],
  exports: [HeaderComponent, FontAwesomeModule, MessageLoadingComponent],
  providers: [MessageService],
})
export class SharedModule {}
