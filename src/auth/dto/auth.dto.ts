import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";

export class SignupDto{
    @IsEmail()
    email_id:string;
    @IsPhoneNumber()
    phone_number:string
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    password:string;
    @IsOptional()
    otp:number;
    updated_at:string;
    last_logged_in_at:string;
}

export class LoginDto{
    @IsEmail()
    email_id:string;
    @IsNotEmpty()
    password:string;

}