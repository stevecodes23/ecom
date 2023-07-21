import { Module } from '@nestjs/common';
// import { CategoryProductController } from './category-product.controller';
// import { CategoryProductService } from './category-product.service';
import { PrismaService } from 'src/services/prisma.services';

@Module({
  // controllers: [CategoryProductController],
  // providers: [CategoryProductService,PrismaService]
})
export class CategoryProductModule {}
