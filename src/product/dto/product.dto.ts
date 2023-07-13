import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";
export class addProductDto{
    @ApiProperty({
        type:String,
        description: 'name is a required property',
      })
    @IsNotEmpty()
    name:string;
    
    @ApiProperty({
      type:String,
      description: 'descrition is a required property',
    })
  @IsNotEmpty()
   decsription:string;

   @ApiProperty({
    type:String,
    description: 'origin is a required property',
  })
 @IsNotEmpty()
  origin:string;
  
  @ApiPropertyOptional({
    type:Number,
    description: 'discount_percentage is a required property',
  })
@IsNotEmpty()
discount_percentage:number;

@ApiPropertyOptional({
  type:Number,
  description: 'discounted_price is a required property',
})
@IsNotEmpty()
discounted_price:number;

@ApiProperty({
  type:Number,
  description: 'thumbnail_image_id is a required property',
})
@IsNotEmpty()
thumbnail_image_id:number;

@ApiProperty({
  type:Number,
  description: 'manufacturer_id is a required property',
})
@IsNotEmpty()
manufacturer_id:number;

@ApiProperty({
  type:Number,
  description: 'price is a required property',
})
@IsNotEmpty()
price:number;

@ApiProperty({
  type:Number,
  description: 'minimum_quantity_to_order is a required property',
})
@IsNotEmpty()
minimum_quantity_to_order:number;

@ApiProperty({
  type:Number,
  description: 'maximum_quantity_to_order is a required property',
})
@IsNotEmpty()
maximum_quantity_to_order:number;

@ApiProperty({
  type:Number,
  description: 'quantity_to_order is a required property',
})
@IsNotEmpty()
quantity_to_order:number;


@ApiProperty({
  type:Number,
  description: 'vriant_type is a required property',
})
@IsNotEmpty()
vriant_type:number;

@ApiPropertyOptional({
  type:Number,
  description: 'master_varient_id is a not a required property',
})
@IsOptional()
master_varient_id:number;
}

export class updateDiscount{
  @ApiProperty({
    type:Number,
    description: 'discounted_percentage is a required property',
  })
  @IsNotEmpty()
  discount_percentage:number
  
}

export class addProductQtyDto{
  @ApiProperty({
    type:Number,
    description: 'quantity is a required property',
  })
  @IsNotEmpty()
  quantity:number
}