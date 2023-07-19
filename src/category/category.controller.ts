import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/services/prisma.services';
import { CategoryService } from './category.service';
import { categoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly prisma:PrismaService,
                private readonly categoryService:CategoryService){}

@ApiResponse({ status: 201, description: 'The product has been successfully created.'})
@ApiOperation({ summary: 'add product using this ' })
@ApiTags('product')
@Post()
async addCategory(@Body()data:categoryDto){
    return this.categoryService.addCategory(data)
}
}

