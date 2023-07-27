import { Body, Controller, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/profile.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('profiles')
export class ProfileController {
    constructor(
        private readonly profileService:ProfileService,
      ){}
@ApiResponse({ status: 201, description: 'The profile has been successfully created.'})
@ApiOperation({ summary: 'create profile using this  ' })
@ApiTags('profile')
 @Post()
 createProfile(@Body() data: CreateProfileDto) {
    return this.profileService.createProfile(data);
 }
}
 