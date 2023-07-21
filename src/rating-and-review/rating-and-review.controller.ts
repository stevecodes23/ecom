import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { addRatingAndReviewDto } from './dto/rating-and-review.dto';
import { RatingAndReviewService } from './rating-and-review.service';

@Controller('rating-and-review')
export class RatingAndReviewController {
    constructor(
        private readonly ratingAndReviewService: RatingAndReviewService
      ){}
    @Post('add-rating-and-review')
    async addRatingAndReview(@Body() body:addRatingAndReviewDto):Promise<any>{
        return await this.ratingAndReviewService.addRatingAndReview(body);
    }
}

