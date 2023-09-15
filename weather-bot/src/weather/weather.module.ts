import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { TelegramService } from '../telegram/telegram.service';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService, TelegramService],
})
export class WeatherModule {}
