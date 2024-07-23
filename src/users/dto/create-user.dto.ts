import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  userId: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
}
