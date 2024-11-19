import { Module } from '@nestjs/common';
import { AreaCentroDeEstudioService } from './area-centro-de-estudio.service';
import { AreaCentroDeEstudio } from './area-centro-de-estudio.entity';
import { AreaCentroDeEstudioController } from './area-centro-de-estudio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroDeEstudio } from 'src/centro-de-estudio/centro-de-estudio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AreaCentroDeEstudio, CentroDeEstudio])],
  providers: [AreaCentroDeEstudioService],
  controllers: [AreaCentroDeEstudioController],
})
export class AreaCentroDeEstudioModule {}
