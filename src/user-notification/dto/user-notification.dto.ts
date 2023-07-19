import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class notificationDto{
    @ApiProperty({
        type: String,
        description: 'title is a required property',
      })
      @IsNotEmpty()
      title: string;
      @ApiProperty({
        type: String,
        description: 'message is a required property',
      })
      @IsNotEmpty()
      message: string;
}