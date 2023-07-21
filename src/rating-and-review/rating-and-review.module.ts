import { Module } from '@nestjs/common';
import { RatingAndReviewController } from './rating-and-review.controller';
import { RatingAndReviewService } from './rating-and-review.service';
import { PrismaService } from 'src/services/prisma.services';

@Module({
  controllers: [RatingAndReviewController],
  providers: [RatingAndReviewService,PrismaService]
})
export class RatingAndReviewModule {
}
