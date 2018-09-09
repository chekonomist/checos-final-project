// import libraries
const express = require('express')
const ejs = require('ejs')

// initialize the express application
const app = express()

// set the port at 3000
const PORT = 3000

//declare connections to page routers
const pageRouter = require('./src/routes/pageRouter.js')

//create basic route handler
app.use('/', pageRouter)

// make the app listen to port
app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
