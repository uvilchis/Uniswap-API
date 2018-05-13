import { Event } from './event.model';

// add an event 
const addEvent = (__, { input }) => {
  return Event.create(input)
}
// we we need to modify this function to pull only a specified number of data points 
// to do that, we might need to modify the Event graphQL model 
const getEvents = (__, { input, limit }) => {
  let resultsCap = limit || 10;
  return Event.find({ "symbol": input }).sort({ createdAt: -1 }).limit(resultsCap);
}

export const eventResolvers = {
  Query: {
    Event: getEvents
  },
  Mutation: {
    addEvent
  }
}

