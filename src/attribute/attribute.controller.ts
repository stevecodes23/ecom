import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAttributeDto, CreateAttributeResponseDto, DeleteAttributeResponseDto, GetAttributeResponseDto, UpdateAttributeResponseDto } from './dto/attribute.dto';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import { API_CONSTANTS } from 'src/utils/constants/perPage';

@Controller('attribute')
export class AttributeController {
    constructor(private readonly attributeService: AttributeService) { }
    @ApiResponse({ status: 201, description: 'The attribute has been successfully created.' ,type:CreateAttributeResponseDto})
    @ApiOperation({ summary: 'add attribute using this ' })
    @ApiTags('attribute')
    @Post()
    async addAttribute(@Body() data: CreateAttributeDto): Promise<any> {
        return await this.attributeService.addAttribute(data)
    }
    @ApiResponse({ status: 201, description: 'The attribute has been successfully deleted.',type:DeleteAttributeResponseDto })
    @ApiOperation({ summary: 'delete attribute using this ' })
    @ApiTags('attribute')
    @Delete('/:id')
    async deleteAttribute(@Param('id')id:number): Promise<any> {
        return await this.attributeService.deleteAttribute(id)
    }
    @ApiResponse({ status: 201, description: 'The attribute has been successfully update.' ,type:UpdateAttributeResponseDto})
    @ApiOperation({ summary: 'update attribute using this ' })
    @ApiTags('attribute')
    @Put('/:id')
    async updateAttribute(@Param('id')id:number,@Body()data:CreateAttributeDto): Promise<any> {
        return await this.attributeService.updateAttribute(id,data)
    }
    @ApiResponse({ status: 201, description: 'The atribute list has been successfully generated.',type:GetAttributeResponseDto})
    @ApiOperation({ summary: 'get attribute using this ' })
    @ApiTags('attribute')
    @ApiImplicitQuery({ name: 'per_page', type: Number, required: false })
    @ApiImplicitQuery({ name: 'page', type: Number, required: false })
    @ApiImplicitQuery({ name: 'name',type:String, required: false })
    @Get()
    async getAll(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
    page: number,
        @Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
        perPage: number,
        @Query('name')name:string):Promise<any>{
      return await this.attributeService.getAll(page,perPage,name)
    }

}

