import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { categoryDto } from './dto/category.dto';
import { Utility } from 'src/utils/utility';

@Injectable()
export class CategoryService {
    constructor(
        private readonly prisma:PrismaService
    ){}

    async addCategory(data:any):Promise<any>{
        const category = await this.prisma.category.create({
            data:{
                name:data.name,
                parent_id:data.parent_id,
                image_id:data.image_id,
            }
        })
        return {category:category}
    }
    async deleteCategory(id:number):Promise<any>{
        const deleted_category = await this.prisma.category.delete({
            where:{
                id:id
            }})
            return {deleted_category:deleted_category}
    }
    async getAllCategory(page:number,perPage:number):Promise<any>{
        const totalCount= await this.prisma.product.count({})
        const list= await this.prisma.product.findMany({
            skip:page*perPage,
            take:perPage,
        })
     return Utility.getPaginatedFormatData(list,totalCount,page,perPage)
    
    }
    async getSubCategory(id:number):Promise<any>{
        const subcategories= await this.prisma.category.findMany({
            where:{
                parent_id:id
            }
        })
        return{subcategories:subcategories}
    }
}
