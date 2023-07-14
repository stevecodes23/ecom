import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { ProductService } from './product.service';
import { addProductDto, addProductQtyDto, updateDiscount } from './dto/product.dto';
import { API_CONSTANTS } from 'src/utils/constants/perPage';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService:ProductService,
        private readonly jwtService: JsonWebTokenService
      ){}
@ApiResponse({ status: 201, description: 'product fetched successfully'})
@ApiOperation({ summary: 'get all the products' })
@ApiTags('product')
@Get()
async getAllProducts(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
page: number,
@Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
perPage,){
    return this.productService.getAllProduct(page,perPage)
}

@ApiResponse({ status: 201, description: 'The product has been successfully created.'})
@ApiOperation({ summary: 'add product using this ' })
@ApiTags('product')
@Post()
async addProduct(@Body()data :addProductDto){
    return this.productService.addProduct(data)
}

@ApiResponse({ status: 201, description: 'The record has been successfully deleted.'})
@ApiOperation({ summary: 'delete product by id ' })
@ApiTags('product')
@Delete('/:id')
async deleteProduct(@Param('id')id:Number){
   return this.productService.deleteProduct(id)
}

@ApiResponse({ status: 201, description: 'update discounted price and discount percentage .'})
@ApiOperation({ summary: 'update discount price and percentage' })
@ApiTags('product')
@Patch('/:id/update-price')
async updateDiscount(@Body()data:updateDiscount,@Param('id')id:Number){
    return this.productService.updateDiscount(data,id)
}

@ApiResponse({ status: 201, description: ' product quantity added'})
@ApiOperation({ summary: 'product quanity added ' })
@ApiTags('product')
@Post('/:id/products-qty')
async addProductQty(@Body()data:addProductQtyDto,@Param('id')id:Number){
    return this.productService.addProductQty(data,id)
}
@ApiResponse({ status: 201, description: ' product quantity updated'})
@ApiOperation({ summary: 'product quanity updated' })
@ApiTags('product')
@Patch('/:id/products-qty')
async updateProductQty(@Body()data:addProductQtyDto,@Param('id')id:Number){
    return this.productService.updateProductQty(data,id)
}


}

