import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class categoryProductDto{
    @ApiProperty({
        type:Number,
        description:"product_id is required property"
    })
    @IsNotEmpty()
    product_id:number
   
    @ApiProperty({
        type:Number,
        description:"category_id is required property"
    })
    @IsNotEmpty()
    category_id:number
}