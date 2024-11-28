import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {
  // local DB
  // local array
  private readonly songs = [];
  create(song: string) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs[this.songs.length - 1];
  }
  findAll() {
    // fetch the songs from the db
    return this.songs;
  }
}
