import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { PrismaService } from 'src/services/prisma.services';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ secret: process.env.SECRET_KEY })],
  controllers: [ProductController],
  providers: [ProductService,PrismaService,JsonWebTokenService]
})
export class ProductModule {}
