import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private accessToken = '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';

  constructor(private http: HttpClient) { }

  completeChat(userInput: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });

    const payload = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: userInput
        }
      ],
      temperature: 0.7
    };

    return this.http.post<any>(this.apiUrl, payload, { headers });
  }

}
