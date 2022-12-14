import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService, PaymentOrder } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('total-supply')
  // getTotalSupply() {
  //   return this.appService.getTotalSupply();
  // }

  // @Get('allowance')
  // getAllowance(@Query('from') from: string, @Query('to') to: string) {
  //   return this.appService.getAllowance(from, to);
  // }

  // @Get('transaction-by-hash/:hash')
  // getTransactionByHash(@Param('hash') hash: string) {
  //   return this.appService.getTransactionByHash(hash);
  // }

  // @Post('create-order')
  // createOrder(@Body() body: PaymentOrder) {
  //   this.appService.createPaymentOrder(body);
  // }

  // @Get('list-payment-order')
  // listOrders() {
  //   return this.appService.listPaymentOrders();
  // }

}
