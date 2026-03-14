import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', nullable: true })
  refreshToken?: string | null;
}
