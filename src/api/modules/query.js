import merge from 'lodash.merge';
// you are going to need functions here to 
// add to the database
// delete from the database (you really just want to delete tokens)
// retrieve one token 
// retrieve all events associated with one token by time 
// modify - a function to condense every four events of a minute down to an average value for that minute 

// what is your professional development process like?
export const controllers = {
  createOne(model, body) {
    return model.create(body)
  }
}

export const createOne = (model) => (req, res, next) => {
  return controllers.createOne(model, req.body)
  .then(doc => res.status(201).json(doc))
  .catch(error => next(error))
}

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    createOne: createOne(model)
  }

  return {...defaults, ...overrides}
}
