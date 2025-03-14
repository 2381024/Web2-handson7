import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSongDTO } from './create-song.dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songService: SongsService) {}

    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
        return this.songService.create(createSongDTO);
    }

    @Get()
    findAll() {
        return this.songService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.songService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createSongDTO: CreateSongDTO) {
        return this.songService.updateOne(id, createSongDTO)
    }

    @Delete(':id') 
    delete(@Param('id') id: number) {
        return this.songService.delete(id)
    }
}
