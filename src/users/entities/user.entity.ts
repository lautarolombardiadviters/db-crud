import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../../cars/entities/car.entity';

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
  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];
}
