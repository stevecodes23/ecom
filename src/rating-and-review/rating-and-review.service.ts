import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { AddRatingAndReviewDto } from './dto/rating-and-review.dto';
import { Utility } from 'src/utils/utility';

@Injectable()
export class RatingAndReviewService {
    constructor(private readonly prisma: PrismaService) { }

    async addRatingAndReview(data: AddRatingAndReviewDto, user_id: number): Promise<any> {
        const review = await this.prisma.ratings_and_reviews.create({
            data: {
                rating: data.rating,
                review: data.review,
                product_id: data.product_id,
                user_id: user_id,
                title: data.title
            }
        })
        const review_images = await this.prisma.review_images.createMany({
            data: data.image_id.map(item => ({
                review_id: review.id,
                image_id: item
            }))
        })
        return { data: { review, review_images } }
    }

    async deleteRatingAndReview(id: number): Promise<any> {
        const deleted_images = await this.prisma.review_images.deleteMany({
            where: {
                review_id: id
            }
        })
        const deleted_review = await this.prisma.ratings_and_reviews.delete({
            where: {
                id: id
            }
        })
        return { data: { id: deleted_review.id } }
    }

    async updateReview(data: AddRatingAndReviewDto, id: number): Promise<any> {
        const delete_previous_images = await this.prisma.review_images.deleteMany({
            where: {
                review_id: id
            }
        })
        const review = await this.prisma.ratings_and_reviews.update({
            data: {
                rating: data.rating,
                review: data.review,
                product_id: data.product_id,
                title: data.title
            }, where: {
                id: id
            }
        })
        const review_images = await this.prisma.review_images.createMany({
            data: data.image_id.map(item => ({
                review_id: review.id,
                image_id: item
            }))
        })
        return { data: { review, review_images } }
    }
    async getReview(id: number, page, perPage): Promise<any> {
        const totalCount = await this.prisma.ratings_and_reviews.count();
        const list = await this.prisma.ratings_and_reviews.findMany({
            skip: page * perPage,
            take: perPage,
            where: {
                product_id: id,
            }, include: {
                review_images: {
                    select: {
                        file: {
                            select: {
                                key: true
                            }
                        }
                    }
                }
            }
        });
        console.log(list);
        return Utility.getPaginatedFormatData(
            list,
            totalCount,
            page,
            perPage,
        );
    }
}

