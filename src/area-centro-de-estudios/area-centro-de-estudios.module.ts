import { Module } from '@nestjs/common';
import { AreaUniversidadService } from './area-universidad.service';
import { AreaUniversidadController } from './area-centro-de-estudios.controller';

@Module({
  providers: [AreaUniversidadService],
  controllers: [AreaUniversidadController],
})
export class AreaUniversidadModule {}
