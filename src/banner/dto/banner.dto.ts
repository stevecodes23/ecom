import { ApiProperty } from "@nestjs/swagger";
import { BANNER_TYPE } from "@prisma/client";
import { IsNotEmpty } from "class-validator";
 export class CreateBannerDto {
    @ApiProperty({
        type:Number,
        description: 'image_id is required property',
      })
    @IsNotEmpty()
    image_id:number  
    @ApiProperty({
        type:String,
        description: 'url is a required property',
      })
    @IsNotEmpty()
    url:string
    @ApiProperty({
        type:String,
        description: 'type is a required property',
      })
    @IsNotEmpty()
    type:BANNER_TYPE
}
export class UpdateBannerDto {
  @ApiProperty({
      type:Number,
      description: 'image_id is required property',
    })
  @IsNotEmpty()
  image_id:number  
  @ApiProperty({
      type:String,
      description: 'url is a required property',
    })
  @IsNotEmpty()
  url:string
  @ApiProperty({
      type:String,
      description: 'type is a required property',
    })
  @IsNotEmpty()
  type:BANNER_TYPE
}

export class CreateBannerDataDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  image_id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string | null;

  @ApiProperty()
  status: string;
}

export class CreateBannerResponseDto {
  @ApiProperty({ type: CreateBannerDataDto })
  data: CreateBannerDataDto;
}
export class DeleteBannerResponseDto {
  @ApiProperty({ type: CreateBannerDataDto })
  data: CreateBannerDataDto;
}
export class ToggleStatusResponseDto {
  @ApiProperty({ type: CreateBannerDataDto })
  data: CreateBannerDataDto;
}
export class UpdateResponseDto {
  @ApiProperty({ type: CreateBannerDataDto })
  data: CreateBannerDataDto;
}

export class Items{
  @ApiProperty({ type:[CreateBannerDataDto]})
  items:CreateBannerDataDto

  @ApiProperty()
  page: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;
}
export class GetAllBannerDto{
  @ApiProperty({type:Items})
  data:Items
}