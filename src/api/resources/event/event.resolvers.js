import { Event } from './event.model';

const getEventsForToken = () => {
  
}

export const eventResolvers = {
  Query: {
    Event: getEventsForToken 
  }
}