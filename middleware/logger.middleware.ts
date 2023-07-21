import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { JsonWebTokenService } from 'src/services/jwt.service';
import { PrismaService } from 'src/services/prisma.services';
import { STATUS } from 'src/utils/constants/constants';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JsonWebTokenService,
    private prisma: PrismaService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if (!req?.headers?.authorization) {
      throw new HttpException(STATUS.NOT_ALLOWED, 400);
    }
    const token = req.headers.authorization.split(' ')[1];
    const user = await this.jwtService.verifyJwtToken(token);
    console.log('token user', user);

    const dbUser = await this.prisma.users.findFirst({
      where: {
        id:user['id'],
      },
    });
    console.log('db user', dbUser);
    if (dbUser.status !== STATUS.ACTIVE) {
      throw new HttpException(STATUS.ACCOUNT_BLOCKED, 403);
    }
    next();
  }
}
