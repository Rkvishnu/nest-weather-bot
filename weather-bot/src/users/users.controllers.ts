// users/users.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() user: Partial<User>) {
    try {
      const existingUser = await this.usersService.findOneByEmail(user.email);
      if (existingUser) {
        throw new BadRequestException('User with this email already exists.');
      }
      return this.usersService.createUser(user);
    } catch (error) {
      throw new BadRequestException('Registration failed.');
    }
  }

  // Implement other user-related routes, such as login and profile update
}
