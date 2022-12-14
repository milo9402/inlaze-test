import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../modules/user/user.entity';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtAuthService: JwtService,
  ) {}

  /**
   * Iniciar sesion
   * @param userLoginBody
   * @returns
   */
  public async login(userLoginBody: LoginAuthDto) {
    const { email, password } = userLoginBody;

    const findUser = await this.userRepository.findOne({ where: { email } });
    if (!findUser) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword)
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

    const payload = { id: findUser.id, name: findUser.username };
    const token = this.jwtAuthService.sign(payload);
    const data = {
      user: findUser,
      token,
    };

    return data;
  }

  /**
   * Registrar un usuario
   * @param userBody
   * @returns
   */
  public async register(userBody: RegisterAuthDto) {
    const { password, email } = userBody;
    const findUser = await this.userRepository.findOne({ where: { email } });
    if (findUser)
      throw new HttpException(
        'UNPROCESSABLE_ENTITY',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    const plainToHash = await hash(password, 10);
    userBody = { ...userBody, password: plainToHash };
    const newUser = this.userRepository.create(userBody);
    const user = await this.userRepository.save(newUser);
    return user;
  }
}
