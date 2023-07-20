import { Body, Controller, DefaultValuePipe, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CategoryProductService } from './category-product.service';
import { PrismaService } from 'src/services/prisma.services';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { categoryProductDto } from './dto/category-product.dto';
import { API_CONSTANTS } from 'src/utils/constants/perPage';

@Controller('category-products')
export class CategoryProductController {
    constructor(private readonly categoryProductService:CategoryProductService,
        private readonly prisma:PrismaService
        ){}
        @ApiResponse({ status: 201, description: 'The product category has been successfully created.'})
        @ApiOperation({ summary: 'add product category using this ' })
        @ApiTags('category-products')
        @Post()
        async createProductEntry(@Body()data:categoryProductDto):Promise<any>{
          return  this.categoryProductService.createProductEntry(data)
        }
        @ApiResponse({ status: 201, description: 'The product category list has been successfully sent .'})
        @ApiOperation({ summary: 'get product category list' })
        @ApiTags('category-products')
        @Get()
        async getAll(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
        page: number,
        @Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
        perPage:number):Promise<any>{
          return  this.categoryProductService.getAll(page,perPage)
        }
    
}

