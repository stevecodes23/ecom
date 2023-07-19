import { ExecutionContext, Injectable } from '@nestjs/common';

import { LoginDto, SignupDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/services/prisma.services';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { request } from 'http';
import { Utility } from 'src/utils/utility';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JsonWebTokenService
    ){}

async signup(body:SignupDto):Promise<any> {
    
    const password = await bcrypt.hashSync(body.password,10)
    const createdUser = await this.prisma.users.create({
    data:{
    
    name:body.name,
    email_id:body.email_id,
    phone_number:body.phone_number,
    password:password,
 }}
 )
//  JSON.stringify(body),JSON.parse(JSON.stringify(body))
 console.log(createdUser)
 const token =await this.jwtService.createJwtToken(createdUser)
//  const token = await this.jwtService.createJwtToken(JSON.parse(JSON.stringify(body)))
 const dec= await this.jwtService.verifyJwtToken(token)
 return{"token":token,"decrepted" :dec}
}
async login(body:LoginDto): Promise<any> {
    const password =body.password
    const user = await this.prisma.users.findFirst({
            where:{
                email_id:body.email_id,

            }
        })
        // console.log(user)
        const checkPassword = await bcrypt.compareSync(password, user["password"]);
         if (checkPassword == true){
            const token = await this.jwtService.createJwtToken(user)
            return {user,'token':token,checkPassword}
         }
         else{
            return "invalid user"
         }
    
        }
       async updatePassword(data:any,dectok:any):Promise<any>{
//         const reqBody = context.switchToHttp().getRequest();
//         const token= reqBody.headers.authorization.split(" ")[1];
//         const dectok = await this.jwtService.verifyJwtToken(token)
        //  console.log(request)
         console.log(JSON.stringify(dectok))
            if(data.newPass==data.confirmPass){
            const password = await bcrypt.hashSync(data.newPass,10)
            const user = await this.prisma.users.update({
                where:{
                    email_id:dectok.email_id
                },
                data:{
                    password:password
                }
            })
           const newtoken = await this.jwtService.createJwtToken(user)
           return {"updated_token":newtoken,"user":user}
        //  console.log(newtoken)   
        // return user
        }
        else{
            return"error"
        }      
    }
    async updateNumber(data,request:any):Promise<any>{
        const user = await this.prisma.users.update({
            where:{
                email_id:request.email_id
            },
            data:{
                phone_number:data.phone_number
            }
        })
       const newtoken = await this.jwtService.createJwtToken(user)
       return {"updated_token":newtoken,"user":user}
    }
   async getAllUsers(page,perPage):Promise<any>{
    const totalCount= await this.prisma.users.count()
    const list=await this.prisma.users.findMany({
        skip:page*perPage,
        take:perPage,
    })
    console.log(list)
    return Utility.getPaginatedFormatData(list,totalCount,page,perPage)
   }
}

