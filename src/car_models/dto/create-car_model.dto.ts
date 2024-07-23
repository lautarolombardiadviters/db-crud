import { IsInt, IsString } from 'class-validator';
import { CarBrand } from '../../car_brands/entities/car_brand.entity';

export class CreateCarModelDto {
  @IsString()
  name: string;
  @IsInt()
  brand: CarBrand;
}
