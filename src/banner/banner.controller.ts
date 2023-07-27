import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { BannerService } from './banner.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_CONSTANTS } from 'src/utils/constants/perPage';
import { CreateBannerResponseDto, CreateBannerDto, DeleteBannerResponseDto, GetAllBannerDto, ToggleStatusResponseDto, UpdateBannerDto, UpdateResponseDto } from './dto/banner.dto';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import { BANNER_TYPE } from 'src/utils/constants/constants';

@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService) { }
    @ApiResponse({ status: 201, description: 'The banner has been successfully created.', type: CreateBannerResponseDto })
    @ApiOperation({ summary: 'add banner using this ' })
    @ApiTags('banner')
    @Post()
    async addBanner(@Body() data: CreateBannerDto): Promise<any> {
        return this.bannerService.addBanner(data)
    }
    @ApiResponse({ status: 201, description: 'The banner list has been successfully generated.', type: GetAllBannerDto })
    @ApiOperation({ summary: 'get banner using this ' })
    @ApiTags('banner')
    @ApiImplicitQuery({ name: 'per_page', type: Number, required: false })
    @ApiImplicitQuery({ name: 'page', type: Number, required: false })
    @ApiImplicitQuery({ name: 'type', enum:BANNER_TYPE, required: false })
    @Get() 
    async getAllBanner(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
    page: number,
        @Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
        perPage: number,
        @Query('type')type:BANNER_TYPE): Promise<any> {
        return this.bannerService.getAllBanner(page, perPage,type)
    } 

    @ApiResponse({ status: 201, description: 'The banner has been successfully deleted.', type: DeleteBannerResponseDto })
    @ApiOperation({ summary: 'delete banner using this ' })
    @ApiTags('banner')
    @Delete('/:id')
    async deleteBanner(@Param('id') id: number): Promise<any> {
        return this.bannerService.deleteBanner(id)
    }
    @ApiResponse({ status: 201, description: 'The banner status has been successfully changed.', type: ToggleStatusResponseDto })
    @ApiOperation({ summary: 'change banner status using this ' })
    @ApiTags('banner')
    @Patch('/:id')
    async toggleStatus(@Param('id') id: number): Promise<any> {
        return this.bannerService.toggleStatus(id)
    }
    @ApiResponse({ status: 201, description: 'The banner has been successfully updated ', type: UpdateResponseDto })
    @ApiOperation({ summary: 'update banner ' })
    @ApiTags('banner')
    @Put('/:id')
    async updateBanner(@Param('id') id: number, @Body() data: UpdateBannerDto): Promise<any> {
        return this.bannerService.updateBanner(id, data)
    }


}

