import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFilesDto, filesDto } from './dto/files.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
    constructor(
        private readonly productService:FilesService,
      ){}

@UseInterceptors(FileInterceptor('file'))
@ApiResponse({ status: 201, description: ' image files added '})
@ApiBody({ type: CreateFilesDto })
@ApiOperation({ summary: 'image files added ' })
@ApiTags('files')
      @Post()
      async uploadFiles(@UploadedFile() file){
        return this.productService.uploadFiles(file);
      }
}

