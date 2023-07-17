import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';

@Injectable()
export class ProfileService { constructor(
    private readonly prisma: PrismaService  
){}

async createProfile(data:any):Promise<any> {
    return this.prisma.profile.create({
        data:{
            user_id:data.user_id,
            alternate_number:data.alternate_number,
            image_id:data.image_id,
            gender:data.gender,
  
        }
    })
}
}

