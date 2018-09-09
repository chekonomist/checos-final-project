// import libraries
const express = require('express')
const ejs = require('ejs')

//import routers and components
const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')

// initialize the express application
const app = express()

// set the port at 3000
const PORT = 3000

//Serve static files from the /public directory
app.use( express.static( `${__dirname}/public` ) )

//Register the ejs.renderFile function as the template engine
app.engine( 'ejs', ejs.renderFile )
//set express as the view engine
app.set('view engine', 'ejs')
//set the path to the views
app.set('views', `${__dirname}/src/views`)

//create basic route handler
app.use('/api', apiRouter)
app.use('/', pageRouter)

app.use((req, res)=>{
  res.render('404.ejs')
})

// make the app listen to port
app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
