import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenController } from './token/token.controller';
import { TokenService } from './token/token.service';
import { ProviderService } from './provider/provider.service';
import { ProviderController } from './provider/provider.controller';
import { BallotController } from './ballot/ballot.controller';
import { BallotService } from './ballot/ballot.service';

@Module({
  imports: [],
  controllers: [AppController, TokenController, ProviderController, BallotController],
  providers: [AppService, TokenService, ProviderService, BallotService],
})
export class AppModule {}
