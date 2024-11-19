import { Module } from '@nestjs/common';
import { CentroDeEstudioService } from './centro-de-estudio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroDeEstudio } from './centro-de-estudio.entity';
import { CentroDeEstudioController } from './centro-de-estudio.controller';
import { AreaCentroDeEstudio } from 'src/area-centro-de-estudio/area-centro-de-estudio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CentroDeEstudio, AreaCentroDeEstudio])],
  providers: [CentroDeEstudioService],
  controllers: [CentroDeEstudioController],
})
export class CentroDeEstudioModule {}
