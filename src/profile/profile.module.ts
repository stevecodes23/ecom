import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { PrismaService } from 'src/services/prisma.services';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService,PrismaService]
})
export class ProfileModule {}
