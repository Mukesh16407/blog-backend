import { Controller, Get, Post, Body, Patch, Param, Delete ,ParseIntPipe} from '@nestjs/common';
import { ArticalsService } from './articals.service';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/artical.entity';

@Controller('articals')
@ApiTags('Articles')
export class ArticalsController {
  constructor(private readonly articalsService: ArticalsService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticalDto: CreateArticalDto) {
    return this.articalsService.create(createArticalDto);
  }
  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    return this.articalsService.findDrafts();
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articalsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articalsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateArticalDto: UpdateArticalDto) {
    return this.articalsService.update(id, updateArticalDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.articalsService.remove(id);
  }
}
