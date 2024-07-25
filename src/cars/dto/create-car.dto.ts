import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { CarModel } from '../../car_models/entities/car_model.entity';
import { Color } from '../../colors/entities/color.entity';
import { User } from '../../users/entities/user.entity';

export class CreateCarDto {
  @ApiProperty()
  @IsString()
  patent: string;
  @ApiProperty()
  @IsInt()
  model: CarModel;
  @ApiProperty()
  @IsInt()
  color: Color;
  @ApiProperty()
  @IsUUID()
  user: User;
}
