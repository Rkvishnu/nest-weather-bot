// bot-settings/bot-settings.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BotSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  apiKey: string;

  @Column()
  defaultCity: string;

  // Add more settings properties as needed
}
