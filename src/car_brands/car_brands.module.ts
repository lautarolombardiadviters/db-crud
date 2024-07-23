import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBrandsController } from './car_brands.controller';
import { CarBrandsService } from './car_brands.service';
import { CarBrand } from './entities/car_brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarBrand])],
  controllers: [CarBrandsController],
  providers: [CarBrandsService],
})
export class CarBrandsModule {}
