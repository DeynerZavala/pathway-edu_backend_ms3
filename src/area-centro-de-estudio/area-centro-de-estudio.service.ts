// area-centro-de-estudio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AreaCentroDeEstudio } from './area-centro-de-estudio.entity';

@Injectable()
export class AreaCentroDeEstudioService {
  constructor(
    @InjectRepository(AreaCentroDeEstudio)
    private areaCentroDeEstudioRepository: Repository<AreaCentroDeEstudio>,
  ) {}

  create(data: {
    area_id: string;
    ubicacion: string;
  }): Promise<AreaCentroDeEstudio> {
    const area = this.areaCentroDeEstudioRepository.create(data);
    return this.areaCentroDeEstudioRepository.save(area);
  }

  findAll(): Promise<AreaCentroDeEstudio[]> {
    return this.areaCentroDeEstudioRepository.find();
  }

  findOne(id: string): Promise<AreaCentroDeEstudio> {
    return this.areaCentroDeEstudioRepository.findOne({
      where: { areaCentroDeEstudio_id: id },
    });
  }

  async update(
    id: string,
    data: Partial<{ area_id: string; ubicacion: string }>,
  ): Promise<AreaCentroDeEstudio> {
    await this.areaCentroDeEstudioRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.areaCentroDeEstudioRepository.delete(id);
  }
}
