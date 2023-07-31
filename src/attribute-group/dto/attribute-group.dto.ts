import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAttributeGroupDto{
    @ApiProperty({
        type:String,
        description: 'name is a required property',
      })
    @IsString()
    @IsNotEmpty()
    name:string

}
export class AttributeGroupMessage {
    @ApiProperty()
    message: string;
  }
  export class DeleteAttributeGroupResponseDto {
    @ApiProperty({ type: AttributeGroupMessage })
    data: AttributeGroupMessage;
  }
  export class UpdateAttributeGroupResponseDto {
    @ApiProperty({ type: AttributeGroupMessage })
    data: AttributeGroupMessage;
  }
  export class GroupData {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    created_at: string;
  
    @ApiProperty()
    updated_at: string | null;
  
    @ApiProperty()
    deleted_at: string | null;
  }
  export class CreateAttGrouopResponse{
    @ApiProperty({type:GroupData})
    type:GroupData
  }

//   export class AttributeValueDto {
//     @ApiProperty()
//     id: number;
  
//     @ApiProperty()
//     attribute_id: number;
  
//     @ApiProperty()
//     value: string;
  
//     @ApiProperty()
//     created_at: string;
  
//     @ApiProperty()
//     updated_at: string | null;
  
//     @ApiProperty()
//     deleted_at: string | null;
//   }
  
//   export class AttributeDto {
//     @ApiProperty()
//     id: number;
  
//     @ApiProperty()
//     name: string;
  
//     @ApiProperty()
//     attribute_group_id: number;
  
//     @ApiProperty()
//     created_at: string;
  
//     @ApiProperty()
//     updated_at: string | null;
  
//     @ApiProperty()
//     deleted_at: string | null;
  
//     @ApiProperty({ type: [AttributeValueDto] })
//     attributes_values: AttributeValueDto[];
//   }
  
//   export class AttributeValueDataDto {
//     @ApiProperty({ type: [AttributeDto] })
//     items: AttributeDto[];
  
//     @ApiProperty()
//     page: number;
  
//     @ApiProperty()
//     per_page: number;
  
//     @ApiProperty()
//     total: number;
  
//     @ApiProperty()
//     total_pages: number;
//   }



// export class AttributeValueDto {
//   @ApiProperty()
//   id: number;

//   @ApiProperty()
//   attribute_id: number;

//   @ApiProperty()
//   value: string;

//   @ApiProperty()
//   created_at: string;

//   @ApiProperty()
//   updated_at: string | null;

//   @ApiProperty()
//   deleted_at: string | null;
// }

// export class AttributeDto {
//   @ApiProperty()
//   id: number;

//   @ApiProperty()
//   name: string;

//   @ApiProperty()
//   attribute_group_id: number;

//   @ApiProperty()
//   created_at: string;

//   @ApiProperty()
//   updated_at: string | null;

//   @ApiProperty()
//   deleted_at: string | null;

//   @ApiProperty({ type: [] })
//   attribute_values: AttributeValueDto[];
// }
//  export class AttributeValueNestedDto {
//     @ApiProperty()
//     id: number;
  
//     @ApiProperty()
//     attribute_id: number;
  
//     @ApiProperty()
//     value: string;
  
//     @ApiProperty()
//     created_at: string;
  
//     @ApiProperty()
//     updated_at: string | null;
  
//     @ApiProperty()
//     deleted_at: string | null;
//   }
//   export class AttributeGetDto {
//     @ApiProperty()
//     id: number;
  
//     @ApiProperty()
//     name: string;
  
//     @ApiProperty()
//     attribute_group_id: number;
  
//     @ApiProperty()
//     created_at: string;
  
//     @ApiProperty()
//     updated_at: string | null;
  
//     @ApiProperty()
//     deleted_at: string | null;

//     @ApiProperty({
//       type:[AttributeValueNestedDto]
//     })
//     attribute_values:AttributeValueNestedDto
//   }
export class AttributeGroupValueDto {
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
export class AttributeGroupDto {
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

  @ApiProperty({type:AttributeGroupValueDto})
  attribute_values:AttributeGroupValueDto
}

export class AttributeGDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string | null;

  @ApiProperty()
  deleted_at: string | null;

  @ApiProperty({type:AttributeGroupDto})
  attributes:AttributeGroupDto
}



export class AttributeResponseDto {
  @ApiProperty({ type: [AttributeGDto] })
  items: AttributeGDto[];

  @ApiProperty()
  page: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;
}

  export class GetAttributeGroupResponse{
    @ApiProperty({type:AttributeResponseDto})
    data:AttributeResponseDto
  }
