// admin-panel/admin-panel.controller.ts
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AdminAuthGuard } from './admin-auth.guard'; // Create this guard

@Controller('admin-panel')
export class AdminPanelController {
  constructor() {}

  @Get()
  @UseGuards(AdminAuthGuard)
  async index(@Request() req) {
   
    return { message: 'Welcome to the admin panel!' };
  }

 }
