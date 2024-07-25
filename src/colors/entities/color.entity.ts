import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../../cars/entities/car.entity';

@Entity('car-color')
export class Color {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
  @OneToMany(() => Car, (car) => car.color)
  cars: Car[];
}
