// area-centro-de-estudio.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AreaCentroDeEstudioService } from './area-centro-de-estudio.service';

@Controller()
export class AreaCentroDeEstudioController {
  constructor(
    private readonly areaCentroDeEstudioService: AreaCentroDeEstudioService,
  ) {}

  @MessagePattern({ cmd: 'create_area_centro_de_estudio' })
  async create(data: {
    area_id: string;
    ubicacion: string;
    centroDeEstudio: any;
  }) {
    return await this.areaCentroDeEstudioService.create(data);
  }

  @MessagePattern({ cmd: 'get_all_areas_centro_de_estudio' })
  async findAll() {
    return await this.areaCentroDeEstudioService.findAll();
  }

  @MessagePattern({ cmd: 'get_area_centro_de_estudio_by_id' })
  async findOne(id: string) {
    return await this.areaCentroDeEstudioService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_area_centro_de_estudio' })
  async update(data: { id: string; area_id?: string; ubicacion?: string }) {
    return await this.areaCentroDeEstudioService.update(data.id, data);
  }

  @MessagePattern({ cmd: 'delete_area_centro_de_estudio' })
  async remove(id: string) {
    return await this.areaCentroDeEstudioService.remove(id);
  }
}
