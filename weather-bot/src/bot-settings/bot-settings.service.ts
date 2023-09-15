// bot-settings/bot-settings.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BotSettings } from './bot-settings.entity';

@Injectable()
export class BotSettingsService {
  constructor(
    @InjectRepository(BotSettings)
    private botSettingsRepository: Repository<BotSettings>,
  ) {}

  async getBotSettings(): Promise<BotSettings> {
    return await this.botSettingsRepository.findOne();
  }

  async updateBotSettings(settings: BotSettings): Promise<BotSettings> {
    const existingSettings = await this.getBotSettings();

    if (existingSettings) {
      // Update existing settings
      Object.assign(existingSettings, settings);
      await this.botSettingsRepository.save(existingSettings);
      return existingSettings;
    } else {
      // Create new settings if they don't exist
      const newSettings = this.botSettingsRepository.create(settings);
      return await this.botSettingsRepository.save(newSettings);
    }
  }
}
