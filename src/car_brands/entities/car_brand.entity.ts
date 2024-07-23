import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CarModel } from '../../car_models/entities/car_model.entity';

@Entity('car_brand')
export class CarBrand {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
  @OneToMany(() => CarModel, (carModel) => carModel.name)
  models: CarModel[];
}
