import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JsonWebTokenService {
  constructor(private readonly jwtService: JwtService) {}
  async createJwtToken(user: object): Promise<any> {
    try {
      const accessToken = await this.jwtService.sign(user);
      return accessToken;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async verifyJwtToken(token: string): Promise<object> {
    const user = await this.jwtService.verify(token);
    return user;
  }
}
