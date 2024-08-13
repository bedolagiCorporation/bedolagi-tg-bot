import "dotenv/config";
import { Message } from "node-telegram-bot-api";
// const TelegramBot = require("node-telegram-bot-api");
import TelegramBot from "node-telegram-bot-api";

// check token
const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("BOT_TOKEN not found in .env vars");
}
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg: Message) => {
  console.log(msg.text);
  if (msg.text === "eventloop") {
    bot.sendMessage(msg.chat.id, "eventloop)");
  }
});
