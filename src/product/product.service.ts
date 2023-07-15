import { Injectable } from '@nestjs/common';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { PrismaService } from 'src/services/prisma.services';
import { addProductDto, updateDiscount } from './dto/product.dto';
import { Utility } from 'src/utils/utility';

@Injectable()
export class ProductService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JsonWebTokenService
    ){}

async getAllProduct(page,perPage):Promise<any>{
    const totalCount= await this.prisma.product.count({})
    const list= await this.prisma.product.findMany({
        skip:page*perPage,
        take:perPage,
    })
 return Utility.getPaginatedFormatData(list,totalCount,page,perPage)

}
 
async addProduct(body:addProductDto):Promise<any> {
    const product = await this.prisma.product.create({
        data:{
            name:body.name,
            description:body.decsription,
            origin:body.origin,
            discount_percentage:body.discount_percentage,
            discounted_price:body.discounted_price,
            thumbnail_image_id:body.thumbnail_image_id,
            manufacturer_id:body.manufacturer_id,
            price:body.price,
            minimum_quantity_to_order:body.minimum_quantity_to_order,
            maximum_quantity_to_order:body.maximum_quantity_to_order,
            quantity_to_order:body.quantity_to_order,
            vriant_type:body.vriant_type,
            master_varient_id:body.master_varient_id,
        }
    })
return {product_added:product}
}
async updateDiscount(body:updateDiscount,id):Promise<any>{
    const product =await this.prisma.product.findFirst({
        where:{
            id:id
        }})
    const discounted_price = product.price -((product['price']*body.discount_percentage)/100)
    const updatedProd= await this.prisma.product.update({
        where:{
            id:id
        },
        data:{
            discount_percentage:body.discount_percentage,
            discounted_price:discounted_price,
        }
    })
    return{product_updted:updatedProd}
}
async deleteProduct(id):Promise<any>{
    const prod =await this.prisma.product.delete({
        where:{
            id:id
        }
    })
    return {product_deleted:prod}
}
async addProductQty(data,id):Promise<any>{
    const product =await this.prisma.product_inventory.create({
        data:{
            product_id:id,
            qty:data.quantity,
        }
    })
    return {product_qty:product}
}
async updateProductQty(data,id):Promise<any>{
    const product = await this.prisma.product_inventory.update({
        where:{
        product_id:id
        },
        data:{
            qty:data.qty
        }
    })
}

async addProductImage(data,id):Promise<any>{
    const images = await this.prisma.product_images.create({
        data:{
            product_id:id,
            image_id:data.id
        }
    })
}

}