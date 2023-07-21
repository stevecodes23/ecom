import { Module } from '@nestjs/common';
import { BannerController } from './banner.controller';
import { BannerService } from './banner.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.services';

@Module({
  controllers: [BannerController],
  providers: [BannerService,PrismaService]
})
export class BannerModule {}
