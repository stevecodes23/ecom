import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { Utility } from 'src/utils/utility';
import { CreateBannerDto, UpdateBannerDto } from './dto/banner.dto';
import { BANNER_TYPE } from 'src/utils/constants/constants';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class BannerService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }
    async addBanner(data: CreateBannerDto): Promise<any> {
        const banner = await this.prisma.banners.create({
            data: {
                image_id: data.image_id,
                url: data.url,
                type: data.type,
                type_id: data.type_id,
                status: data.status,
                display_order: data.display_order,
            }
        })
        return { data: banner }
    }
    async getAllBanner(page: number, perPage: number, type: BANNER_TYPE): Promise<any> {
        if (type) {
            if (Object.values(BANNER_TYPE).includes(type)) {
                const totalCount = await this.prisma.banners.count({})
                const list = await this.prisma.banners.findMany({
                    skip: page * perPage,
                    take: perPage,
                    where: {
                        type: type,
                    },
                    include: {
                        file: true
                    }
                })
                console.log(list)
                return Utility.getPaginatedFormatData(list, totalCount, page, perPage)
            }
            else {
                throw new HttpException('type does not exists', 400)
            }
        }
        else {
            const totalCount = await this.prisma.banners.count({})
            const list = await this.prisma.banners.findMany({
                skip: page * perPage,
                take: perPage,
                include: {
                    file: true
                }
            })
            console.log(list)
            return Utility.getPaginatedFormatData(list, totalCount, page, perPage)
        }
    }
    async deleteBanner(id: number): Promise<any> {
        return await this.prisma.banners.delete({
            where: {
                id: id
            }
        })
    }
    async toggleStatus(id: number): Promise<any> {
        const status = await this.prisma.banners.findFirst({
            where: {
                id: id
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
        const updatedStatus = await this.prisma.banners.update({
            where: { id },
            data: { status: status.status == 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' },
        });
        return { data: updatedStatus }
    }
    async updateBanner(id: number, data: UpdateBannerDto): Promise<any> {
        const banner = await this.prisma.banners.update({
            where: {
                id: id
            },
            data: {
                image_id: data.image_id,
                url: data.url,
                type: data.type,
                type_id: data.type_id,
                status: data.status,
                display_order: data.display_order,

            }
        })
        return { data: banner }
    }

}
