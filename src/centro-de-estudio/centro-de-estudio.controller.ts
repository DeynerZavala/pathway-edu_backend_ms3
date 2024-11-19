// centro-de-estudio.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CentroDeEstudioService } from './centro-de-estudio.service';

@Controller()
export class CentroDeEstudioController {
  constructor(
    private readonly centroDeEstudioService: CentroDeEstudioService,
  ) {}

  @MessagePattern({ cmd: 'create_centro_de_estudio' })
  async create(data: {
    nombre: string;
    globalRanking: string;
    nationalRanking: string;
    link: string;
    image: string;
  }) {
    return await this.centroDeEstudioService.create(data);
  }

  @MessagePattern({ cmd: 'get_all_centros_de_estudio' })
  async findAll() {
    return await this.centroDeEstudioService.findAll();
  }

  @MessagePattern({ cmd: 'get_centro_de_estudio_by_id' })
  async findOne(id: string) {
    return await this.centroDeEstudioService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_centro_de_estudio' })
  async update(data: {
    id: string;
    nombre?: string;
    globalRanking?: string;
    nationalRanking?: string;
    link?: string;
    image?: string;
  }) {
    return await this.centroDeEstudioService.update(data.id, data);
  }

  @MessagePattern({ cmd: 'delete_centro_de_estudio' })
  async remove(id: string) {
    return await this.centroDeEstudioService.remove(id);
  }
}
