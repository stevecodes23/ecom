import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";

export class CreateAddressDto{
    @ApiProperty({
        type:Number,
        description: 'user_id is a required property',
      })
    @IsNotEmpty()
    user_id:number;
    
    @ApiProperty({
        type:String,
        description: 'address is a required property',
      })
    @IsNotEmpty()
    address:string;
    
    @ApiProperty({
        type:String,
        description: 'city is a required property',
      })
      @IsNotEmpty()
      city:string;

      @ApiProperty({
        type:String,
        description: 'state is a required property',
      })
      @IsNotEmpty()
      state:string;

      @ApiProperty({
        type:Number,
        description: 'pincode is a required property',
      })
      @IsNotEmpty()
      pincode:number;
      

      @ApiProperty({
        type:String,
        description: 'landmark is a required property',
      })
      @IsNotEmpty()
      landmark:string;
      
      @ApiPropertyOptional({
        type:String,
        description: 'reciever_number is a required property',
      })
      @IsOptional()
      @IsPhoneNumber()
      reciever_number:string;
      
      @ApiPropertyOptional({
        type:String,
        description: 'reciever_name is a required property',
      })
      @IsOptional()
      reciever_name:string;
}
