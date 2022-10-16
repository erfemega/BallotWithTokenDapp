import { Controller, Get, Param } from '@nestjs/common';
import { ProviderService } from './provider.service';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Get('transaction-by-hash/:hash')
  getTransactionByHash(@Param('hash') hash: string) {
    return this.providerService.getTransactionByHash(hash);
  }
}
