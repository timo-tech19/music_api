import { Injectable } from '@nestjs/common';
import { DeleteResult, In, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSongDto } from './dto/create-song-dto';
import { Song } from './song.entity';
import { UpdateSongDto } from './dto/update-song-dto';
import { Artist } from 'src/artists/artist.entity';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
  ) {}
  async create(data: CreateSongDto): Promise<Song> {
    const song = new Song();
    song.title = data.title;
    song.duration = data.duration;
    song.releaseDate = data.releaseDate;
    song.lyrics = data.lyrics;

    const artists = await this.artistRepository.findBy({
      id: In(data.artists),
    });

    song.artists = artists;

    // Save the song in the database
    return this.songRepository.save(song);
  }
  findAll(): Promise<Song[]> {
    // fetch the songs from the db
    return this.songRepository.find({
      relations: ['artists'],
      relationLoadStrategy: 'query',
    });
  }

  findOne(id: number): Promise<Song> {
    // fetch the song from the db by id
    return this.songRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateSong: UpdateSongDto) {
    // update the song in the db by id
    // return this.songRepository.update(id, updateSong);
  }

  remove(id: number): Promise<DeleteResult> {
    // delete the song from the db by id
    return this.songRepository.delete({ id });
  }
}
