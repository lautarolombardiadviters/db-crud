import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModelsController } from './car_models.controller';
import { CarModelsService } from './car_models.service';
import { CarModel } from './entities/car_model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarModel])],
  controllers: [CarModelsController],
  providers: [CarModelsService],
})
export class CarModelsModule {}
