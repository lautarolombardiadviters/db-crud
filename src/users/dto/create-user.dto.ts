import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsInt()
  userId: number;
  @ApiProperty()
  @IsString()
  firstName: string;
  @ApiProperty()
  @IsString()
  lastName: string;
}
