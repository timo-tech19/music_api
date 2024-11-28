import {
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Song } from 'src/song/song.entity';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  // A user can become an artist
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  // Many artists can have many songs
  @ManyToMany(() => Song, (song) => song.artists)
  songs: Song[];
}
