import { Injectable } from '@nestjs/common';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { PrismaService } from 'src/services/prisma.services';
import { filesDto } from './dto/files.dto';

@Injectable()
export class FilesService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JsonWebTokenService
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
