import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { manufacturerDto } from './dto/manufacturer.dto';

@Injectable()
export class ManufacturerService {
     constructor(
    private readonly prisma : PrismaService
  ){}
  
  async checkManufacturer(data:manufacturerDto){
    console.log(data)
    const manu = await this.prisma.manufacturer.findFirst({
        where:{
            company_name:data.company_name,
            address:data.address,
            email_id:data.email_id
              }
    })
    if(manu){
        return{manufacturer_id:manu.id}}
    else{
        throw new HttpException("manufacturer does not exists",403)    
    }}

    
  async createManufacturer(data:manufacturerDto){
    console.log(data)
    const manu = await this.prisma.manufacturer.findFirst({
        where:{
            company_name:data.company_name,
            address:data.address,
            email_id:data.email_id
              }
    })
    if(manu){
        // return{manufacturer_id:manu.id}
     throw new HttpException("manufacturer already exists",403)    
    }
    else{
        const manu = await this.prisma.manufacturer.create({
            data:{
            company_name:data.company_name,
            display_name:data.display_name,
            address:data.address,
            email_id:data.email_id    
            }
        })
        return{manufacturer_id:manu.id}
        }
  }
}

