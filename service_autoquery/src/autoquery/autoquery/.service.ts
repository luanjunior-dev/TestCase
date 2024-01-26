import { Injectable } from '@nestjs/common';
import { CreateAutoquery\Dto } from './dto/create-autoquery\.dto';
import { UpdateAutoquery\Dto } from './dto/update-autoquery\.dto';

@Injectable()
export class Autoquery\Service {
  create(createAutoquery\Dto: CreateAutoquery\Dto) {
    return 'This action adds a new autoquery\';
  }

  findAll() {
    return `This action returns all autoquery\`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autoquery\`;
  }

  update(id: number, updateAutoquery\Dto: UpdateAutoquery\Dto) {
    return `This action updates a #${id} autoquery\`;
  }

  remove(id: number) {
    return `This action removes a #${id} autoquery\`;
  }
}
