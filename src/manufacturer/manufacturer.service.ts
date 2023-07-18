import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { manufacturerDto } from './dto/manufacturer.dto';
import { Utility } from 'src/utils/utility';

@Injectable()
export class ManufacturerService {
     constructor(
    private readonly prisma : PrismaService
  ){}

  async getAllManufacturers(page,perPage){
    const totalCount = await this.prisma.manufacturer.count({})
    const list = await this.prisma.manufacturer.findMany({
        skip:page*perPage,
        take:perPage
    })
    return Utility.getPaginatedFormatData(list,totalCount,page,perPage)
  }
  
  async getManufacturerDetails(id:number){
    console.log(id)
    const manu = await this.prisma.manufacturer.findFirst({
        where:{
            id:id
              }
    })
    if(manu){
        return{manufacturer:manu}}
    else{
        throw new HttpException("manufacturer does not exists",404)    
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

