import { Module } from '@nestjs/common';
import { ArticalsService } from './articals.service';
import { ArticalsController } from './articals.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [ArticalsController],
  providers: [ArticalsService],
  imports: [PrismaModule],
})
export class ArticalsModule {}
