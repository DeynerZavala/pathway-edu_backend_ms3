import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CentroDeEstudio } from '../centro-de-estudios/centro-de-estudios.entity';
@Entity('areaCentroDeEstudio')
export class AreaCentroDeEstudio {
  @PrimaryGeneratedColumn('uuid')
  areaCentroDeEstudio_id: string;
  @Column('text')
  area_id: string;

  @ManyToOne(
    () => CentroDeEstudio,
    (centroDeEstudio) => centroDeEstudio.areaCentroDeEstudio,
  )
  centroDeEstudio: CentroDeEstudio;
}
