import { Module } from '@nestjs/common';
import { Autoquery\Service } from './autoquery\.service';
import { Autoquery\Controller } from './autoquery\.controller';

@Module({
  controllers: [Autoquery\Controller],
  providers: [Autoquery\Service],
})
export class Autoquery\Module {}
