import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { ProviderService } from 'src/provider/provider.service';
import * as BalletJson from './../assets/TokenizedBallot.json';

const BALLOT_ADDRESS = "0x3c631e1e974eAD0C65A45338156c34183040F3b0"

@Injectable()
export class BallotService {

	contract;
  constructor(private readonly providerService: ProviderService) {
		this.contract = this.providerService.getContract(
			BALLOT_ADDRESS,
			BalletJson.abi,
		);
  }

	async getPropsalInfo() {
		let index: number = 0;
		let proposalArr = [];
		while(true){
			try {
			proposalArr.push(await this.contract.proposals(index))
			index += 1;
			}
			catch {
				break
			}
		}
		let proposals = proposalArr.map(entry => ({
			name: ethers.utils.parseBytes32String(entry[0]),
			voteCount: ethers.BigNumber.from(entry[1]).toString()
		}))
		return proposals
	}

}
