import { Test, TestingModule } from '@nestjs/testing';
import { ArticalsService } from './articals.service';

describe('ArticalsService', () => {
  let service: ArticalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticalsService],
    }).compile();

    service = module.get<ArticalsService>(ArticalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
