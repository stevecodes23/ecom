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