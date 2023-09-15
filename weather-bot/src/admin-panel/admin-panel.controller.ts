// admin-panel/admin-panel.controller.ts
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AdminAuthGuard } from './admin-auth.guard'; // Create this guard

@Controller('admin-panel')
export class AdminPanelController {
  constructor() {}

  @Get()
  @UseGuards(AdminAuthGuard)
  async index(@Request() req) {
    // Implement the admin panel logic here
    // You can access user information from req.user
    return { message: 'Welcome to the admin panel!' };
  }

  // Implement other admin panel routes, such as user management and bot settings
}
