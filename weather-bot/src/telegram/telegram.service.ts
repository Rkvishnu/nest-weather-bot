import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService {
  private bot: TelegramBot;

  constructor() {
    this.bot = new TelegramBot('6306926453:AAHqXYX40CAV8A8OZT0zVWAvqE8x8n2nIms', { polling: true });
  }

  async sendMessage(chatId: number, message: string) {
    await this.bot.sendMessage(chatId, message);
  }
}
