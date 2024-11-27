import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'This action adds a new song';
  }

  @Get()
  findAll() {
    return 'This action returns all songs';
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
