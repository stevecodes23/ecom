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


export class GetWishList {
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
  
  export class GetWishListData {
    @ApiProperty({ type: [GetWishList] })
    items: GetWishList[];
  
    @ApiProperty()
    page: number;
  
    @ApiProperty()
    per_page: number;
  
    @ApiProperty()
    total: number;
  
    @ApiProperty()
    total_pages: number;
  }
  export class GetWishListResponse{
    @ApiProperty({type:GetWishListData})
    data:GetWishListData
  }