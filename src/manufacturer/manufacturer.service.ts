import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto/manufacturer.dto';
import { Utility } from 'src/utils/utility';
 
@Injectable()
export class ManufacturerService {
     constructor(
    private readonly prisma : PrismaService
  ){}

  async getAllManufacturers(page:number,perPage:number):Promise<any>{
    const totalCount = await this.prisma.manufacturer.count({})
    console.log(totalCount,page,perPage)
    const list = await this.prisma.manufacturer.findMany({
        skip:page*perPage,
        take:perPage,
        include:{
          files:true
        }
    })
    console.log(list)
    return Utility.getPaginatedFormatData(list,totalCount,page,perPage)
  }

  async deleteManufacturer(id:number):Promise<any>{
    const deletedManufacturer =await this.prisma.manufacturer.delete({
      where:{
        id:id
      }
    })
    return {data:deletedManufacturer.id}
  }
  
  async getManufacturerDetails(id:number){
    console.log(id)
    const manu = await this.prisma.manufacturer.findFirst({
        where:{
            id:id
              },include:{
                files:true
              }
    })
    if(manu){
        return{manufacturer:manu}}
    else{
        throw new HttpException("manufacturer does not exists",404)    
    }}


  async createManufacturer(data:CreateManufacturerDto){
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
            email_id:data.email_id ,
            image_id:data.image_id
            }
        })
        return{data:manu.id}
        }
  } 

  async updateManufacturer(id:number,data:UpdateManufacturerDto):Promise<any>{
    const updatedManufacturer=await this.prisma.manufacturer.update({
      where: {id:id},
      data:{
        company_name:data.company_name,
            display_name:data.display_name,
            address:data.address,
            email_id:data.email_id ,
            image_id:data.image_id,
            updated_at:new Date(),

      }
    })
    return {data:updatedManufacturer}
  }
}

