const Router = require('express').Router
// Import DB model
const Broker = require('../models/Broker.js')
const Property = require('../models/Property.js')

const apiRouter = Router()

const fetchAllProperties = (req, res)=>{
  Property
    .query()
    .eager('brokers')
    .then((recordsWithBrokers)=>{
      res.status(200).json(recordsWithBrokers)
    })
}
const fetchOneProperty = (req, res)=>{
  const db = req.app.locals.db
  const idInRoute = req.params._id
  const relatedQuery = req.query.related_query

  Property
    .query()
    .eager(req.query.related_query)
    .findById(idInRoute)
    .then((recordsWithBrokers)=>{
      res.status(200).json(recordsWithBrokers)
    })
}
const createOneProperty = (req, res)=>{
  Property
    .query()
    .insert(req.body)
    .then((newProperty)=>{
      res.status(200).json(newProperty)
    })
}
const editOneProperty = (req, res)=>{
  Property
    .query()
    .updateAndFetchById(req.params._id, req.body)
    .then((updatedProperty)=>{
      res.status(200).json(updatedProperty)
    })
}
const deleteOneProperty = (req, res)=>{
  Property
    .query()
    .deleteById(req.params._id)
    .then((deletedProperty)=>{
      res.status(200).json(deletedProperty)
    })
}

const fetchAllBrokers = (req, res)=>{
  Broker
    .query()
    .eager('properties')
    .then((recordsWithProperties)=>{
      res.status(200).json(recordsWithProperties)
    })
}
const fetchOneBroker = (req, res)=>{
  const db = req.app.locals.db
  const idInRoute = req.params._id

  db.select('*').from('brokers')
      .where('id', '=', idInRoute)
      .then((brokersRecords)=>{
        res.json(brokersRecords[0])
      })
}
const createOneBroker = (req, res)=>{
  Broker
    .query()
    .insert(req.body)
    .then((newBroker)=>{
      res.status(200).json(newBroker)
    })
}
const editOneBroker = (req, res)=>{
  Broker
    .query()
    .updateAndFetchById(req.params._id, req.body)
    .then((updatedBroker)=>{
      res.status(200).json(updatedBroker)
    })
}

apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/properties' : 'Show available properties',
    '/api/brokers' : 'Show real estate brokers'
  })
})

apiRouter
  .get('/properties', fetchAllProperties)
  .get('/properties/:_id', fetchOneProperty)
  .post('/properties', createOneProperty)
  .put('/properties/:_id', editOneProperty)
  .delete('/property/:_id', deleteOneProperty)

apiRouter
  .get('/brokers', fetchAllBrokers)
  .get('/brokers/:_id', fetchOneBroker)
  .post('/brokers/', createOneBroker)
  .put('/brokers/:_id', editOneBroker)

module.exports = apiRouter
