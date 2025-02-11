import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'user' })
export class User {
  @ApiProperty({ example: 1, description: 'Unique user ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'user@example.com', description: 'User email address (unique)' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  @Column()
  name: string;

  @ApiProperty({ example: '$2b$10$hashedpassword...', description: 'Hashed password of the user' })
  @Column()
  password: string; 

  @ApiProperty({ example: '2025-02-11T12:00:00Z', description: 'Timestamp when user was created' })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty({ example: '2025-02-11T12:30:00Z', description: 'Timestamp when user was last updated' })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  }
}
