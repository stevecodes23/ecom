import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AttributeGroupService } from './attribute-group.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import { API_CONSTANTS } from 'src/utils/constants/perPage';
import { CreateAttGrouopResponse, CreateAttributeGroupDto, DeleteAttributeGroupResponseDto, GetAttributeGroupResponse, UpdateAttributeGroupResponseDto } from './dto/attribute-group.dto';

@Controller('attribute-group')
export class AttributeGroupController {
    constructor(private readonly attributeGroupService: AttributeGroupService) { }
    @ApiResponse({ status: 201, description: 'The attribute group has been successfully created.',type:CreateAttGrouopResponse })
    @ApiOperation({ summary: 'add attribute group using this ' })
    @ApiTags('attribute-group')
    @Post()
    async addGroupAttribute(@Body() data:CreateAttributeGroupDto): Promise<any> {
        return await this.attributeGroupService.addGroupAttribute(data)
    }
    @ApiResponse({ status: 201, description: 'The attribute group has been successfully deleted.',type:DeleteAttributeGroupResponseDto })
    @ApiOperation({ summary: 'delete attribute group using this ' })
    @ApiTags('attribute-group')
    @Delete('/:id')
    async deleteGroupAttribute(@Param('id') id: number): Promise<any> {
        return await this.attributeGroupService.deleteGroupAttribute(id)
    }
    @ApiResponse({ status: 201, description: 'The attribute group has been successfully updated',type:UpdateAttributeGroupResponseDto })
    @ApiOperation({ summary: 'update attribute group using this ' })
    @ApiTags('attribute-group')
    @Put('/:id')
    async updateGroupAttribute(@Param('id') id: number, @Body() data:CreateAttributeGroupDto): Promise<any> {
        return await this.attributeGroupService.updateGroupAttribute(id, data)
    }
    @ApiResponse({ status: 201, description: 'The atribute list has been successfully generated.' ,type:GetAttributeGroupResponse})
    @ApiOperation({ summary: 'get attribute using this ' })
    @ApiTags('attribute-group')
    @ApiImplicitQuery({ name: 'per_page', type: Number, required: false })
    @ApiImplicitQuery({ name: 'page', type: Number, required: false })
    @ApiImplicitQuery({ name: 'name', type: String, required: false })
    @Get()
    async getAll(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
    page: number,
        @Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
        perPage: number,
        @Query('name') name: string): Promise<any> {
        return await this.attributeGroupService.getAll(page, perPage, name)
    }
}