import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist-dto';
import { PlaylistsService } from './playlists.service';
import { Playlist } from './playlist.entity';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistService: PlaylistsService) {}

  @Post()
  create(@Body() playlistDto: CreatePlaylistDto): Promise<Playlist> {
    return this.playlistService.create(playlistDto);
  }
}
