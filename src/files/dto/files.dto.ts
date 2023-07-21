import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";
export class filesDto{
    @ApiProperty({
        type:String,
        description: 'url is a required property',
      })
    @IsNotEmpty()
    url:string
    
    @ApiProperty({
        type:String,
        description: 'name is a required property',
      })
    @IsNotEmpty()
    name:string

    @ApiProperty({
        type:String,
        description: 's3key is a required property',
      })
    @IsNotEmpty()
    key:string
}

export class CreateFilesDto {
  @ApiProperty({ type: 'string',
  description: 'key is a required property'
 })
  @IsNotEmpty()
  key: any; // Use the appropriate type for the file
}
