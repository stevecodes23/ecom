import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AttributeValueService } from './attribute-value.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAttributeValueDto, CreateAttributeValueResponseDto, DeleteAttributeValueResponseDto, GetAttributeValueResponseDto, UpdateAttributeValueResponseDto } from './dto/attribute-value.dto';
import { API_CONSTANTS } from 'src/utils/constants/perPage';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';

@Controller('attribute-value')
export class AttributeValueController {
    constructor(private readonly attributeValuService: AttributeValueService) { }
    @ApiResponse({ status: 201, description: 'The attribute_value has been successfully created.',type:CreateAttributeValueResponseDto })
    @ApiOperation({ summary: 'add attribute_value using this ' })
    @ApiTags('attribute-value')
    @Post()
    async addAttributeValue(@Body() data: CreateAttributeValueDto): Promise<any> {
        return await this.attributeValuService.addAttributeValue(data)
    }
    @ApiResponse({ status: 201, description: 'The attribute_value has been successfully deleted.' ,type:DeleteAttributeValueResponseDto})
    @ApiOperation({ summary: 'delete attribute_value using this ' })
    @ApiTags('attribute-value')
    @Delete("/:id")
    async deleteAttributeValue(@Param('id') id: number): Promise<any> {
        return await this.attributeValuService.deleteAttributeValue(id)
    }
    @ApiResponse({ status: 201, description: 'The attribute_value has been successfully update.',type:UpdateAttributeValueResponseDto })
    @ApiOperation({ summary: 'update attribute_value using this ' })
    @ApiTags('attribute-value')
    @Put("/:id")
    async updateAttributeValue(@Param('id') id: number, @Body() data: CreateAttributeValueDto): Promise<any> {
        return await this.attributeValuService.updateAttributeValue(data, id)
    }
    @ApiResponse({ status: 201, description: 'The attribute value list has been successfully generated.',type:GetAttributeValueResponseDto})
    @ApiOperation({ summary: 'get attribute value using this ' })
    @ApiTags('attribute-value')
    @ApiImplicitQuery({ name: 'per_page', type: Number, required: false })
    @ApiImplicitQuery({ name: 'page', type: Number, required: false })
    @ApiImplicitQuery({ name: 'value', type: String, required: false })
    @Get()
    async getAttributeValue(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
    page: number,
        @Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
        perPage: number,
        @Query('value') value: string): Promise<any> {
        return this.attributeValuService.getAttributeValue(page, perPage, value)
    }
}
