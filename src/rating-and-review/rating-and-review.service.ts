import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { addRatingAndReviewDto } from './dto/rating-and-review.dto';

@Injectable()
export class RatingAndReviewService {
    constructor(private readonly prisma:PrismaService){}

 async addRatingAndReview(data:addRatingAndReviewDto,user_id:number):Promise<any>{
         const review = await this.prisma.ratings_an_reviews.create({
             data:{
                rating: data.rating,
                review: data.review,
                product_id:data.product_id,
                user_id:user_id,
                title:data.title
             }
         })
         const review_images= await this.prisma.review_images.createMany({
            data:data.image_id.map(item=>({
                review_id:review.id,
                image_id:item
            }))
         })
         return {review:review,images:review_images}
     }

    async deleteRatingAndReview(id: number):Promise<any> {
       const deleted_images=await this.prisma.review_images.deleteMany({
        where:{
            review_id:id
        }
       })
       const deleted_review= await this.prisma.ratings_an_reviews.delete({
        where:{
            id:id
        }
       })
       return {deleted_images:deleted_images,deleted_review:deleted_review}
    }
    async updateReview(data:addRatingAndReviewDto,id:number):Promise<any>{
        const review = await this.prisma.ratings_an_reviews.update({
            data:{
               rating: data.rating,
               review: data.review,
               product_id:data.product_id,
               title:data.title
            },where:{
                id:id
            }
        })
        const review_images= await this.prisma.review_images.createMany({
           data:data.image_id.map(item=>({
               review_id:review.id,
               image_id:item
           }))
        })
        return {review:review,images:review_images}
    }
}

