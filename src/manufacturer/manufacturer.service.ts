import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { manufacturerDto } from './dto/manufacturer.dto';

@Injectable()
export class ManufacturerService {
    constructor(
    private readonly prisma : PrismaService
  ){}

  async createManufacturer(data:manufacturerDto){
    const manu = await this.prisma.manufacturer.findFirst({
        where:{
            company_name:data.company_name,
            address:data.address,
            email_id:data.email_id
        }
    })
    if(manu){
        return{manufacturer_id:manu.id}
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

