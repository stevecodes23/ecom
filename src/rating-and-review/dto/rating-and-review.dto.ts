import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class addRatingAndReviewDto{
    @ApiProperty({
        type: Number,
        description: 'product_id is a required property',
      })
      @IsNotEmpty()
      product_id: number; 
    
      @ApiProperty({
        type: String,
        description: 'review is a required property',
      })
      @IsOptional()
      review: string;

      @ApiProperty({
        type: Number,
        description: 'rating is a required property',
      })
      @IsNotEmpty()
      rating: number; 

    }