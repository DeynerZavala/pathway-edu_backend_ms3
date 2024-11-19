// centro-de-estudios.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CentroDeEstudioService } from './centro-de-estudio.service';
import { CentroDeEstudio } from './centro-de-estudio.entity';

@Controller('centro-de-estudios')
export class CentroDeEstudioController {
  constructor(
    private readonly centroDeEstudiosService: CentroDeEstudioService,
  ) {}

  @Post()
  create(@Body() centro: CentroDeEstudio) {
    return this.centroDeEstudiosService.create(centro);
  }

  @Get()
  findAll() {
    return this.centroDeEstudiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centroDeEstudiosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() centro: Partial<CentroDeEstudio>) {
    return this.centroDeEstudiosService.update(id, centro);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centroDeEstudiosService.remove(id);
  }
}
