import { Controller, Get, Post, Body, Patch, Param, Delete ,ParseIntPipe,NotFoundException,} from '@nestjs/common';
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
  async create(@Body() createArticleDto: CreateArticalDto) {
    return new ArticleEntity(
      await this.articalsService.create(createArticleDto),
    );
  }
  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  async findDrafts() {
    const drafts = await this.articalsService.findDrafts();
    return drafts.map((draft) => new ArticleEntity(draft));
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  // findAll() {
  //   return this.articalsService.findAll();
  async findAll() {
    const articles = await this.articalsService.findAll();
    return articles.map((article) => new ArticleEntity(article));
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new ArticleEntity(await this.articalsService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateArticalDto: UpdateArticalDto) {
    return new ArticleEntity(await this.articalsService.update(id, updateArticalDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ArticleEntity(await this.articalsService.remove(id));
  }
}
