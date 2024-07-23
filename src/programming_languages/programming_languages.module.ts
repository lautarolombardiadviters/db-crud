import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgrammingLanguage } from './entities/programming_language.entity';
import { ProgrammingLanguagesController } from './programming_languages.controller';
import { ProgrammingLanguagesService } from './programming_languages.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProgrammingLanguage])],
  controllers: [ProgrammingLanguagesController],
  providers: [ProgrammingLanguagesService],
})
export class ProgrammingLanguagesModule {}
