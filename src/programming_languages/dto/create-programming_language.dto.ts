import { IsString } from 'class-validator';

export class CreateProgrammingLanguageDto {
  @IsString()
  name: string;
}
