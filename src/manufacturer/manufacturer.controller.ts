import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { CreateManufacturerDto, CreateManufacturerResponse, DeleteManufacturerResponseDto, GetManufacturerIdResponseDto, UpdateManufacturerDto, UpdateManufacturerResponse, getAllManufacturersResponseDto } from './dto/manufacturer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_CONSTANTS } from 'src/utils/constants/perPage';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private manufacturerService: ManufacturerService) { }

    @ApiResponse({ status: 201, description: 'manufacturer data ',type:getAllManufacturersResponseDto})
    @ApiOperation({ summary: 'get all manufacturers data ' })
    @ApiTags('manufacturer')
    @Get()
    async getAllManufacturers(@Query("page", new DefaultValuePipe(0), ParseIntPipe) page: number,
        @Query("perPage", new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe) perPage: number): Promise<any> {
        return this.manufacturerService.getAllManufacturers(page, perPage)
    }

    @ApiResponse({ status: 201, description: 'manufacturer details ', type: GetManufacturerIdResponseDto })
    @ApiOperation({ summary: 'get manufacturer data using this  ' })
    @ApiTags('manufacturer')
    @Get("/:id")
    async getManufacturerDetails(@Param("id") id: number):Promise<any> {
        return this.manufacturerService.getManufacturerDetails(id)
    } 

    @ApiResponse({ status: 201, description: 'manufacturer id ', type: CreateManufacturerResponse })
    @ApiOperation({ summary: 'add manufacturer using this and get manufacturer id in return ' })
    @ApiTags('manufacturer')
    @Post()
    async createManufacturer(@Body() data: CreateManufacturerDto):Promise<any> {
        return this.manufacturerService.createManufacturer(data)
    }
    @ApiResponse({ status: 201, description: 'manufacturer id ', type: DeleteManufacturerResponseDto })
    @ApiOperation({ summary: 'delete manufacturer using this and get manufacturer id in return ' })
    @ApiTags('manufacturer')
    @Delete("/:id")
    async deleteManufacturer(@Param("id") id: number):Promise<any> {
        return this.manufacturerService.deleteManufacturer(id)
    }
    @ApiResponse({ status: 201, description: 'update manufacturer', type: UpdateManufacturerResponse })
    @ApiOperation({ summary: 'update manufacturer ' })
    @ApiTags('manufacturer')
    @Put("/:id")
    async updateManufacturer(@Param("id") id: number,@Body()data:UpdateManufacturerDto):Promise<any> {
        return this.manufacturerService.updateManufacturer(id,data)
    }

}
