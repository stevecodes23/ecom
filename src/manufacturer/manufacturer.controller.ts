import { Body, Controller, Get, Post } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { manufacturerDto } from './dto/manufacturer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private manufacturerService: ManufacturerService) {}
 
@ApiResponse({ status: 201, description: 'manufacturer id '})
@ApiOperation({ summary: 'check manufacturer exists using this and get manufacturer id in return ' })
@ApiTags('product')
@Get()
async checkManufacturer(@Body()data:manufacturerDto){
return this.manufacturerService.checkManufacturer(data)
        }    

@ApiResponse({ status: 201, description: 'manufacturer id '})
@ApiOperation({ summary: 'add manufacturer using this and get manufacturer id in return ' })
@ApiTags('product')
@Post()
async createManufacturer(@Body()data:manufacturerDto){
return this.manufacturerService.createManufacturer(data)
    }
}
