import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class userService {
  constructor(private readonly userRepository: Repository<User>) {}

  // Implementar los metodos para manejo de usuarios
}
