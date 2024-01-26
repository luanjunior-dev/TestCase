import { Test, TestingModule } from '@nestjs/testing';
import { Autoquery\Controller } from './autoquery\.controller';
import { Autoquery\Service } from './autoquery\.service';

describe('Autoquery\Controller', () => {
  let controller: Autoquery\Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Autoquery\Controller],
      providers: [Autoquery\Service],
    }).compile();

    controller = module.get<Autoquery\Controller>(Autoquery\Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
