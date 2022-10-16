import { Controller, Get, Query } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}
  @Get('data')
  async getTokenData() {
    const totalSupply = await this.tokenService.getTotalSupply();
    const tokenInfo = await this.tokenService.getTokenInfo();
    return {
      totalSupply,
      tokenInfo,
    };
  }

  @Get('allowance')
  getAllowance(@Query('from') from: string, @Query('to') to: string) {
    return this.tokenService.getAllowance(from, to);
  }
}
