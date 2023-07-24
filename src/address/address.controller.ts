import { Body, Controller, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAddressDto } from './dto/address.dto';
import { User } from 'src/utils/decorator/auth.decorator';
import { JsonWebTokenService } from 'src/services/jwt.service';

@Controller('addresses')
export class AddressController {
    constructor(
        private readonly addressService:AddressService,
        private readonly jwtService: JsonWebTokenService

      ){}
    @ApiResponse({ status: 201, description: 'The profile has been successfully created.'})
    @ApiOperation({ summary: 'create profile using this  ' })
    @ApiTags('profile')
    @Post("")
    async create(@User() token:string,@Body() data:CreateAddressDto) {
         const user = await this.jwtService.verifyJwtToken(token)
        //  const user_id = Number(user[`id`]);
        return this.addressService.create(Number(user['id']),data);
    }

}

