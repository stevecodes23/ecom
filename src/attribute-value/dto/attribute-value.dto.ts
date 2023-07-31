import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAttributeValueDto{
    @ApiProperty({
        type:Number,
        description: 'attribute_id is a required property',
      })
    @IsNumber()
    @IsNotEmpty()
    attribute_id:number
    @ApiProperty({
        type:String,
        description: 'value is a required property',
      })
    @IsString()
    @IsNotEmpty()
    value:string

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

export class CreateAttributeValueResponseDto {
  @ApiProperty({ type: AttributeValueDto })
  data: AttributeValueDto;
}
export class AttributeValueMessage {
  @ApiProperty()
  message: string;
}
export class DeleteAttributeValueResponseDto{
  @ApiProperty({type:AttributeValueMessage})
  data:AttributeValueMessage
}
export class UpdateAttributeValueResponseDto{
  @ApiProperty({type:AttributeValueMessage})
  data:AttributeValueMessage
}
export class AttributeValuesGetDto {
  @ApiProperty({ type: [AttributeValueDto] })
  items: AttributeValueDto[];

  @ApiProperty()
  page: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;
}
export class GetAttributeValueResponseDto{
  @ApiProperty({type:AttributeValuesGetDto})
  data:AttributeValuesGetDto
}