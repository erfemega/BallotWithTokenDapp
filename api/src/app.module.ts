import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenController } from './token/token.controller';
import { TokenService } from './token/token.service';
import { ProviderService } from './provider/provider.service';
import { ProviderController } from './provider/provider.controller';

@Module({
  imports: [],
  controllers: [AppController, TokenController, ProviderController],
  providers: [AppService, TokenService, ProviderService],
})
export class AppModule {}
