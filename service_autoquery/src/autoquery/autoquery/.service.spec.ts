import { Test, TestingModule } from '@nestjs/testing';
import { Autoquery\Service } from './autoquery\.service';

describe('Autoquery\Service', () => {
  let service: Autoquery\Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Autoquery\Service],
    }).compile();

    service = module.get<Autoquery\Service>(Autoquery\Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
