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
  title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  artists: string[];

  @IsNotEmpty()
  @IsDateString()
  releasedDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  duration: Date;

  @IsString()
  @IsOptional()
  readonly lyrics: string;
}
