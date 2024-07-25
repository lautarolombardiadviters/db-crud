import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProgrammingLanguageDto } from './dto/create-programming_language.dto';
import { UpdateProgrammingLanguageDto } from './dto/update-programming_language.dto';
import { ProgrammingLanguagesService } from './programming_languages.service';

@ApiTags('programming-languages')
@Controller('programming-languages')
export class ProgrammingLanguagesController {
  constructor(private readonly programmingLanguagesService: ProgrammingLanguagesService) {}

  @Post()
  create(@Body() createProgrammingLanguageDto: CreateProgrammingLanguageDto) {
    return this.programmingLanguagesService.create(createProgrammingLanguageDto);
  }

  @Get()
  findAll() {
    return this.programmingLanguagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programmingLanguagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgrammingLanguageDto: UpdateProgrammingLanguageDto) {
    return this.programmingLanguagesService.update(+id, updateProgrammingLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programmingLanguagesService.remove(+id);
  }
}
