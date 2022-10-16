import { Get, Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as TokenJson from './assets/MyToken.json';

const CONTRACT_ADDRESS = '0x8AE3C9bf30481901ce9B5b8AEAAc214aA67ec81F';

export class PaymentOrder {
  id: string;
  secret: string;
  amount: number;
}

@Injectable()
export class AppService {
  provider: ethers.providers.Provider;
  contract: ethers.Contract;

  database: PaymentOrder[];

  constructor() {
    // this.provider = ethers.getDefaultProvider('goerli');
    // this.contract = new ethers.Contract(
    //   CONTRACT_ADDRESS,
    //   TokenJson.abi,
    //   this.provider,
    // );
    this.database = [];
  }

  // async getTotalSupply() {
  //   const totalSupplyBN = await this.contract.totalSupply();
  //   const totalSupply = ethers.utils.formatEther(totalSupplyBN);
  //   return totalSupply;
  // }

  // async getAllowance(from: string, to: string) {
  //   const allowanceBN = await this.contract.allowance(from, to);
  //   const allowance = ethers.utils.formatEther(allowanceBN);
  //   return allowance;
  // }

  // async getTransactionByHash(hash: string) {
  //   const transaction = await this.provider.getTransaction(hash);
  //   return transaction;
  // }

  // async getTransactionReceiptByHash(hash: string) {
  //   const transactionReceipt = await this.provider.getTransactionReceipt(hash);
  //   return transactionReceipt;
  // }

  async createPaymentOrder(body: PaymentOrder) {
    this.database.push(body);
  }

  // async getPaymentOrderById(id: string) {

  // }

  async listPaymentOrders() {
    console.log(this.database);
    const safeData = await this.database.map((element) => {
      const safeElement = {
        id: element.id,
        amount: element.amount,
      };
      return safeElement;
    });
    return safeData;
  }
}
