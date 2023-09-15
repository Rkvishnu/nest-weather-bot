import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { TelegramService } from '../telegram/telegram.service';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly telegramService: TelegramService,
    private readonly weatherService: WeatherService,
  ) {}

  @Post('subscribe')
  async subscribe(@Body() body: { chatId: number, city: string }) {
    try {
      const weatherMessage = await this.weatherService.getWeatherForCity(body.city);
      await this.telegramService.sendMessage(body.chatId, weatherMessage);
      return { message: 'Subscribed to daily weather updates.' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
