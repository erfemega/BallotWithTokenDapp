import { Controller,Get } from '@nestjs/common';
import { BallotService } from './ballot.service';

@Controller('ballot')
export class BallotController {
    constructor(private readonly ballotService: BallotService) {}

    @Get('proposals')
    async getProposals() {
        const proposals = await this.ballotService.getPropsalInfo();
        return proposals
    }
}
