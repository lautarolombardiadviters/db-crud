import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarModelDto } from './dto/create-car_model.dto';
import { UpdateCarModelDto } from './dto/update-car_model.dto';
import { CarModel } from './entities/car_model.entity';

@Injectable()
export class CarModelsService {
  constructor(@InjectRepository(CarModel) private readonly carModelRepository: Repository<CarModel>) {}
  create(createCarModelDto: CreateCarModelDto) {
    return this.carModelRepository.save(createCarModelDto);
  }

  findAll() {
    return this.carModelRepository.find({ relations: { brand: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} carModel`;
  }

  update(id: number, updateCarModelDto: UpdateCarModelDto) {
    return `This action updates a #${id} carModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} carModel`;
  }
}
