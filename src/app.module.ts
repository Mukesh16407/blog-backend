import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticalsModule } from './articals/articals.module';

@Module({
  imports: [PrismaModule, ArticalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
