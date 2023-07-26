import { Injectable } from '@nestjs/common';
import { wishlistDto } from './dto/wishlist.dto';
import { PrismaService } from 'src/services/prisma.services';
import { Utility } from 'src/utils/utility';


@Injectable()
export class WishlistService {
  constructor(
    private readonly prisma :PrismaService,
  ){}
  async addItem(data: wishlistDto,id:any):Promise<any>{
      const addedItems = await this.prisma.wishlist.create({
        data:{
          product_id:data.product_id,
          user_id:id,
        }
      })
      return{data:addedItems}
    }

    async deleteItem(data,userId:number):Promise<any>{
      const deletedItems = await this.prisma.wishlist.delete({
        where:{
                  id:data,
                  user_id:userId,
                }
      })
      return{data:deletedItems}
    }
    async getAll(page,perPage,id:number):Promise<any>{
      const totalCount = await this.prisma.wishlist.count({})
      const listOfProduct = await this.prisma.wishlist.findMany({
        skip:page*perPage,
        take:perPage,
        where:{
          user_id:id,
        },include:{product:{include:{
          product_images:{select:{files:true}}
        }}
    }})
      return Utility.getPaginatedFormatData(listOfProduct,totalCount,page,perPage)
    }
     
}

