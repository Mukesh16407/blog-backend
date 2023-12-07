import { Injectable } from '@nestjs/common';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticalsService {
  constructor(private prisma: PrismaService) {}


  create(createArticalDto: CreateArticalDto) {
    return this.prisma.article.create({data:createArticalDto})
  }
  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({where:{id}})
  }

  update(id: number, updateArticalDto: UpdateArticalDto) {
    return this.prisma.article.update({
      where: {id},
      data:updateArticalDto
    })
  }

  remove(id: number) {
    return this.prisma.article.delete({where:{id}})
  }
}
