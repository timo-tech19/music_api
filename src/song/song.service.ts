import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';

@Injectable()
export class SongService {
  // local DB
  // local array
  private readonly songs: CreateSongDto[] = [];
  create(song: CreateSongDto) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs[this.songs.length - 1];
  }
  findAll() {
    // fetch the songs from the db
    return this.songs;
  }
}
