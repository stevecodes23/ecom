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
        include:{product_images:true,category_product:true}
    })
 return Utility.getPaginatedFormatData(list,totalCount,page,perPage)

}

async getProduct(id:number):Promise<any>{
    const prod= await this.prisma.product.findFirst({
        where:{id:id},
        include:{product_images:true,category_product:true}
    })
    return {product:prod}
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
            // category_id:body.category_id,
            minimum_quantity_to_order:body.minimum_quantity_to_order,
            maximum_quantity_to_order:body.maximum_quantity_to_order,
            quantity_to_order:body.quantity_to_order,
            master_varient_id:body.master_varient_id,
            stock:body.stock,
        }
    })
    const productImages = await this.prisma.product_images.createMany({
        data: body.product_images.map(imageId => ({
            product_id: product.id,
            image_id: imageId
        }))})
        // productImages.map(item=>{
        //     console.log(item)
        // })
    const productCategory = await this.prisma.category_product.createMany({
        data: body.category_id.map(categoryId => ({
            product_id: product.id,
            category_id: categoryId
        }))
    })
return {product_added:product,productImages:productImages,productCategory:productCategory}
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

    const deleted_image = await this.prisma.product_images.deleteMany({
        where:{
            product_id:id
        }})
    const deleted_category = await this.prisma.category_product.deleteMany({
            where:{
                product_id:id
            }})
            const prod =await this.prisma.product.delete({
                where:{
                    id:id
                } 
            })
    return {product_deleted:prod,deleted_image:deleted_image,deleted_category:deleted_category}
}
// async addProductQty(data,id):Promise<any>{
//     const product =await this.prisma.product_inventory.create({
//         data:{
//             product_id:id,
//             qty:data.quantity,
//         }
//     })
//     return {product_qty:product}
// }
// async updateProductQty(data,id):Promise<any>{
//     const product = await this.prisma.product_inventory.update({
//         where:{
//         product_id:id
//         },
//         data:{
//             qty:data.qty
//         }
//     })
// }

async updateProductStock(data,id):Promise<any>{
    const product = await this.prisma.product.update({
        where:{
        id:id
        },
        data:{
            stock:data.stock
        }
    })
    return {product_stock:product.stock}
}
// async addProductImage(data,id):Promise<any>{
//     const images = await this.prisma.product_images.create({
//         data:{
//             product_id:id,
//             image_id:data.id
//         }
//     })
//     return{image_added:images}
// }


}