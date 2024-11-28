import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}
  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(id: string) {
    return `Song with id ${id} found`;
  }

  @Post()
  create() {
    return this.songService.create('Wonderful Life By Zendaya');
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Song with id ${id} updated`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Song with id ${id} deleted`;
  }
}
