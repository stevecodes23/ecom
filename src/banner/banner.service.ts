import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { Utility } from 'src/utils/utility';

@Injectable()
export class BannerService {
    constructor(
        private readonly prisma:PrismaService,
    ){}
    async addBanner(data:any) : Promise<any>{
        const banner = await this.prisma.banners.create({
            data:{
                image_id:data.image_id,
                url:data.url,
                type:data.type,
            }
        })
        return {banner:banner}
    }
    async getAllBanner(page:number,perPage:number) : Promise<any>{
        const totalCount= await this.prisma.banners.count({})
        const list= await this.prisma.banners.findMany({
            skip:page*perPage,
            take:perPage,
        })
        console.log(list)
     return Utility.getPaginatedFormatData(list,totalCount,page,perPage)
    }
    async deleteBanner(id:number):Promise<any>{
        return await this.prisma.banners.delete({
            where:{
                id:id
            }
        })
    }
    async toggleStatus(id:number):Promise<any>{
        const status = await this.prisma.banners.findFirst({
        where:{
                    id:id
                }
        })
        // if(status.status=='ACTIVE'){
        //     return await this.prisma.banners.update({
        //         where:{
        //             id:id
        //         },
        //         data:{
        //             status:'INACTIVE'
        //         }
        //     })
        // }
        // else{
        //     return await this.prisma.banners.update({
        //                     where:{
        //                         id:id
        //                     },
        //                     data:{
        //                         status:'ACTIVE'
        //                     }
        //                 })
        // }
        return await this.prisma.banners.update({
            where: { id },
            data: { status:status.status == 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' },
          });
    }

}
