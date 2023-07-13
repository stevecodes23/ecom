import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from 'middleware/logger.middleware';
import { JsonWebTokenService } from './services/jwt.service';
import { PrismaService } from './services/prisma.services';
import { JwtModule } from '@nestjs/jwt';
import { ProductModule } from './product/product.module';

@Module({
  imports: [AuthModule,JwtModule, ProductModule],
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
