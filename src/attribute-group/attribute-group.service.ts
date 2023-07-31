import { HttpException, Injectable } from '@nestjs/common';
import { Items } from 'src/banner/dto/banner.dto';
import { PrismaService } from 'src/services/prisma.services';
import { Utility } from 'src/utils/utility';
import { CreateAttributeGroupDto } from './dto/attribute-group.dto';

@Injectable()
export class AttributeGroupService {
    constructor(private readonly prisma: PrismaService) { }
    async addGroupAttribute(data: CreateAttributeGroupDto): Promise<any> {
        const group = await this.prisma.attribute_group.create({
            data: {
                name: data.name
            }
        })
        return { data: group }
    }
    async deleteGroupAttribute(id: number): Promise<any> {
        const checkAttributeGroup = await this.prisma.attribute_group.findUnique({
            where: {
                id: id,
                deleted_at: null
            }
        })
        if (!checkAttributeGroup) {
            throw new HttpException('attribute group not found ', 404)
        }
        else {

            const deleted_group = await this.prisma.attribute_group.update({
                where: {
                    id: id,
                    // deleted_at:null
                },
                data: {
                    deleted_at: new Date
                }
            })
            const deleted_attribute = await this.prisma.attributes.findMany({
                where:{
                    attribute_group_id:deleted_group.id
                }
            })
            const deleted_attributes_count = await this.prisma.attributes.updateMany({
                where: {
                    attribute_group_id: deleted_group.id,
                    deleted_at:null
                }, 
                data: {
                    deleted_at: new Date()
                }
            })
            let deleted_attribute_id =[]
            deleted_attribute.map(item =>{
                deleted_attribute_id.push(item.id)
            });
        //     const deleted_attribute_id = []
        //     deleted_attributes.map(item=>{deleted_attribute_id.push(item.id) })
            const deleted_attribute_values = await this.prisma.attribute_values.updateMany({
                where:{id:{
                    in:deleted_attribute_id
                }
            },data:{
                deleted_at: new Date()
            }})
        }
        return {data:{message:"group deleted successfully"}}
    }

    async updateGroupAttribute(id:number,data:CreateAttributeGroupDto):Promise<any>{
        const check_exist = await this.prisma.attribute_group.findFirst({
            where:{
                id:id,
                deleted_at:null
            }
        })
        if(check_exist){
            const updated_group = await this.prisma.attribute_group.update({
                where:{
                    id:id
                },
                data:{
                    name: data.name
                }
            })
            return {data:{message:"atribute group updated"}}
        }else{
            throw new HttpException("group does not exists ",404)
        }
    }


    async getAll(page: number, perPage: number, name?: string): Promise<any> {
        if (name) {
            const totalCount = await this.prisma.attribute_group.count({
                where:{
                    name: name,
                    deleted_at:null
                }
            })
            console.log(totalCount,page,perPage)
            const list = await this.prisma.attribute_group.findMany({
                skip: page * perPage,
                take: perPage,
                where:{
                    name:name,
                    deleted_at:null
                },
                   include:{
                   attributes:{
                    where:{
                        deleted_at:null
                    },include:{
                        attribute_values:{
                            where:{
                                deleted_at:null
                            }
                        },
                    }
                   }
                }
            })
             
            console.log(list);
            if (list.length == 0) {
                throw new HttpException("attribute not found", 404)
            } else {
             return await Utility.getPaginatedFormatData(list, totalCount, page, perPage)
            }
        }
        else {
            const totalCount = await this.prisma.attribute_group.count({})
            const list = await this.prisma.attribute_group.findMany({
                skip: page * perPage,
                take: perPage,
                where: {
                    deleted_at: null
                },include:{
                    attributes:{
                     where:{
                         deleted_at:null
                     },include:{
                         attribute_values:{
                             where:{
                                 deleted_at:null
                             }
                         },
                     }
                    }
                 }
            })
            return Utility.getPaginatedFormatData(list, totalCount, page, perPage)
        }

    }
}
