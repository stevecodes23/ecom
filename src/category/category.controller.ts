import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/services/prisma.services';
import { CategoryService } from './category.service';
import { CategoryDto, CategoryListResponseDto, CategoryResponseDto, DeletedCategoryResponseDto, SubCategoryDto, SubCategoryResponseDto } from './dto/category.dto';
import { API_CONSTANTS } from 'src/utils/constants/perPage';

@Controller('category')
export class CategoryController {
    constructor(private readonly prisma:PrismaService,
                private readonly categoryService:CategoryService){}

@ApiResponse({ status: 201, description: 'The category has been successfully created.',type:CategoryResponseDto})
@ApiOperation({ summary: 'add category using this ' })
@ApiTags('category')
@Post()
async addCategory(@Body()data:CategoryDto):Promise<any>{
    return this.categoryService.addCategory(data)
}
@ApiResponse({ status: 201, description: 'The category has been successfully deleted.',type:DeletedCategoryResponseDto})
@ApiOperation({ summary: 'delete category using this ' })
@ApiTags('category')
@Delete("/:id")
async deleteCategory(@Param('id')id :number):Promise<any>{
    return this.categoryService.deleteCategory(id)
}
@ApiResponse({ status: 201, description: 'The category list has been generated.',type:CategoryListResponseDto})
@ApiOperation({ summary: 'get category list using this ' ,})
@ApiTags('category')
@Get()
async getAllCategory(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
page: number,
@Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
perPage:number):Promise<any>{
    return this.categoryService.getAllCategory(page,perPage)
}
@ApiResponse({ status: 201, description: 'The subcategory list has been generated.',type:SubCategoryResponseDto})
@ApiOperation({ summary: 'get subcategory list using this ' })
@ApiTags('category')
@Get("/:id/subcategories")
async getSubCategory(@Param('id')id:number):Promise<any>{
    return this.categoryService.getSubCategory(id)
}

@ApiResponse({ status: 201, description: 'The subcategory list has been generated.',type :CategoryResponseDto})
@ApiOperation({ summary: 'get subcategory list using this ' })
@ApiTags('category')
@Put('/:id')
async updateCategory(@Param('id')id:number,@Body()data:CategoryDto):Promise<any>{
    return this.categoryService.updateCategory(id,data)
}
}


