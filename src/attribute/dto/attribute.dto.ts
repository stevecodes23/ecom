import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { timeStamp } from "console";

export class CreateAttributeDto {
    @ApiProperty({
        type:String,
        description: 'name is a required property',
      })
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty({
        type:Number,
        description: 'attribute_group_id is a required property',
      })
    @IsNotEmpty()
    attribute_group_id:number
}
export class AttributeDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    attribute_group_id: number;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  
    @ApiProperty()
    deleted_at: string | null;
  }
  
  export class CreateAttributeResponseDto {
    @ApiProperty({ type: AttributeDto })
    data: AttributeDto;
  }
  export class AttributeMessage {
    @ApiProperty()
    message: string;
  }
  export class DeleteAttributeResponseDto {
    @ApiProperty({ type: AttributeMessage })
    data: AttributeMessage;
  }
  export class UpdateAttributeResponseDto {
    @ApiProperty({ type: AttributeMessage })
    data: AttributeMessage;
  }
  export class AttributeValueNestedDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    attribute_id: number;
  
    @ApiProperty()
    value: string;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  
    @ApiProperty()
    deleted_at: string | null;
  }
  export class AttributeGetDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    attribute_group_id: number;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  
    @ApiProperty()
    deleted_at: string | null;

    @ApiProperty({
      type:[AttributeValueNestedDto]
    })
    attribute_values:AttributeValueNestedDto
  }
  export class AttributeValueDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    attribute_id: number;
  
    @ApiProperty()
    value: string;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  
    @ApiProperty()
    deleted_at: string | null;
  }

  export class AttributeArray{
    @ApiProperty({ type: [AttributeGetDto]})
    items:AttributeGetDto;
    @ApiProperty()
    page: number;
  
    @ApiProperty()
    per_page: number;
  
    @ApiProperty()
    total: number;
  
    @ApiProperty()
    total_pages: number;
  }
  export class GetAttributeResponseDto{
   @ApiProperty({type:AttributeArray})
   data:AttributeArray    
  }