import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from 'middleware/logger.middleware';
import { JsonWebTokenService } from './services/jwt.service';
import { PrismaService } from './services/prisma.services';
import { JwtModule } from '@nestjs/jwt';
import { ProductModule } from './product/product.module';
import { FilesModule } from './files/files.module';
import { ProfileModule } from './profile/profile.module';
import { AddressController } from './address/address.controller';
import { AddressModule } from './address/address.module';
import { ManufacturerController } from './manufacturer/manufacturer.controller';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { UserNotificationModule } from './user-notification/user-notification.module';
import { CategoryModule } from './category/category.module';
import { CategoryProductModule } from './category-product/category-product.module';
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [AuthModule,JwtModule, ProductModule, FilesModule, ProfileModule, AddressModule, ManufacturerModule, WishlistModule, UserNotificationModule, CategoryModule, CategoryProductModule, BannerModule],
  controllers: [AppController],
  providers: [AppService,JsonWebTokenService,PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
  consumer
    .apply(LoggerMiddleware)
    .forRoutes({ path: 'auth', method: RequestMethod.GET });
}
}
