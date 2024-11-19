import { AreaCentroDeEstudio } from '../area-centro-de-estudios/area-centro-de-estudios.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('centro-de-estudios')
export class CentroDeEstudio {
  @PrimaryGeneratedColumn('uuid')
  centroDeEstudios_id: string;
  @Column({ length: 255 })
  nombre: string;
  @Column('int')
  globalRanking: number;
  @Column('int')
  nationalRanking: number;
  @OneToMany(
    () => AreaCentroDeEstudio,
    (areaCentroDeEstudio) => areaCentroDeEstudio.centroDeEstudio,
  )
  areaCentroDeEstudio: AreaCentroDeEstudio[];
}
