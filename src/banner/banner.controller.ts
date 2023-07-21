import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { BannerService } from './banner.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_CONSTANTS } from 'src/utils/constants/perPage';
import { bannerDto } from './dto/banner.dto';

@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService:BannerService){}
@ApiResponse({ status: 201, description: 'The banner has been successfully created.'})
@ApiOperation({ summary: 'add banner using this ' })
@ApiTags('banner')
@Post()
async addBanner(@Body()data:bannerDto):Promise<any>{
    return this.bannerService.addBanner(data)
    }
@ApiResponse({ status: 201, description: 'The banner list has been successfully generated.'})
@ApiOperation({ summary: 'get banner using this ' })
@ApiTags('banner')
@Get()
async getAllBanner(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
page: number,
@Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
perPage:number):Promise<any>{
return this.bannerService.getAllBanner(page,perPage)
}

@ApiResponse({ status: 201, description: 'The banner has been successfully deleted.'})
@ApiOperation({ summary: 'delete banner using this ' })
@ApiTags('banner')
@Delete('/:id')
async deleteBanner(@Param('id')id:number):Promise<any>{
    return this.bannerService.deleteBanner(id)
}
@ApiResponse({ status: 201, description: 'The banner status has been successfully changed.'})
@ApiOperation({ summary: 'change banner status using this ' })
@ApiTags('banner')
@Patch('/:id')
async toggleStatus(@Param('id')id:number):Promise<any>{
    return this.bannerService.toggleStatus(id)
}
}

