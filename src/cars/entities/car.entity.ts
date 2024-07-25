import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarModel } from '../../car_models/entities/car_model.entity';
import { Color } from '../../colors/entities/color.entity';
import { User } from '../../users/entities/user.entity';
@Entity('car')
export class Car {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @ManyToOne(() => CarModel, (carModel) => carModel.cars)
  model: CarModel;
  @Column('text')
  patent: string;
  @ManyToOne(() => Color, (color) => color.cars)
  color: Color;
  @ManyToOne(() => User, (user) => user.cars)
  user: User;
}
