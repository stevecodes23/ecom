import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CategoryDto{
  
    @ApiProperty({
        type:String,
        description: 'name is a required property',
      })
    @IsNotEmpty()
    name:string

    @ApiPropertyOptional({
        type:Number,
        description: 'parent_id is a optional property',
      })
    @IsOptional()
    parent_id:number

    @ApiProperty({
        type:Number,
        description: 'image_id is a required property',
      })
    @IsNotEmpty()
    image_id:number
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
export class CategoryDataDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  parent_id: number;

  @ApiProperty()
  image_id: number;

  @ApiProperty({ type: FilesDto })
  files: FilesDto;

  @ApiProperty()
  created_at: String;

  @ApiProperty()
  updated_at: String | null;
}
export class CategoryCreateDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  parent_id: number;

  @ApiProperty()
  image_id: number;
  
  @ApiProperty()
  created_at: String;

  @ApiProperty()
  updated_at: String | null;
}
export class CategoryResponseDto {
  @ApiProperty({ type:CategoryCreateDto })
  data: CategoryCreateDto;
}

// class CategoryItemDto {
//   @ApiProperty()
//   id: number;

//   @ApiProperty()
//   name: string;

//   @ApiProperty()
//   parent_id: number | null;

//   @ApiProperty()
//   image_id: number;

//   @ApiProperty()
//   created_at: string;

//   @ApiProperty({ type: FilesDto })
//   files: FilesDto;

//   @ApiProperty({ type: [CategoryDto], required: false })
//   subCategories: CategoryDto[];

//   @ApiProperty()
//   updated_at: string | null;
// }

// export class CategoryListDto {
//   @ApiProperty({ type: [CategoryItemDto] })
//   items: CategoryItemDto[];

//   @ApiProperty()
//   page: number;

//   @ApiProperty()
//   per_page: number;

//   @ApiProperty()
//   total: number;

//   @ApiProperty()
//   total_pages: number;
// }


// export class CategoryListResponseDto {
//   @ApiProperty({ type:CategoryListDto })
//   data: CategoryListDto;
// }
// export class FilesDto {
//   @ApiProperty()
//   id: number;

//   @ApiProperty()
//   key: string;

//   @ApiProperty()
//   created_at: string;

//   @ApiProperty()
//   updated_at: string | null;
// }
export class CateDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  parent_id: number | null;

  @ApiProperty()
  image_id: number;

  @ApiProperty()
  created_at: string;

  @ApiProperty({ type: FilesDto })
  files: FilesDto;
}

export class CatDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  parent_id: number | null;

  @ApiProperty()
  image_id: number;

  @ApiProperty()
  created_at: string;

  @ApiProperty({ type: FilesDto })
  files: FilesDto;

  @ApiProperty({ type: [CateDto], required: false })
  subCategories: CateDto[];
}
export class CategoryListDto {
  @ApiProperty({ type: [CatDto] })
  items: CatDto[];

  @ApiProperty()
  page: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;
}
export class CategoryListResponseDto {
  @ApiProperty({ type: CategoryListDto })
  data: CategoryListDto;
}

export class DeletedCategoryDataDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  parent_id: number;

  @ApiProperty()
  image_id: number;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string | null;
}
export class Delete{
  @ApiProperty({type:Number})
  id:number
}
export class DeletedCategoryResponseDto{
  @ApiProperty({type:Delete})
  data:Delete;
}

export class SubCategoryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  parent_id: number;

  @ApiProperty()
  image_id: number;

  @ApiProperty()
  created_at: string;

  @ApiProperty({ type: FilesDto })
  files: FilesDto;

  @ApiProperty()
  updated_at: string | null;
}

export class SubCategoryResponseDto {
  @ApiProperty({ type: [SubCategoryDto] })
  data: SubCategoryDto[];
}
