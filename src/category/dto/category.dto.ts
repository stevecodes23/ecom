import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class categoryDto{
  
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