import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private readonly carRepository: Repository<Car>) {}
  create(createCarDto: CreateCarDto) {
    return this.carRepository.save(createCarDto);
  }

  findAll() {
    return this.carRepository.find({ relations: { model: true, color: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
