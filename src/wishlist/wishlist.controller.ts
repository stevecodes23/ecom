import { Body, Controller, Post ,Delete, Param,Get,Query,ParseIntPipe ,DefaultValuePipe} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { wishlistDto } from './dto/wishlist.dto';
import { User } from 'src/utils/decorator/auth.decorator';
import { API_CONSTANTS } from 'src/utils/constants/perPage';

import { JsonWebTokenService } from 'src/services/jwt.service';
@Controller('wishlist')
export class WishlistController {
    
    constructor(private readonly wishlistService:WishlistService,
        private readonly jwtService: JsonWebTokenService){}
 
@ApiResponse({ status: 201, description: 'The product has been successfully created.'})
@ApiOperation({ summary: 'add product to whishlist  ' })
@ApiTags('wishlist')
@Post()
async addItem(@Body()data :wishlistDto,@User()token:any){
    const user = await this.jwtService.verifyJwtToken(token)
    console.log(user['id'])
    return this.wishlistService.addItem(data,user['id'])
}

 
@ApiResponse({ status: 201, description: 'The product has been successfully deleted.'})
@ApiOperation({ summary: 'delete product from whishlist  ' })
@ApiTags('wishlist')
@Delete("/:id")
async deleteItem(@Param('id')id:number,@User()token:any){
    const user = await this.jwtService.verifyJwtToken(token)
    console.log(user['id'])
    return this.wishlistService.deleteItem(id,user['id'])
}

@ApiResponse({ status: 201, description: 'list of all poducts in the wishlist'})
@ApiOperation({ summary: 'list of all products in the wishlist' })
@ApiTags('wishlist')
@Get()
async getAll(@Query('page', new DefaultValuePipe(0), ParseIntPipe)
page: number,
@Query('per_page', new DefaultValuePipe(API_CONSTANTS.perPage), ParseIntPipe)
perPage:number,): Promise<any>{
   return this.wishlistService.getAll(page,perPage)
}

}
