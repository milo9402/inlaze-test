import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 80)
  message: string;
}
