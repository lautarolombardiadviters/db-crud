import { IsNumber } from 'class-validator';

export class CreateLoginDto {
  @IsNumber()
  userId: number;
}
