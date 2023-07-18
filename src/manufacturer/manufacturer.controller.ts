import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { manufacturerDto } from './dto/manufacturer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private manufacturerService: ManufacturerService) {}
 
@ApiResponse({ status: 201, description: 'manufacturer id '})
@ApiOperation({ summary: 'check manufacturer exists using this and get manufacturer id in return ' })
@ApiTags('product')
@Get("/:id")
async checkManufacturer(@Param("id") id:number){
return this.manufacturerService.checkManufacturer(id)
        }    

@ApiResponse({ status: 201, description: 'manufacturer id '})
@ApiOperation({ summary: 'add manufacturer using this and get manufacturer id in return ' })
@ApiTags('product')
@Post()
async createManufacturer(@Body()data:manufacturerDto){
return this.manufacturerService.createManufacturer(data)
    }
}
