import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { CategoryDto } from './dto/category.dto';
import { Utility } from 'src/utils/utility';
import { timeStamp } from 'console';
import { timestamp } from 'rxjs';

@Injectable()
export class CategoryService {
    constructor(
        private readonly prisma:PrismaService
    ){}

    async addCategory(data:CategoryDto):Promise<any>{
        const category = await this.prisma.category.create({
            data:{
                name:data.name,
                parent_id:data.parent_id,
                image_id:data.image_id,
            }
        })
        return {data:category} 
    }
    async deleteCategory(id:number):Promise<any>{
        const deleted_category = await this.prisma.category.delete({
            where:{
                id:id
            }})
            return {data:deleted_category}
    }
    async getAllCategory(page:number,perPage:number):Promise<any>{
        const totalCount= await this.prisma.product.count({})
        const list= await this.prisma.category.findMany({
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
        return{data:subcategories}
    }
    async updateCategory(id:number,data:CategoryDto):Promise<any>{
        const updated_category = await this.prisma.category.update({
            where:{id:id},
            data:{
                name:data.name,
                parent_id:data.parent_id,
                image_id:data.image_id,
                updated_at:new Date()

            }
        })
        return {data:data}
    }
}
