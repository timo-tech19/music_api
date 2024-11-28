import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Playlist } from './playlist.entity';
import { Song } from 'src/song/song.entity';
import { User } from 'src/users/user.entity';
import { CreatePlaylistDto } from './dto/create-playlist-dto';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private readonly playlistRepository: Repository<Playlist>,
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(playlistDto: CreatePlaylistDto): Promise<Playlist> {
    const playlist = new Playlist();
    playlist.name = playlistDto.name;

    // songs will be array of Ids
    playlist.songs = await this.songRepository.findBy({
      id: In(playlistDto.songs),
    });

    // user will be Id of user from request
    // TODO: authenticate user
    playlist.user = await this.userRepository.findOneBy({
      id: playlistDto.user,
    });

    return this.playlistRepository.save(playlist);
  }
}
