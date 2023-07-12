import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto/auth.dto';
import { request } from 'http';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { User } from 'src/utils/decorator/auth.decorator';

@Controller('/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JsonWebTokenService
      ){}


@Post("/signup")
 signup(@Body() data:SignupDto){
    return this.authService.signup(data)
  }

@Get('/login')
async Login(@Body()data:LoginDto,@User()token:any){
    console.log(data);
    const user = await this.jwtService.verifyJwtToken(token)
    return this.authService.login(data)
}
@Patch("/update-password")
async updatePassword(@Body()data:any, @User()token:any){
  const user = await this.jwtService.verifyJwtToken(token)
  console.log(user)
  return this.authService.updatePassword(data,user)

}

}