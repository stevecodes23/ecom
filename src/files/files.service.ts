import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { filesDto } from './dto/files.dto';

@Injectable()
export class FilesService {
    constructor(
        private readonly prisma: PrismaService,
    ){}

    async uploadFiles(body:filesDto):Promise<any>{
       const file = await this.prisma.files.create({
        data:{
            url:body.url,
            name:body.name,
            key:body.key
        }
       })
    }
}
