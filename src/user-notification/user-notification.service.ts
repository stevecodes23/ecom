import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { notificationDto } from './dto/user-notification.dto';
import { Utility } from 'src/utils/utility';

@Injectable()
export class UserNotificationService {
constructor(private readonly prisma:PrismaService){}
//   async createNotification(data:notificationDto,id:number):Promise<any>{
//     const notification = await this.prisma.user_notifications.create({
//         data:{
//             user_id:id,
//             title:data.title,
//             message:data.message
//         }
//     })
//     return {notification:notification}
//   }
  async deleteNotification(id:number):Promise<any>{
    const deletedNotification= await this.prisma.user_notifications.delete({
        where:{
            id:id
        }
    })
    return {deletedNotification:deletedNotification }
  }

  async getAllNotification(page:number,perPage:number):Promise<any>{
    const totalCount= await this.prisma.user_notifications.count({})
    const list= await this.prisma.user_notifications.findMany({
        skip:page*perPage,
        take:perPage,
    })
    return Utility.getPaginatedFormatData(list,totalCount,page,perPage)
  }

//   async changeNotificationStatus(id:number):Promise<any>{
//     const notification =await this.prisma.user_notifications.update({
//         where:{
//             id:id
//         },data:{
//             Is_read:true
//         }
//     })
//     return {notification:notification}
//   }
async getNotification(id:number):Promise<any>{
const notification =await this.prisma.user_notifications.update({
                where:{
                    id:id
                },data:{
                    Is_read:true
                }
            })
            return {notification:notification}
}
}
