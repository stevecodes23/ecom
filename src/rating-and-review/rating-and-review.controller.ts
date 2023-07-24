import { Body, Controller, Delete, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { addRatingAndReviewDto } from './dto/rating-and-review.dto';
import { RatingAndReviewService } from './rating-and-review.service';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { User } from 'src/utils/decorator/auth.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('rating-and-review')
export class RatingAndReviewController {
    constructor(
        private readonly jwtService: JsonWebTokenService,
        private readonly ratingAndReviewService: RatingAndReviewService
      ){}
    @ApiResponse({ status: 201, description: 'review created successfully'})
    @ApiOperation({ summary: ' create review' })
    @ApiTags('add-rating-and-review')
    @Post()
    async addRatingAndReview(@Body() body:addRatingAndReviewDto,@User()token:any):Promise<any>{
        const user = await this.jwtService.verifyJwtToken(token)
        return this.ratingAndReviewService.addRatingAndReview(body,user['id']);
    }

    @ApiResponse({ status: 201, description: 'review deleted successfully'})
    @ApiOperation({ summary: ' deleted review' })
    @ApiTags('add-rating-and-review')
    @Delete('')
    async deleteRatingAndReview(@Param('id')id:number):Promise<any>{
        return this.ratingAndReviewService.deleteRatingAndReview(id);
    }
    
    // @ApiResponse({ status: 201, description: 'review deleted successfully'})
    // @ApiOperation({ summary: ' deleted review' })
    // @ApiTags('add-rating-and-review')
    // @Patch('/:id')
    // async updateReview(@Body()data:addRatingAndReviewDto):Promise<any>{
    //     return this.ratingAndReviewService.updateReview(data)
    // }
}

