// users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  // Implement additional user-related methods as needed
}
