import { ExecutionContext, HttpException, Injectable } from '@nestjs/common';

import {
  GetAllUsersDto,
  LoginDto,
  SignupDto,
  UpdatePassword, 
} from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/services/prisma.services';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { Utility } from 'src/utils/utility';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JsonWebTokenService,
  ) {}

  async signup(body: SignupDto): Promise<any> {
    const password = await bcrypt.hashSync(body.password, 10);
    const createdUser = await this.prisma.users.create({
      data: {
        name: body.name,
        email_id: body.email_id,
        phone_number: body.phone_number,
        password: password,
      },
    });
    //  JSON.stringify(body),JSON.parse(JSON.stringify(body))
    console.log(createdUser);
    const token = await this.jwtService.createJwtToken(createdUser);
    //  const token = await this.jwtService.createJwtToken(JSON.parse(JSON.stringify(body)))
    const user = await this.jwtService.verifyJwtToken(token);
    return { data:{token,user}};
  }
  async login(body: LoginDto): Promise<any> {
    const password = body.password;
    const user = await this.prisma.users.findFirst({
      where: {
        email_id: body.email_id,
      },
    });
  
    // console.log(user)
    const checkPassword = await bcrypt.compareSync(password, user['password']);
    if (checkPassword == true) {
      const lastLoggedIn = await this.prisma.users.update({
        where:{
          id:user.id
        },data: {
          last_logged_in_at: new Date()
        }
      })
      const token = await this.jwtService.createJwtToken(user);
      // return {user,'token':token,checkPassword}
      return { data: token };
    } else {
      throw new HttpException('user not found',404)
    }
  }
  async updatePassword(data: UpdatePassword, dectok: any): Promise<any> {
    //         const reqBody = context.switchToHttp().getRequest();
    //         const token= reqBody.headers.authorization.split(" ")[1];
    //         const dectok = await this.jwtService.verifyJwtToken(token)
    //  console.log(request)
    console.log(JSON.stringify(dectok));
    if (data.newPass == data.confirmPass) {
      const password = await bcrypt.hashSync(data.newPass, 10);
      const user = await this.prisma.users.update({
        where: {
          email_id: dectok.email_id,
        },
        data: {
          password: password,
          updated_at: new Date()
        },
      });
      const newtoken = await this.jwtService.createJwtToken(user);
      return { data:"password has been updated" };
      //  console.log(newtoken)
      // return user
    } else {
      return 'error';
    }
  }
  async updateNumber(data, request: any): Promise<any> {
    const user = await this.prisma.users.update({
      where: {
        email_id: request.email_id,
      },
      data: {
        phone_number: data.phone_number,
        updated_at:new Date()
      },
    });
    const newtoken = await this.jwtService.createJwtToken(user);
    return { data:"Phone number has been updated " };
  }
  async getAllUsers(data: GetAllUsersDto): Promise<any> {
    const totalCount = await this.prisma.users.count();
    const list = await this.prisma.users.findMany({
      skip: data.page * data.perPage,
      take: data.perPage,
    });
    console.log(list);
    return Utility.getPaginatedFormatData(
      list,
      totalCount,
      data.page,
      data.perPage,
    );
  }
}
