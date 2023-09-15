// admin-panel/admin-auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Implement logic to check if the user has admin privileges
    // You can access user information from context.switchToHttp().getRequest()
    // Example:
    // const user = context.switchToHttp().getRequest().user;
    // if (user && user.isAdmin) {
    //   return true;
    // }
    return false;
  }
}
