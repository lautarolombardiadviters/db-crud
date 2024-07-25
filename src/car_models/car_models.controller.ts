import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CarModelsService } from './car_models.service';
import { CreateCarModelDto } from './dto/create-car_model.dto';
import { UpdateCarModelDto } from './dto/update-car_model.dto';

@ApiTags('car-models')
@Controller('car-models')
export class CarModelsController {
  constructor(private readonly carModelsService: CarModelsService) {}

  @Post()
  create(@Body() createCarModelDto: CreateCarModelDto) {
    return this.carModelsService.create(createCarModelDto);
  }

  @Get()
  findAll() {
    return this.carModelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carModelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarModelDto: UpdateCarModelDto) {
    return this.carModelsService.update(+id, updateCarModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carModelsService.remove(+id);
  }
}
