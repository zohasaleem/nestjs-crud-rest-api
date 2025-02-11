import { Injectable, NotFoundException, HttpStatus, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<{ status: number; message: string; user?: User }> {
    try {
      const saltRounds = 10;
      const existingUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });

      if (existingUser) {
        throw new ConflictException(`User with email ${createUserDto.email} already exists`);
      }

      createUserDto.password = await bcrypt.hash(createUserDto.password, saltRounds);
      const user = this.userRepository.create(createUserDto);
      const savedUser = await this.userRepository.save(user);

      return { status: HttpStatus.CREATED, message: 'User created successfully', user: savedUser };
    } catch (error) {
      throw new ConflictException(`Failed to create user: ${error.message}`);
    }
  }

  async findAll(): Promise<{ status: number; message: string; data?: User[] }> {
    const users = await this.userRepository.find();
    if (users.length === 0) {
      return {
        status: 200,
        message: 'No users available',
        data: [],
      };
    }
    return {
      status: 200,
      message: 'Users fetched successfully',
      data: users,
    };
  }

  async findOne(id: number): Promise<{ status: number; message: string; data?: User }> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return {
        status: 200,
        message: `User with ID ${id} not found`,
        data: undefined,
      };
    }
    return {
      status: 200,
      message: 'User found',
      data: user,
    };
  }
  

  async update(id: number, updateUserDto: UpdateUserDto): Promise<{ status: number; message: string; user?: User }> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
  

    await this.userRepository.update(id, updateUserDto);
    const { data: updatedUser } = await this.findOne(id); 
  
    return { 
      status: HttpStatus.OK, 
      message: 'User updated successfully', 
      user: updatedUser 
    };
  }
  

  async remove(id: number): Promise<{  status: number; message: string }> {
    const user = await this.userRepository.findOne({where: {id}});
    if(!user) throw new NotFoundException('User not found');

    await this.userRepository.delete(id);
    return { status: HttpStatus.OK, message: `User deleted successfully` };  }
}
