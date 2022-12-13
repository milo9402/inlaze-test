import { ClientProxy } from '@nestjs/microservices';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareHash, generateHash } from './utils/handleBcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UserService } from '../modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  /**
   * Iniciar sesion
   * @param userLoginBody
   * @returns
   */
  public async login(userLoginBody: LoginAuthDto) {
    const { email, password } = userLoginBody;



    return data;
  }

  /**
   * Registrar un usuario
   * @param userBody
   * @returns
   */
  public async register(userBody: RegisterAuthDto) {
    
  }
}
