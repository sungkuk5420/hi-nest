import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {

    incrementEventIndex(query){
        console.log("======query=====",query)
        return query
    }
}
