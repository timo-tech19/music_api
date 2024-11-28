import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSongDto } from './dto/create-song-dto';
import { Song } from './song.entity';
import { UpdateSongDto } from './dto/update-song-dto';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private readonly songsRepository: Repository<Song>,
  ) {}
  async create(data: CreateSongDto): Promise<Song> {
    const song = new Song();
    song.title = data.title;
    song.artists = data.artists;
    song.duration = data.duration;
    song.releaseDate = data.releaseDate;
    song.lyrics = data.lyrics;

    // Save the song in the database
    return this.songsRepository.save(song);
  }
  findAll(): Promise<Song[]> {
    // fetch the songs from the db
    return this.songsRepository.find();
  }

  findOne(id: number): Promise<Song> {
    // fetch the song from the db by id
    return this.songsRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateSong: UpdateSongDto): Promise<UpdateResult> {
    // update the song in the db by id
    return this.songsRepository.update(id, updateSong);
  }

  remove(id: number): Promise<DeleteResult> {
    // delete the song from the db by id
    return this.songsRepository.delete({ id });
  }
}
