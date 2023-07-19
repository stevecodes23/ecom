import { Module } from '@nestjs/common';
import { UserNotificationController } from './user-notification.controller';
import { UserNotificationService } from './user-notification.service';
import { JwtModule } from '@nestjs/jwt';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { PrismaService } from 'src/services/prisma.services';

@Module({
  imports: [JwtModule.register({ secret: process.env.SECRET_KEY })],
  controllers: [UserNotificationController],
  providers: [UserNotificationService,PrismaService,JsonWebTokenService]
})
export class UserNotificationModule {}
