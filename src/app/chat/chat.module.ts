import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ChatTabComponent } from './chat-sidebar/chat-tab/chat-tab.component';
import { ChatInputComponent } from './chat-input/chat-input.component';

import { FormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    ChatComponent,
    ChatSidebarComponent,
    ChatTabComponent,
    ChatInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

})
export class ChatModule { }
