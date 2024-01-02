import { Body, Controller } from '@nestjs/common';

import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(
        private readonly eventsService: EventsService,  // 의존성 주입
    ) {}
    
    
    incrementEventIndex(@Body() shareData){
        console.log("====shareData====",shareData)
        return this.eventsService.incrementEventIndex;
    }
}
