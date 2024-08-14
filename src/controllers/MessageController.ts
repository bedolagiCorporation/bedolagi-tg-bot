import type TelegramBot from "node-telegram-bot-api";
import type { Message } from "node-telegram-bot-api";
import { MessageService } from "../services/MessageService";

export class MessageController {
    public static handleIncomingMessage(msg: Message, bot: TelegramBot): void {
        let response = '';
        if(msg.text){
            response = MessageService.processMessage(msg.text);
        }
        bot.sendMessage(msg.chat.id, response); 
      }
}