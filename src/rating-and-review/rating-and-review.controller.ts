import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { AddRatingAndReviewDto, AddRatingAndReviewResponseDto, DeleteReviewResponse, GetReviewResposeDto, UpdateReviewResponseDto } from './dto/rating-and-review.dto';
import { RatingAndReviewService } from './rating-and-review.service';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { User } from 'src/utils/decorator/auth.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_CONSTANTS } from 'src/utils/constants/perPage';

@Controller('rating-and-review')
export class RatingAndReviewController {
    constructor(
        private readonly jwtService: JsonWebTokenService,
        private readonly ratingAndReviewService: RatingAndReviewService
    ) { }
    @ApiResponse({ status: 201, description: 'review created successfully', type: AddRatingAndReviewResponseDto })
    @ApiOperation({ summary: ' create review' })
    @ApiTags('add-rating-and-review')
    @Post()
    async addRatingAndReview(@Body() body: AddRatingAndReviewDto, @User() token: any): Promise<any> {
        const user = await this.jwtService.verifyJwtToken(token)
        return this.ratingAndReviewService.addRatingAndReview(body, user['id']);
    }

    @ApiResponse({ status: 201, description: 'review deleted successfully', type: DeleteReviewResponse })
    @ApiOperation({ summary: ' deleted review' })
    @ApiTags('add-rating-and-review')
    @Delete('/:id')
    async deleteRatingAndReview(@Param('id') id: number): Promise<any> {
        return this.ratingAndReviewService.deleteRatingAndReview(id);
    }

    @ApiResponse({ status: 201, description: 'review updated successfully', type: UpdateReviewResponseDto })
    @ApiOperation({ summary: ' update review' })
    @ApiTags('add-rating-and-review')
    @Put('/:id')
    async updateReview(@Body() data: AddRatingAndReviewDto, @Param('id') id: number): Promise<any> {
        return this.ratingAndReviewService.updateReview(data, id)
    }
    @ApiResponse({ status: 201, description: 'review list ',type:GetReviewResposeDto })
    @ApiOperation({ summary: ' review list for products' })
    @ApiTags('add-rating-and-review')
    @Get('/:id')
    async getReview(@Param('id') id: number, @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
        @Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe,) perPage: number,
    ): Promise<any> {
        return this.ratingAndReviewService.getReview(id, page, perPage)
    }
}

