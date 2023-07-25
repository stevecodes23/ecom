import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateManufacturerDto{
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

export class CreateManufacturerData{
    @ApiProperty({type:Number})
    manufacturer_id:number;
}
export class CreateManufacturerResponse{
    @ApiProperty({type:CreateManufacturerData})
    data:CreateManufacturerData;
}

export class GetManufacturerData {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    company_name: string;
  
    @ApiProperty()
    display_name: string;
  
    @ApiProperty()
    address: string;
  
    @ApiProperty()
    email_id: string;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  }
  
  export class GetManufacturerIdResponseDto {
    @ApiProperty({ type: GetManufacturerData })
    data: GetManufacturerData;
  }
  export class getAllManufacturerDto{
    @ApiProperty({type:[GetManufacturerData]})
    items: GetManufacturerData
    @ApiProperty()
    page: number;
  
    @ApiProperty()
    per_page: number;
  
    @ApiProperty()
    total: number;
  
    @ApiProperty()
    total_pages: number;
  }
  export class getAllManufacturersResponseDto{
    @ApiProperty({type:getAllManufacturerDto})
    data:getAllManufacturerDto
  }
  export class DeleteManufacturer{
    @ApiProperty({type:Number})
    id:number

  }
  export class DeleteManufacturerResponseDto{
    @ApiProperty({type:DeleteManufacturer})
    data:DeleteManufacturer
  }

  export class UpdateManufacturerDto{
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
export class UpdateManufacturerResponse{
    @ApiProperty({type:GetManufacturerData})
    data:GetManufacturerData
}