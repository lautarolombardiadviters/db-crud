import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarBrandDto } from './dto/create-car_brand.dto';
import { UpdateCarBrandDto } from './dto/update-car_brand.dto';
import { CarBrand } from './entities/car_brand.entity';

@Injectable()
export class CarBrandsService {
  constructor(@InjectRepository(CarBrand) private readonly cardBrandRepository: Repository<CarBrand>) {}
  create(createCarBrandDto: CreateCarBrandDto) {
    return this.cardBrandRepository.save(createCarBrandDto);
  }

  findAll() {
    return this.cardBrandRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} carBrand`;
  }

  update(id: number, updateCarBrandDto: UpdateCarBrandDto) {
    return `This action updates a #${id} carBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} carBrand`;
  }
}
