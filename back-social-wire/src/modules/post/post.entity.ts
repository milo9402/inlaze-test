import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('post')
export class Post extends BaseEntity {
  @PrimaryColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 20, nullable: false })
  title: string;

  @Column({ type: 'varchar', unique: true, length: 80, nullable: false })
  messaje: string;

  //   @ManyToOne((type) => User, (user) => user.tuits, { cascade: true })
  //   @JoinColumn({ name: 'user_id' })
  @Column({ type: 'varchar', nullable: false })
  user: User;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
