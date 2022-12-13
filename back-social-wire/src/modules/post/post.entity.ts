import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('post')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, length: 20, nullable: false })
  title: string;

  @Column({ type: 'varchar', unique: true, length: 80, nullable: false })
  messaje: string;

  @ManyToOne((type) => User, (user) => user.username)
  @JoinColumn()
  user: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
