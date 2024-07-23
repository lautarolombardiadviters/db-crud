import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('int')
  userId: number;
  @Column('text')
  firstName: string;
  @Column('text')
  lastName: string;
}
