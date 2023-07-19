import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/services/prisma.services';
import { JsonWebTokenService } from 'src/services/jwt.service';

@Module({
  imports: [JwtModule.register({ secret: process.env.SECRET_KEY })],
  controllers: [WishlistController],
  providers: [WishlistService,PrismaService,JsonWebTokenService]
})
export class WishlistModule {}

