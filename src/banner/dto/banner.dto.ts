import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { BANNER_TYPE, STATUS } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
// import { STATUS } from "src/utils/constants/constants";
export class CreateBannerDto {
  @ApiProperty({
    type: Number,
    description: 'image_id is required property',
  })
  @IsNumber()
  @IsNotEmpty()
  image_id: number
  @ApiProperty({
    type: String,
    description: 'url is a required property',
  })
  @IsNotEmpty()
  url: string
  @ApiProperty({
    enum: BANNER_TYPE,
    description: 'type is a required property',
  })
  @IsNotEmpty()
  type: BANNER_TYPE

  @ApiProperty({ type: Number })
  @IsNumber()
  type_id: number

  @ApiPropertyOptional({ enum: STATUS })
  @IsOptional()
  status: STATUS
  @IsOptional()
  @ApiProperty({ type: Number })
  display_order: number

}
export class UpdateBannerDto {
  @ApiProperty({
    type: Number,
    description: 'image_id is required property',
  })
  @IsNumber()
  @IsNotEmpty()
  image_id: number
  @ApiProperty({
    type: String,
    description: 'url is a required property',
  })
  @IsNotEmpty()
  url: string
  @ApiProperty({
    enum: BANNER_TYPE,
    description: 'type is a required property',
  })
  @IsNotEmpty()
  type: BANNER_TYPE

  @ApiProperty({ type: Number })
  @IsNumber()
  type_id: number

  @ApiPropertyOptional({ enum: STATUS })
  @IsOptional()
  status: STATUS
  @IsOptional()
  @ApiProperty({ type: Number })
  display_order: number

}
export class FilesDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  key: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string | null;
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
export class CreateBannerDataRDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  image_id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  updated_at: string | null;

  @ApiProperty()
  status: string;
  @ApiProperty()
  created_at: string;
  @ApiProperty({ type: FilesDto })
  files: FilesDto;

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

export class Items {
  @ApiProperty({ type: [CreateBannerDataRDto] })
  items: CreateBannerDataRDto

  @ApiProperty()
  page: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;
}
export class GetAllBannerDto {
  @ApiProperty({ type: Items })
  data: Items
}