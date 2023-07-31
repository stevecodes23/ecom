import { Module } from '@nestjs/common';
import { AttributeGroupController } from './attribute-group.controller';
import { AttributeGroupService } from './attribute-group.service';
import { PrismaService } from 'src/services/prisma.services';

@Module({
  controllers: [AttributeGroupController],
  providers: [AttributeGroupService,PrismaService]
})
export class AttributeGroupModule {}
