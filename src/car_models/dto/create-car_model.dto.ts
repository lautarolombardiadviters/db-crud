import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { CarBrand } from '../../car_brands/entities/car_brand.entity';

export class CreateCarModelDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsInt()
  brand: CarBrand;
}
