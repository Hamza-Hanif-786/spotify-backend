import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'My Heart Will Go On' })
  title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ example: ['Celine Dion', 'Royals'] })
  artists: string[];

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ example: '2024-12-31' })
  releasedDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  @ApiProperty({ example: '03:00' })
  duration: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://www.youtube.com/watch?v=1w7OgIMMRc4' })
  readonly lyrics: string;
}
