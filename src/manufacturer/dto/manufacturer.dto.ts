import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class manufacturerDto{
    @ApiProperty({
        type: String,
        description: "this is a required property"
    })
    @IsNotEmpty()
    company_name: string;

    @ApiProperty({
        type: String,
        description: "this is a required property"
    })
    @IsNotEmpty()
    display_name: string;

    @ApiProperty({
        type: String,
        description: "this is a required property"
    })
    @IsNotEmpty()
    address: string;
    
    @ApiProperty({
        type: String,
        description: "this is a required property"
    })
    @IsNotEmpty()
    @IsEmail()
    email_id: string;

}