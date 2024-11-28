import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}
  @Get()
  findAll() {
    try {
      return this.songService.findAll();
    } catch (err) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: err },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ) {
    return `Song with id ${id} found`;
  }

  @Post()
  create(@Body() song: CreateSongDto) {
    return this.songService.create(song);
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
