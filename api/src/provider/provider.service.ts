import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class ProviderService {
  provider: ethers.providers.Provider;
  constructor() {
    this.provider = ethers.getDefaultProvider('goerli');
  }

  getProvider() {
    return this.provider;
  }

  getContract(contractAddress: string, contractABI: ethers.ContractInterface) {
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      this.provider,
    );
    return contract;
  }

  async getTransactionByHash(hash: string) {
    const transaction = await this.provider.getTransaction(hash);
    return transaction;
  }

  async getTransactionReceiptByHash(hash: string) {
    const transactionReceipt = await this.provider.getTransactionReceipt(hash);
    return transactionReceipt;
  }
}
