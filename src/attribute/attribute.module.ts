import { Module } from '@nestjs/common';
import { AttributeController } from './attribute.controller';
import { AttributeService } from './attribute.service';
import { PrismaService } from 'src/services/prisma.services';

@Module({
  controllers: [AttributeController],
  providers: [AttributeService,PrismaService]
})
export class AttributeModule {}
