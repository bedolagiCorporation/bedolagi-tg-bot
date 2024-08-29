import type TelegramBot from "node-telegram-bot-api";
import type { Message } from "node-telegram-bot-api";
import { MessageService } from "../services/MessageService";
import { Controller, ControllersData } from ".";

/** 
 * Simple message controller, what can handle incoming messages from the chat 
 */
export default class MessageController implements Controller {
    bot: TelegramBot;

    constructor(bot: TelegramBot) {
        this.bot = bot;
    }

    start(): void {
        this.bot.on('message', this.handleIncomingMessage)
    }

    stop(): void {
        this.bot.off('message', this.handleIncomingMessage)
    }
    
    public handleIncomingMessage(msg: Message): void {
        let response = '';
        if(msg.text){
            response = MessageService.processMessage(msg.text);
        }
        this.bot.sendMessage(msg.chat.id, response); 
    }
}

export function create(data: ControllersData): Controller {
    return new MessageController(data.bot)
}
