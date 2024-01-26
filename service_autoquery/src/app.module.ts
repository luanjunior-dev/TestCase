import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Autoquery\Module } from './autoquery/autoquery/.module';

@Module({
  imports: [Autoquery\Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
