import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: 'user@example.com', description: 'User email address' })
  email?: string;

  @ApiPropertyOptional({ example: 'John Doe', description: 'Full name of the user' })
  name?: string;

  @ApiPropertyOptional({ example: 'securePassword123', description: 'User password (minimum 6 characters)', minLength: 6 })
  password?: string;
}
