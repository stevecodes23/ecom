import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { categoryDto } from './dto/category.dto';

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
}
