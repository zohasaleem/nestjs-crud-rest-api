import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user1@gamil.com', description: 'User email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'User 1', description: 'Full name of the user' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'password123', description: 'User password (minimum 6 characters)', minLength: 6 })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
