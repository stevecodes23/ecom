import { HttpException, HttpVersionNotSupportedException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { CreateAttributeDto } from './dto/attribute.dto';
import { Utility } from 'src/utils/utility';

@Injectable()
export class AttributeService {
    constructor(
        private readonly prisma: PrismaService
    ) { }
    async addAttribute(data: CreateAttributeDto): Promise<any> {
        const checkAttributeGroup =await this.prisma.attribute_group.findFirst({
            where:{
                id:data.attribute_group_id,
                deleted_at:null
            }
        })
        if(!checkAttributeGroup){
            throw new HttpException('attribute group does not exists ',404)
        }
        const attributes = await this.prisma.attributes.create({
            data: {
                name: data.name,
                attribute_group_id: data.attribute_group_id
            }
        })
        return { data: attributes }
    }
    async deleteAttribute(id: number): Promise<any> {
        const attributes = await this.prisma.attributes.findFirst({
            where: {
                id: id
            }
        })
        if (attributes.deleted_at != null) {
            throw new HttpException("atriute not found ", 404)
        }
        else {
            const deletedAttributes = await this.prisma.attributes.update({
                where: {
                    id: id
                }, data: {
                    deleted_at: new Date()
                }
            })
            const delete_attribute_values = await this.prisma.attribute_values.updateMany({
                where:{
                    attribute_id:deletedAttributes.id
                },
                data:{
                    deleted_at:new Date()
                }
            })

            return { data: { message: "attribute deleted successfully" } }
        }

    }
    async updateAttribute(id: number, data: CreateAttributeDto): Promise<any> {
        const attributeExists = await this.prisma.attributes.findFirst({
            where: {
                id: id,
                deleted_at: null
            },
        })
        if (!attributeExists) {
            throw new HttpException("attribute not found", 404)
        }
        const updatedAttributes = await this.prisma.attributes.update({
            where: {
                id: id,
                deleted_at: null
            },
            data: {
                name: data.name,
                attribute_group_id: data.attribute_group_id
            }
        })
       
        return { data: { message: "attribute updated successfully" } }
        
    }

    async getAll(page: number, perPage: number, name?: string): Promise<any> {
        if (name) {
            const totalCount = await this.prisma.attributes.count({})
            const list = await this.prisma.attributes.findMany({
                skip: page * perPage,
                take: perPage,
                where: {
                    name: name,
                    deleted_at: null
                },include:{
                    attribute_values:{
                        where:{
                            deleted_at: null
                        }
                    }
                }
            })
            if (list.length == 0) {
                throw new HttpException("attribute not found", 404)
            } else {
                return Utility.getPaginatedFormatData(list, totalCount, page, perPage)
            }
        }
        else {
            const totalCount = await this.prisma.attributes.count({})
            const list = await this.prisma.attributes.findMany({
                skip: page * perPage,
                take: perPage,
                where: {
                    deleted_at: null
                },include:{
                    attribute_values:true
                }
            })
            return Utility.getPaginatedFormatData(list, totalCount, page, perPage)
        }

    }
}


