import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(50)
  fullname: string;
}
