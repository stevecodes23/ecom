import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post, 
  Query,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginDto,
  LoginResponseDto,
  SignUpResponseDto,
  SignupDto,
  UpdateNumber,
  UpdatePassword,
  UpdateResponseDto,
  UserListResponseDto,
} from './dto/auth.dto';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { User } from 'src/utils/decorator/auth.decorator';
import { API_CONSTANTS } from 'src/utils/constants/perPage';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JsonWebTokenService,
  ) {}
  @ApiResponse({ status: 201, type: SignUpResponseDto })
  @ApiOperation({ summary: 'signupData' })
  @ApiTags('auth')
  @Post('/signup')
  signup(@Body() data: SignupDto) {
    return this.authService.signup(data);
  }
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 201, type: LoginResponseDto })
  @ApiOperation({ summary: 'loginData' })
  @ApiBearerAuth('JWT-auth')
  @ApiTags('auth')
  @Get('/login')
  async Login(@Body() data: LoginDto, @User() token: any) {
    console.log(data);
    const user = await this.jwtService.verifyJwtToken(token);
    return this.authService.login(data);
  }

  @ApiResponse({ status: 201, type: UpdateResponseDto })
  @ApiOperation({ summary: 'update password' })
  @ApiBearerAuth('JWT-auth')
  @ApiTags('auth')
  @Patch('/update-password')
  async updatePassword(@Body() data: UpdatePassword, @User() token: any) {
    const user = await this.jwtService.verifyJwtToken(token);
    console.log(user);
    return this.authService.updatePassword(data, user);
  }
  @ApiResponse({
    status: 201,
    description: 'the number has been successfully updated',
    type: UpdateResponseDto,
  })
  @ApiOperation({ summary: 'update number' })
  @ApiBearerAuth('JWT-auth')
  @ApiTags('auth')
  @Patch('/update-number')
  async updateNumber(@Body() data: UpdateNumber, @User() token: any) {
    const user = await this.jwtService.verifyJwtToken(token);
    console.log(user);
    return this.authService.updateNumber(data, user);
  }
  @ApiResponse({
    status: 201,
    description: 'list of all the users ',
    type: UserListResponseDto,
  })
  @ApiOperation({ summary: 'get all users' })
  @ApiTags('auth')
  @Get('/all-users')
  async getAllUsers(
    @Query('page', new DefaultValuePipe(0), ParseIntPipe)
    page: number,
    @Query(
      'per_page',
      new DefaultValuePipe(API_CONSTANTS.perPage),
      ParseIntPipe,
    )
    perPage,
  ) {
    return this.authService.getAllUsers({ page, perPage });
  }
}
