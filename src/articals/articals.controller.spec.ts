import { Test, TestingModule } from '@nestjs/testing';
import { ArticalsController } from './articals.controller';
import { ArticalsService } from './articals.service';


describe('ArticalsController', () => {
  let controller: ArticalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticalsController],
      providers: [ArticalsService],
    }).compile();

    controller = module.get<ArticalsController>(ArticalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
