import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Implementar los metodos para manejo de usuarios
  async create(createUserDto: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (userExist)
      throw new BadRequestException('User already registered with email');

    const newUser = this.userRepository.create(createUserDto);
    const user = await this.userRepository.save(newUser);

    delete user.password;
    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number, userEntity?: User) {
    const user = await this.userRepository
      .findOne({
        where: {
          id,
        },
      })
      .then((u) =>
        !userEntity ? u : !!u && userEntity.id === u.id ? u : null,
      );
    if (!user)
      throw new NotFoundException('User does not exists or unauthorized');
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
