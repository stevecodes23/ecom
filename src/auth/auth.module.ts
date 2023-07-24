import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/services/prisma.services';
import { JsonWebTokenService } from 'src/services/jwt.service';

@Module({ 
  imports: [JwtModule.register({ secret: process.env.SECRET_KEY })],
  controllers: [AuthController],
  providers: [AuthService,PrismaService,JsonWebTokenService]
})
export class AuthModule {}
