import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CarBrand } from '../../car_brands/entities/car_brand.entity';
import { Car } from '../../cars/entities/car.entity';

@Entity('car_model')
export class CarModel {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
  @OneToMany(() => Car, (car) => car.model)
  cars: Car[];
  @ManyToOne(() => CarBrand, (carBrand) => carBrand.models)
  brand: CarBrand;
}
