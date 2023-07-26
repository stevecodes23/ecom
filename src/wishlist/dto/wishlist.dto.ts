import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class wishlistDto{
    @ApiProperty({
    type: Number,
    description: "this is a required property"
    })
    @IsNotEmpty()
    product_id:number;
    
}
export class WishListData {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    product_id: number;
  
    @ApiProperty()
    user_id: number;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  }
  
  export class WishListResponseDto {
    @ApiProperty({ type: WishListData })
    data: WishListData;
  }

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
  // export class GetWishList {
  //   @ApiProperty()
  //   id: number;
  
  //   @ApiProperty()
  //   product_id: number;
  
  //   @ApiProperty()
  //   user_id: number;
  
  //   @ApiProperty()
  //   created_at: string;
  
  //   @ApiProperty()
  //   updated_at: string | null;
  // }
  
  // export class ProductImageDto {
  //   @ApiProperty({ type: FilesDto })
  //   files: FilesDto;
  // }
  
  // export class ProductDto {
  //   @ApiProperty()
  //   id: number;
  
  //   @ApiProperty()
  //   name: string;
  
  //   @ApiProperty()
  //   description: string;
  
  //   @ApiProperty()
  //   origin: string;
  
  //   @ApiProperty()
  //   discount_percentage: number;
  
  //   @ApiProperty()
  //   discounted_price: number;
  
  //   @ApiProperty()
  //   thumbnail_image_id: number;
  
  //   @ApiProperty()
  //   manufacturer_id: number;
  
  //   @ApiProperty()
  //   price: number;
  
  //   @ApiProperty()
  //   minimum_quantity_to_order: number;
  
  //   @ApiProperty()
  //   maximum_quantity_to_order: number;
  
  //   @ApiProperty()
  //   quantity_to_order: number;
  
  //   @ApiProperty()
  //   stock: number;
  
  //   @ApiProperty()
  //   attribute_id: number | null;
  
  //   @ApiProperty()
  //   attribute_value_id: number | null;
  
  //   @ApiProperty()
  //   master_varient_id: number | null;
  
  //   @ApiProperty()
  //   created_at: string;
  
  //   @ApiProperty()
  //   updated_at: string | null;
  
  //   @ApiProperty({ type: [ProductImageDto] })
  //   product_images: ProductImageDto[];
  // }
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
  
  export class ProductImageDto {
    @ApiProperty({ type: FilesDto })
    files: FilesDto;
  }
  
  export class ProductDataDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    origin: string;
  
    @ApiProperty()
    discount_percentage: number;
  
    @ApiProperty()
    discounted_price: number;
  
    @ApiProperty()
    thumbnail_image_id: number;
  
    @ApiProperty()
    manufacturer_id: number;
  
    @ApiProperty()
    price: number;
  
    @ApiProperty()
    minimum_quantity_to_order: number;
  
    @ApiProperty()
    maximum_quantity_to_order: number;
  
    @ApiProperty()
    quantity_to_order: number;
  
    @ApiProperty()
    stock: number;
  
    @ApiProperty()
    attribute_id: number | null;
  
    @ApiProperty()
    attribute_value_id: number | null;
  
    @ApiProperty()
    master_varient_id: number | null;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  
    @ApiProperty({ type: [ProductImageDto] })
    product_images: ProductImageDto[];
  }
  export class ProductDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    product_id: number;
  
    @ApiProperty()
    user_id: number;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  
    @ApiProperty({ type: ProductDataDto })
    product: ProductDataDto;
  }
  
  
  export class ProductResponseDto {
    @ApiProperty({ type: [ProductDto] })
    items: ProductDto[];
  
    @ApiProperty()
    page: number;
  
    @ApiProperty()
    per_page: number;
  
    @ApiProperty()
    total: number;
  
    @ApiProperty()
    total_pages: number;
  }

  // export class GetWishListData {
  //  @ApiProperty({ type: [ProductDto] })
  //   items: ProductDto[];
  
  //   @ApiProperty()
  //   page: number;
  
  //   @ApiProperty()
  //   per_page: number;
  
  //   @ApiProperty()
  //   total: number;
  
  //   @ApiProperty()
  //   total_pages: number;
  // }
  export class GetWishListResponse{
    @ApiProperty({type:ProductResponseDto})
    data:ProductResponseDto
  }