import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPhoneNumber } from "class-validator";

export class CreateProfileDto {
    @ApiProperty({
        type:Number,
        description: 'user_id is a required property',
      })
      @IsNotEmpty()
      user_id:number
     
      @ApiProperty({
        type:String,
        description: ' number is a required property',
      })
      @IsPhoneNumber()
      alternate_number:String
      
      @ApiProperty({
        type:Number,
        description: 'image_id is a  property',
      })
      @IsNotEmpty()
      image_id:number
 
       
      @ApiProperty({
        type:Number,
        description: 'gender is a  property',
      })
      @IsNotEmpty()
      gender:number
}