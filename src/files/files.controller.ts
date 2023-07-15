import { Body, Controller, Get, Post } from '@nestjs/common';
import { FilesService } from './files.service';
import { filesDto } from './dto/files.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('files')
export class FilesController {
    constructor(
        private readonly productService:FilesService,
      ){}

@ApiResponse({ status: 201, description: ' image files added '})
@ApiOperation({ summary: 'image files added ' })
@ApiTags('files')
      @Post()
      async uploadFiles(@Body()data:filesDto){
        return this.productService.uploadFiles(data);
      }
}