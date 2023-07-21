import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';

@Injectable()
export class RatingAndReviewService {
    constructor(private readonly prisma:PrismaService){}

 async addRatingAndReview(data:):Promise<any>{
         return this.prisma.ratings_an_reviews.create({
             data:{

                rating: data.rating,
                review: data.review,

             }
         })
     }
}

