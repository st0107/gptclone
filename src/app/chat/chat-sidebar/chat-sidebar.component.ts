import { Component } from '@angular/core';
import { Chat } from '../chat.model';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.css']
})
export class ChatSidebarComponent {
  tabList: Chat[] = [new Chat(1, 'sumit', [])];

  onClick() {
    this.tabList.push(new Chat((Math.floor(Math.random()) + 1), 'new chat', [{ question: 'hello', answer: 'hi' }]))
  }
}
