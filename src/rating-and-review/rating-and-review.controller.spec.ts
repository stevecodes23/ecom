import { Test, TestingModule } from '@nestjs/testing';
import { RatingAndReviewController } from './rating-and-review.controller';

describe('RatingAndReviewController', () => {
  let controller: RatingAndReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RatingAndReviewController],
    }).compile();

    controller = module.get<RatingAndReviewController>(RatingAndReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
