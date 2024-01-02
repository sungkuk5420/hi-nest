import { Body, Controller, Get, Query, Req } from '@nestjs/common';

import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(
        private readonly eventsService: EventsService,  // 의존성 주입
    ) {}
    @Get()
    getEventData(){
        return {
            title:'<div style="color:${mainTextColor};">ZEISS 스마일®<br>✨ <span style="color:${accentTextColor};">${variable}</span>번째 ✨<br>환자입니다!</div>',
            mainTextColor: "#2F3337",
            accentTextColor: "#2E6FEF",
            variable: "1,200,252",
            firstBackgroundColor: "white",
            secondBackgroundColor: "black",
            buttonColor: "#2E6FEF",
            buttonTextColor: "white",
            buttonText:"ZEISS 카드 받고 이벤트 참여",
            imageURL:"https://previews.123rf.com/images/kchung/kchung1610/kchung161001354/64508202-test-written-by-hand-hand-writing-on-transparent-board-photo.jpg",
        };
    }
    @Get('callback')
    incrementEventIndex(@Query() query){
        return this.eventsService.incrementEventIndex(query);
    }
}
