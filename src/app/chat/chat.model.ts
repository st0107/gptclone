import { QnA } from "./QnA.model";
export class Chat {
    chatId: number;
    chatTitle: string;
    chat: QnA[]
    constructor(chatId: number, chatTitle: string, chat: QnA[]) {
        this.chatId = chatId
        this.chatTitle = chatTitle
        this.chat = chat;
    }
}