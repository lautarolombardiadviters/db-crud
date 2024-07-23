import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarModel } from '../../car_models/entities/car_model.entity';
import { Color } from '../../colors/entities/color.entity';
@Entity('car')
export class Car {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @ManyToOne(() => CarModel, (carModel) => carModel.name)
  model: CarModel;
  @Column('text')
  patent: string;
  @ManyToOne(() => Color, (color) => color.name)
  color: Color;
}
