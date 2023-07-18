import { Body, Controller, Post } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { wishlistDto } from './dto/wishlist.dto';
import { User } from 'src/utils/decorator/auth.decorator';
import { JsonWebTokenService } from 'src/services/jwt.service';
@Controller('wishlist')
export class WishlistController {
    
    constructor(private readonly wishlistService:WishlistService,
        private readonly jwtService: JsonWebTokenService){}
 
@ApiResponse({ status: 201, description: 'The product has been successfully created.'})
@ApiOperation({ summary: 'add product to whishlist  ' })
@ApiTags('product')
@Post()
async addItem(@Body()data :wishlistDto,@User()token:any){
    const user = await this.jwtService.verifyJwtToken(token)
    console.log(user)
    return this.wishlistService.addItem(data,user)
}
}
