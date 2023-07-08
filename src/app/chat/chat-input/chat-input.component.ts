import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  chatInput: string = '';
  constructor(private chatApi: ChatService) { }

  sendQuestion() {
    this.chatApi.completeChat(this.chatInput).subscribe(
      response => {
        console.log(this.chatInput)
        console.log(response.choices[0].message.content);
        this.chatInput = ''
      },
      error => {
        // Handle any errors
      }
    );
  }
}
