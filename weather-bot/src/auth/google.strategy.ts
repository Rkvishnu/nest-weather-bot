// auth/google.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from './auth.service'; // You'll need to create this service

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: 'YOUR_CALLBACK_URL',
      passReqToCallback: true,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    // You need to implement user validation logic here
    // Typically, you would create or retrieve the user based on the Google profile
    // You can use the authService to perform user-related operations
    // Example:
    // const user = await this.authService.validateUserFromGoogleProfile(profile);

    // Call done(null, user) if the user is validated successfully, or done(err) if there's an error
  }
}
