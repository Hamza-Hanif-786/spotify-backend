import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create('Gujjar is back');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'This action returns a song by id';
  }

  @Put(':id')
  update() {
    return 'This action updates a song by id';
  }

  @Delete(':id')
  remove() {
    return 'This action removes a song by id';
  }
}
