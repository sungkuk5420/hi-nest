import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';

@Module({
  imports: [],
  controllers: [MoviesController, EventsController],
  providers: [MoviesService, EventsService],
})
export class AppModule {}
