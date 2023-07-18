import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { manufacturerDto } from './dto/manufacturer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private manufacturerService: ManufacturerService) {}

@ApiResponse({ status: 201, description: 'manufacturer id '})
@ApiOperation({ summary: 'get all manufacturers data ' })
@ApiTags('product')
@Get()
async getAllManufacturers(@Query("page",new DefaultValuePipe(0),ParseIntPipe)page:number,
@Query("perPage",new DefaultValuePipe(0),ParseIntPipe)perPage:number){
return this.manufacturerService.getAllManufacturers(page,perPage)
        }  
    
@ApiResponse({ status: 201, description: 'manufacturer id '})
@ApiOperation({ summary: 'get manufacturer data using this and get manufacturer id in return ' })
@ApiTags('product')
@Get("/:id")
async getManufacturerDetails(@Param("id") id:number){
return this.manufacturerService.getManufacturerDetails(id)
        }    

@ApiResponse({ status: 201, description: 'manufacturer id '})
@ApiOperation({ summary: 'add manufacturer using this and get manufacturer id in return ' })
@ApiTags('product')
@Post()
async createManufacturer(@Body()data:manufacturerDto){
return this.manufacturerService.createManufacturer(data)
    }
}
