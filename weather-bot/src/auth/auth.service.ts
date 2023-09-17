// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service'; // Import your user service

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  
  async validateUserFromGoogleProfile(profile: any): Promise<any> {
    const { id, emails, displayName } = profile;
    const email = emails[0].value;
  
    let user = await this.userService.findByEmail(email);
    if (!user) {
      // Create a new user if not found
      user = await this.userService.createUser({ username: displayName, email });
    }
  
    return user;
  }
}
