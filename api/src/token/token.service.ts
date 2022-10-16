import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { ProviderService } from 'src/provider/provider.service';
import * as TokenJson from './../assets/MyToken.json';

const TOKEN_ADDRESS = '0x6Cab69098Fb347dC33eFb950f700B409D76E8ae3';

@Injectable()
export class TokenService {
  contract;
  constructor(private readonly providerService: ProviderService) {
    this.contract = this.providerService.getContract(
      TOKEN_ADDRESS,
      TokenJson.abi,
    );
  }

  async getTokenInfo() {
    const name = await this.contract.name();
    const symbol = await this.contract.symbol();
    const address = await this.contract.address;

    return {
      name,
      symbol,
      address,
    };
  }

  async getTotalSupply() {
    const totalSupplyBN = await this.contract.totalSupply();
    const totalSupply = ethers.utils.formatEther(totalSupplyBN);
    return totalSupply;
  }

  async getAllowance(from: string, to: string) {
    const allowanceBN = await this.contract.allowance(from, to);
    const allowance = ethers.utils.formatEther(allowanceBN);
    return allowance;
  }
}
