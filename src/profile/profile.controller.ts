import { Body, Controller, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/profile.dto';

@Controller('profiles')
export class ProfileController {
    constructor(
        private readonly profileService:ProfileService,
      ){}

 @Post()
 createProfile(@Body() data: CreateProfileDto) {
    return this.profileService.createProfile(data);
 }
}

