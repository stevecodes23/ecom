import { Module } from '@nestjs/common';
import { RatingAndReviewController } from './rating-and-review.controller';
import { RatingAndReviewService } from './rating-and-review.service';
import { PrismaService } from 'src/services/prisma.services';
import { JwtModule } from '@nestjs/jwt';
import { JsonWebTokenService } from 'src/services/jwt.service';

@Module({
  imports: [JwtModule.register({ secret: process.env.SECRET_KEY })],
  controllers: [RatingAndReviewController],
  providers: [RatingAndReviewService,PrismaService,JsonWebTokenService]
})
export class RatingAndReviewModule {
}
