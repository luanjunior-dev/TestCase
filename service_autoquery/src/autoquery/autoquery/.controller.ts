import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Autoquery\Service } from './autoquery\.service';
import { CreateAutoquery\Dto } from './dto/create-autoquery\.dto';
import { UpdateAutoquery\Dto } from './dto/update-autoquery\.dto';

@Controller('autoquery\')
export class Autoquery\Controller {
  constructor(private readonly autoquery\Service: Autoquery\Service) {}

  @Post()
  create(@Body() createAutoquery\Dto: CreateAutoquery\Dto) {
    return this.autoquery\Service.create(createAutoquery\Dto);
  }

  @Get()
  findAll() {
    return this.autoquery\Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoquery\Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutoquery\Dto: UpdateAutoquery\Dto) {
    return this.autoquery\Service.update(+id, updateAutoquery\Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoquery\Service.remove(+id);
  }
}
