// centro-de-estudio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CentroDeEstudio } from './centro-de-estudio.entity';

@Injectable()
export class CentroDeEstudioService {
  constructor(
    @InjectRepository(CentroDeEstudio)
    private centroDeEstudioRepository: Repository<CentroDeEstudio>,
  ) {}

  create(data: {
    nombre: string;
    globalRanking: string;
    nationalRanking: string;
    link: string;
    image: string;
  }): Promise<CentroDeEstudio> {
    const centro = this.centroDeEstudioRepository.create(data);
    return this.centroDeEstudioRepository.save(centro);
  }

  findAll(): Promise<CentroDeEstudio[]> {
    return this.centroDeEstudioRepository.find({
      relations: ['areaCentroDeEstudio'],
    });
  }

  findOne(id: string): Promise<CentroDeEstudio> {
    return this.centroDeEstudioRepository.findOne({
      where: { centroDeEstudios_id: id },
      relations: ['areaCentroDeEstudio'],
    });
  }

  async update(
    id: string,
    data: Partial<{
      nombre: string;
      globalRanking: string;
      nationalRanking: string;
      link: string;
      image: string;
    }>,
  ): Promise<CentroDeEstudio> {
    await this.centroDeEstudioRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.centroDeEstudioRepository.delete(id);
  }
}
