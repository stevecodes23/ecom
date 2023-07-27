import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { CategoryDto } from './dto/category.dto';
import { Utility } from 'src/utils/utility';
@Injectable()
export class CategoryService {
    constructor(
        private readonly prisma: PrismaService
    ) {}
    async addCategory(data: CategoryDto): Promise<any> {
        const category = await this.prisma.category.create({
            data: {
                name: data.name,
                parent_id: data.parent_id,
                image_id: data.image_id,
            }
        })
        return { data: category }
    }
    async deleteCategory(id: number): Promise<any> {
        const deleted_category = await this.prisma.category.delete({
            where: {
                id: id
            }
        })
        return { data: deleted_category }
    }
    async getAllCategory(page: number, perPage: number, name): Promise<any> {
        if (name) {
            const totalCount = await this.prisma.product.count({})
            const topLevelCategories = await this.prisma.category.findMany({
                skip: page * perPage,
                take: perPage,
                where: {
                    name: name,
                },
                include: {
                    files: true
                }
            })
            console.log(topLevelCategories);
            const fetchSubCategories = async (parentCategories) => {
                for (const category of parentCategories) {
                    category.subCategories = await this.prisma.category.findMany({
                        where: {
                            parent_id: category.id
                        },
                        include: {
                            files: true
                        }
                    });
                    console.log(category.subCategories)
                    console.log(category.subCategories.length);
                    if (category.subCategories.length > 0) {
                        await fetchSubCategories(category.subCategories);
                    }
                }
            };
            await fetchSubCategories(topLevelCategories);
            return Utility.getPaginatedFormatData(topLevelCategories, totalCount, page, perPage)
        }
        else {
            const totalCount = await this.prisma.product.count({})
            const topLevelCategories = await this.prisma.category.findMany({
                skip: page * perPage,
                take: perPage,
                where: {
                    parent_id: null,
                },
                include: {
                    files: true
                }
            })
            console.log(topLevelCategories);
            const fetchSubCategories = async (parentCategories) => {
                for (const category of parentCategories) {
                    category.subCategories = await this.prisma.category.findMany({
                        where: {
                            parent_id: category.id
                        },
                        include: {
                            files: true
                        }
                    });
                    console.log(category.subCategories)
                    console.log(category.subCategories.length);
                    if (category.subCategories.length > 0) {
                        await fetchSubCategories(category.subCategories);
                    }
                }
            };
            await fetchSubCategories(topLevelCategories);
            return Utility.getPaginatedFormatData(topLevelCategories, totalCount, page, perPage)
        }
    }
    async getSubCategory(id: number): Promise<any> {
        const subcategories = await this.prisma.category.findMany({
            where: {
                parent_id: id
            }, include: {
                files: true
            }
        })
        return { data: subcategories }
    }
    async updateCategory(id: number, data: CategoryDto): Promise<any> {
        const updated_category = await this.prisma.category.update({
            where: { id: id },
            data: {
                name: data.name,
                parent_id: data.parent_id,
                image_id: data.image_id,
                updated_at: new Date()
            }
        })
        return { data: data }
    }
}
