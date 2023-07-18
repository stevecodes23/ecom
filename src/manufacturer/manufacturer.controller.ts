import { Body, Controller, Post } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { manufacturerDto } from './dto/manufacturer.dto';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private manufacturerService: ManufacturerService) {}

    @Post()
    async createManufacturer(@Body()data:manufacturerDto){
        return this.manufacturerService.createManufacturer(data)
    }
}
