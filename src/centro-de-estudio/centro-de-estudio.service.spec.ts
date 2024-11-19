import { Test, TestingModule } from '@nestjs/testing';
import { CentroDeEstudiosService } from './centro-de-estudio.service';

describe('CentroDeEstudiosService', () => {
  let service: CentroDeEstudiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentroDeEstudiosService],
    }).compile();

    service = module.get<CentroDeEstudiosService>(CentroDeEstudiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
