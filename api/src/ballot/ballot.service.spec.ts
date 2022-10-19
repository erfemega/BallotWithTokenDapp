import { Test, TestingModule } from '@nestjs/testing';
import { BallotService } from './ballot.service';

describe('BallotService', () => {
  let service: BallotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BallotService],
    }).compile();

    service = module.get<BallotService>(BallotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
