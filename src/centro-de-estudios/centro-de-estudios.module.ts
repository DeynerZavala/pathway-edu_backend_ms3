import { Module } from '@nestjs/common';
import { CentroDeEstudiosService } from './centro-de-estudios.service';

@Module({
  providers: [CentroDeEstudiosService]
})
export class CentroDeEstudiosModule {}
