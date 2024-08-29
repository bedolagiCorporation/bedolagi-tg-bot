import "dotenv/config";
import { Message } from "node-telegram-bot-api";
import TelegramBot from "node-telegram-bot-api";
import * as Controllers from "./controllers";

// check token
const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("BOT_TOKEN not found in .env vars");
}

// Create the bot context
const bot = new TelegramBot(token, { polling: true });

// Create the controllers
const controllers = Controllers.create(bot);