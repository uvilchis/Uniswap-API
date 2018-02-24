import { Event } from './event.model';

// add an event 
const addEvent = (__, {input}) => {
  return Event.create(input)
}

const getEvents = (__,{input}) => {
  return Event.find({"symbol": input})
}


// delete an event 
// FOR TESTING PURPOSES
// WE WON'T ACTUALLY PROVIDE A WAY TO DELETE EVENTS 
// const removeEvent = (__, {input}) => {
//   return Event.findOneAndRemove()
// }

// we will however, need a function that goes back at the end of each day 
// and then truncates the four data points from a minute down to one 


// TODO: RETRIEVE EVENTS BY TOKEN BY TIME 

export const eventResolvers = {
  Query: {
    Event: getEvents
  },
  Mutation: {
    addEvent
  }
}