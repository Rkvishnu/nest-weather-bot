// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { AuthService } from './auth.service'; // You'll need to create this service

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
  ],
  providers: [GoogleStrategy, AuthService],
})
export class AuthModule {}