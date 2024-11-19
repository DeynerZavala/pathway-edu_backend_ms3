import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CentroDeEstudio } from '../centro-de-estudio/centro-de-estudio.entity';

@Entity('area-centro-de-estudio')
export class AreaCentroDeEstudio {
  @PrimaryGeneratedColumn('uuid')
  areaCentroDeEstudio_id: string;

  @Column('text')
  area_id: string;

  @Column('text')
  ubicacion: string;

  @ManyToOne(
    () => CentroDeEstudio,
    (centroDeEstudio) => centroDeEstudio.areaCentroDeEstudio,
  )
  centroDeEstudio: CentroDeEstudio;
}
