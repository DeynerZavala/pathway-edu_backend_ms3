import { AreaCentroDeEstudio } from '../area-centro-de-estudio/area-centro-de-estudio.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('centro-de-estudios')
export class CentroDeEstudio {
  @PrimaryGeneratedColumn('uuid')
  centroDeEstudios_id: string;
  @Column({ length: 255 })
  nombre: string;
  @Column({ length: 255 })
  globalRanking: string;
  @Column({ length: 255 })
  nationalRanking: string;
  @Column('text')
  link: string;
  @Column('text')
  image: string;
  @OneToMany(
    () => AreaCentroDeEstudio,
    (areaCentroDeEstudio) => areaCentroDeEstudio.centroDeEstudio,
  )
  areaCentroDeEstudio: AreaCentroDeEstudio[];
}
