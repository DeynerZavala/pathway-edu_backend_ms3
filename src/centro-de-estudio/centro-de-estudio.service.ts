// centro-de-estudios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CentroDeEstudio } from './centro-de-estudio.entity';
import { AreaCentroDeEstudio } from '../area-centro-de-estudio/area-centro-de-estudio.entity';

@Injectable()
export class CentroDeEstudioService {
  constructor(
    @InjectRepository(CentroDeEstudio)
    private centroDeEstudioRepository: Repository<CentroDeEstudio>,
  ) {}

  // Crear un nuevo centro de estudios
  create(centro: CentroDeEstudio): Promise<CentroDeEstudio> {
    return this.centroDeEstudioRepository.save(centro);
  }

  // Obtener todos los centros de estudio
  findAll(): Promise<CentroDeEstudio[]> {
    return this.centroDeEstudioRepository.find({
      relations: ['areaCentroDeEstudio'],
    });
  }

  // Obtener un centro de estudios por ID
  findOne(id: string): Promise<CentroDeEstudio> {
    return this.centroDeEstudioRepository.findOne({
      where: { centroDeEstudios_id: id },
      relations: ['areaCentroDeEstudio'],
    });
  }

  // Actualizar un centro de estudios
  async update(
    id: string,
    centro: Partial<CentroDeEstudio>,
  ): Promise<CentroDeEstudio> {
    await this.centroDeEstudioRepository.update(id, centro);
    return this.findOne(id);
  }

  // Eliminar un centro de estudios
  async remove(id: string): Promise<void> {
    await this.centroDeEstudioRepository.delete(id);
  }
}
