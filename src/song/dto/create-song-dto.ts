import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

// use DTOs for input validation for your application.
export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date;
}
