import { Module } from '@nestjs/common';
import { AttributeValueController } from './attribute-value.controller';
import { AttributeValueService } from './attribute-value.service';
import { PrismaService } from 'src/services/prisma.services';

@Module({
  controllers: [AttributeValueController],
  providers: [AttributeValueService,PrismaService]
})
export class AttributeValueModule {}
