import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class addRatingAndReviewDto {
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