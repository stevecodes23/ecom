import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { CreateAddressDto } from './dto/address.dto';


@Injectable()
export class AddressService {
    constructor(private readonly prisma: PrismaService){}
    async create(id,data:CreateAddressDto): Promise<any> {
        const address = await this.prisma.address.create({

            data:{
                user_id:id,
                address:data.address,
                city:data.city,
                state:data.state,
                pincode:data.pincode,
                landmark:data?.landmark,
                reciever_number:data?.reciever_number,
                reciever_name:data?.reciever_name,
                type:data.type
            }
        })
        console.log ({item:address})
        return {items:address}
    }
}

