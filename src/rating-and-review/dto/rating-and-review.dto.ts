import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class AddRatingAndReviewDto {
  @ApiProperty({
    type: Number,
    description: 'product_id is a required property',
  })
  @IsNumber()
  @IsNotEmpty()
  product_id: number;

  @ApiPropertyOptional({
    type: String,
    description: 'review is a required property',
  })
  @IsString()
  @IsOptional()
  review: string;

  @ApiPropertyOptional({
    type: String,
    description: 'title is a required property',
  })
  @IsString()
  @IsOptional()
  title: string;

  @ApiPropertyOptional({
    type: Array,
    description: 'image_id is a required property',
  })
  @IsOptional()
  image_id: Array<number>;

  @ApiProperty({
    type: Number,
    description: 'rating is a required property',
  })
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rating: number;

}
export class ReviewData {
  @ApiProperty()
  id: number;

  @ApiProperty()
  product_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  review: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string | null;
}

export class ReviewImagesDto {
  @ApiProperty()
  count: number;
}

export class ReviewResponseDto {
  @ApiProperty({ type: ReviewData })
  review: ReviewData;

  @ApiProperty({ type: ReviewImagesDto })
  review_images: ReviewImagesDto;
}

export class AddRatingAndReviewResponseDto{
  @ApiProperty({ type:ReviewResponseDto})
  data:ReviewResponseDto
}
export class UpdateReviewResponseDto{
  @ApiProperty({ type:ReviewResponseDto})
  data:ReviewResponseDto
}

export class DeleteData{
  @ApiProperty({ type:Number})
  id:number
}
export class DeleteReviewResponse{
  @ApiProperty({ type:DeleteData})
  data:DeleteData 
}


export class ReviewImageDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  review_id: number;

  @ApiProperty()
  image_id: number;
}

export class ReviewDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  product_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  review: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string | null;
  
  @ApiProperty({ type: [ReviewImageDto] })
  review_images: ReviewImageDto[];
}
export class GetReviewListeDto {
  @ApiProperty({ type: [ReviewDto] })
  items: ReviewDto[];

  @ApiProperty()
  page: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;
}
 export class GetReviewResposeDto{
  @ApiProperty({type:GetReviewListeDto})
  data:GetReviewListeDto
 }