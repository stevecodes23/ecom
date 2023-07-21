import { ApiProperty } from "@nestjs/swagger";
import { BANNER_TYPE } from "@prisma/client";
import { IsNotEmpty } from "class-validator";
 export class bannerDto {
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