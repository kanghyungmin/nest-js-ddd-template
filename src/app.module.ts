import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './creationalPattern/SingleTon';
import { ProductFactory } from './creationalPattern/factory';
import { DatabaseConnectionBuilder } from './creationalPattern/builder';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LoggerService, ProductFactory, DatabaseConnectionBuilder],
})
export class AppModule {}
