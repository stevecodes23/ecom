import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class SignUpResponseData{
  @ApiProperty({
    type:String
  })
  @IsString()
  token:string

  
  @ApiProperty({
    type: Number,
  })
  @IsEmail()
  id: number;
  @ApiProperty({
    type: String,
  })
  @IsEmail()
  email_id: string;

  @ApiProperty({
    type: String,
  })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({
    type: String,
  })
  @IsOptional()
  otp: number;
  @ApiPropertyOptional({
    type: String,
  })
  updated_at: string;
  @ApiPropertyOptional({
    type: String,
  })
  last_logged_in_at: string;

  @ApiPropertyOptional({
    type: String,
  })
  status: string;
  @ApiPropertyOptional({
    type: String,
  })
  created_at: string;

  @ApiPropertyOptional({
    type: String,
  })
  iat: string;
}
export class SignupResponseDto {
  @ApiProperty()
  token: string;
  @ApiProperty({ type: SignUpResponseData })
  dec: SignUpResponseData;
}


export class SignupDto {
  @ApiProperty({
    type: String,
    description: 'email is a required property',
  })
  @IsEmail()
  email_id: string;

  @ApiProperty({
    type: String,
    description: 'phone number is a required property',
  })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    type: String,
    description: 'name is a required property',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'string is a required property',
  })
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({
    type: String,
    description: 'otp  is an optional property',
  })
  @IsOptional()
  otp: number;
  @ApiPropertyOptional({
    type: String,
    description: 'updated is an optional property',
  })
  updated_at: string;
  @ApiPropertyOptional({
    type: String,
    description: 'last logged_in is an optional property',
  })
  last_logged_in_at: string;
}


export class LoginResponseDto {
  // @ApiProperty({
  //   type:Number,
  // })
  // @IsEmail()
  // id:number;
  // @ApiProperty({
  //     type:String,
  //   })
  // @IsEmail()
  // email_id:string;

  // @ApiProperty({
  //     type:String,
  //   })
  // @IsPhoneNumber()
  // phone_number:string

  // @ApiProperty({
  //     type:String,
  //   })
  // @IsNotEmpty()
  // name:string;

  // @ApiProperty({
  //     type:String,
  //   })
  // @IsNotEmpty()
  // password:string;

  // @ApiPropertyOptional({
  //     type: String,
  //   })
  // @IsOptional()
  // otp:number;
  // @ApiPropertyOptional({
  //     type: String,
  //   })
  // updated_at:string;
  // @ApiPropertyOptional({
  //     type: String,
  //   })
  // last_logged_in_at:string;

  // @ApiPropertyOptional({
  //   type: String,
  // })
  //  status:string;
  // @ApiPropertyOptional({
  //   type: String,
  // })
  //  created_at:string;

  //  @ApiPropertyOptional({
  //   type: String,
  // })
  //   iat:string;
  @ApiProperty({
    type: String,
    description: 'returned JWT token',

  })
  data: String;
}

export class LoginDto {
  @ApiProperty({
    type: String,
    description: 'email is a required property',
  })
  @IsEmail()
  email_id: string;

  @ApiProperty({
    type: String,
    description: 'passsword is a required property',
  })
  @IsNotEmpty()
  password: string;
}

export class UpdateNumber {
  @ApiProperty({
    type: String,
    description: 'number is a required property',
  })
  @IsPhoneNumber()
  phone_number: string;
}
export class UpdateNumberResponse {
  @ApiProperty({
    type: String,
    description: 'returned JWT token',
  })
  data: String;
}

export class UpdatePassword {
  @ApiProperty({
    type: String,
    description: 'it is a required property',
  })
  @IsNotEmpty()
  newPass: string;

  @ApiProperty({
    type: String,
    description: 'it is a required property',
  })
  @IsNotEmpty()
  confirmPass: string;
}
export class UpdateResponseDto {
  @ApiProperty({
    type: String,
    description: 'returned JWT token',

  })
  data: String;
}

export class GetAllUsersDto {
  @ApiPropertyOptional({
    type: Number,
  })
  @IsOptional()
  page: number;
  @ApiPropertyOptional({
    type: Number,
  })
  @IsOptional()
  perPage: number;
}

// class GetAllUsersResponseDto {
//   @ApiProperty()
//   @IsInt()
//   id: number;

//   @ApiProperty()
//   @IsNotEmpty()
//   email_id: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   phone_number: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   name: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   password: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   status: string;

//   @ApiProperty()
//   last_logged_in_at: string | null;

//   @ApiProperty()
//   @IsNotEmpty()
//   created_at: string;

//   @ApiProperty()
//   updated_at: string | null;

//   @ApiProperty()
//   otp: string | null;
// }

// export class UserListResponseDto {
//   @ApiProperty({ type: [GetAllUsersResponseDto] })
//   @IsArray()
//   @ValidateNested({ each: true })
//   data: GetAllUsersResponseDto[];

//   @ApiProperty()
//   @IsInt()
//   page: number;

//   @ApiProperty()
//   @IsInt()
//   per_page: number;

//   @ApiProperty()
//   @IsInt()
//   total: number;

//   @ApiProperty()
//   @IsInt()
//   total_pages: number;
// }

class UserListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email_id: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  last_logged_in_at: string | null;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string | null;

  @ApiProperty()
  otp: string | null;
}

export class UserListDataDto {
  @ApiProperty({ type: [UserListDto] })
  items: UserListDto[];

  @ApiProperty()
  page: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  total_pages: number;
}

export class UserListResponseDto {
  @ApiProperty({ type: UserListDataDto })
  data: UserListDataDto;
}

