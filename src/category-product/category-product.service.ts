import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { categoryProductDto } from './dto/category-product.dto';
import { Utility } from 'src/utils/utility';

@Injectable()
export class CategoryProductService {
    constructor(private readonly prisma:PrismaService){}
    async createProductEntry(data:categoryProductDto):Promise<any>{
     const prodCategory = await this.prisma.category_product.create({
        data:{
            product_id:data.product_id,
            category_id:data.category_id
        }
     })
    }

    async getAll(page:number,perPage:number):Promise<any>{
        const totalCount= await this.prisma.category_product.count({})
        const list= await this.prisma.category_product.findMany({
            skip:page*perPage,
            take:perPage,
        })
     return Utility.getPaginatedFormatData(list,totalCount,page,perPage)
       
    }
}
