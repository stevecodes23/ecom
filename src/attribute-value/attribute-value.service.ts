import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { CreateAttributeValueDto } from './dto/attribute-value.dto';
import { Utility } from 'src/utils/utility';

@Injectable()
export class AttributeValueService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async addAttributeValue(data: CreateAttributeValueDto): Promise<any> {
        const atributeIdCheck = await this.prisma.attributes.findUnique({
            where: {
                id: data.attribute_id
            }
        })
        if (!atributeIdCheck) {
            throw new HttpException("attribute id doest exists", 404)
        }
        const attriuteValue = await this.prisma.attribute_values.create({
            data: {
                attribute_id: data.attribute_id,
                value: data.value
            }
        })
        return { data: attriuteValue }
    }
    async deleteAttributeValue(id: number): Promise<any> {
        const checkPresense = await this.prisma.attribute_values.findUnique({
            where: {
                id: id,
                deleted_at: null
            }
        })
        if (!checkPresense) {
            throw new HttpException("attriute value not found", 404)
        }
        else {
            const deletedValue = await this.prisma.attribute_values.update({
                where: {
                    id: id
                }, data: {
                    deleted_at: new Date()
                }
            })
            return {
                data: {
                    message: "attribute value deleted successfully"
                }
            }
        }
    }

    async updateAttributeValue(data: CreateAttributeValueDto, id: number): Promise<any> {
        const checkPresense = await this.prisma.attribute_values.findFirst({
            where: {
                id: id,
                deleted_at: null
            }
        })
        if (!checkPresense) {
            throw new HttpException("attriute value not found", 404)
        }
        const updated_value = await this.prisma.attribute_values.update({
            where: {
                id: id
            }, data: {
                attribute_id: data.attribute_id,
                value: data.value,
                updated_at: new Date()
            }
        })
        return { data: { message: " attribute value updated " } }
    }

    async getAttributeValue(page: number, perPage: number, value: string): Promise<any> {
        if (value) {
            const totalCount = await this.prisma.attribute_values.count({})
            const list = await this.prisma.attribute_values.findMany({
                skip: page * perPage,
                take: perPage,
                where: {
                    value: value,
                    deleted_at: null
                }
            })
            if (list.length == 0) {
                throw new HttpException("attribute not found", 404)
            } else {
                return Utility.getPaginatedFormatData(list, totalCount, page, perPage)
            }
        }
        else {
            const totalCount = await this.prisma.attribute_values.count({})
            const list = await this.prisma.attribute_values.findMany({
                skip: page * perPage,
                take: perPage,
                where: {
                    deleted_at: null
                }
            })
            return Utility.getPaginatedFormatData(list, totalCount, page, perPage)
        }
    }

}
