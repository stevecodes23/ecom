import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UserNotificationService } from './user-notification.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { notificationDto } from './dto/user-notification.dto';
import { User } from 'src/utils/decorator/auth.decorator';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { API_CONSTANTS } from 'src/utils/constants/perPage';

@Controller('user-notifications')
export class UserNotificationController {
    constructor(
        private readonly userService:UserNotificationService,
        private readonly jwtService: JsonWebTokenService
    ){}
// @ApiResponse({ status: 201, description: 'noification created '})
// @ApiOperation({ summary: 'notification created' })
// @ApiTags('user-notification')
// @Post()
// async createNotification(@Body()data:notificationDto,@User()token:any):Promise<any>{
//     const user = await this.jwtService.verifyJwtToken(token)
//     return this.userService.createNotification(data,user['id']);
// }
@ApiResponse({ status: 201, description: 'noification deleted '})
@ApiOperation({ summary: 'notification deleted' })
@ApiTags('user-notification')
@Delete("/:id")
async deleteNotification(@Param('id')id:number):Promise<any>{
    return this.userService.deleteNotification(id);
}

@ApiResponse({ status: 201, description: 'noification list '})
@ApiOperation({ summary: 'notification list' })
@ApiTags('user-notification')
@Get()
async getAllNotification(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
page: number,
@Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
perPage:number,):Promise<any>{
    return this.userService.getAllNotification(page,perPage);
}
@ApiResponse({ status: 201, description: ' noification '})
@ApiOperation({ summary: 'notification' })
@ApiTags('user-notification')
@Get(':id')
async getNotification(@Param('id')id:number):Promise<any>{
    return this.userService.getNotification(id);
}

// @ApiResponse({ status: 201, description: 'noification read status changed '})
// @ApiOperation({ summary: 'notification read status changed ' })
// @ApiTags('user-notification')
// @Patch("/:id")
// async changeNotificationStatus(@Param('id')id:number):Promise<any>{
//     return this.userService.changeNotificationStatus(id);
// }
}

