import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";

export class SignupDto{
    @ApiProperty({
        type:String,
        description: 'email is a required property',
      })
    @IsEmail()
    email_id:string;
    
    @ApiProperty({
        type:String,
        description: 'phone number is a required property',
      })
    @IsPhoneNumber()
    phone_number:string
    
    @ApiProperty({
        type:String,
        description: 'name is a required property',
      })
    @IsNotEmpty()
    name:string;

    @ApiProperty({
        type:String,
        description: 'string is a required property',
      })
    @IsNotEmpty()
    password:string;

    @ApiPropertyOptional({
        type: String,
        description: 'otp  is an optional property',
      })
    @IsOptional()
    otp:number;
    @ApiPropertyOptional({
        type: String,
        description: 'updated is an optional property',
      })
    updated_at:string;
    @ApiPropertyOptional({
        type: String,
        description: 'last logged_in is an optional property',
      })
    last_logged_in_at:string;
}

export class LoginDto{
    @ApiProperty({
        type:String,
        description: 'email is a required property',
      })
    @IsEmail()
    email_id:string;

    @ApiProperty({
        type:String,
        description: 'passsword is a required property',
      })
    @IsNotEmpty()
    password:string;

}