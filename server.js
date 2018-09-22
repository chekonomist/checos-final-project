// import libraries
const express = require('express')
const ejs = require('ejs')
const knex = require('knex')
const { Model } = require('objection')
const bodyParser = require('body-parser')

//Import auth libraries
const passport = require('passport')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

// Import configuration functions
const registerLocalStrategy = require('./src/middleware/passport-local--registerLocalStrategy.js')
const { configDeserializeUser, configSerializeUser } = require('./src/helpers/passport-local--sessionActions.js')

// Import database connection
const dbConfigObj = require('./knexfile.js')

//import routers and components
const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')
const authRouter = require('./src/routers/authRouter')

// initialize the express application
const app = express()

//Store the connection to the database and the environment
const appDb = knex(dbConfigObj.development)
//Make the DB available for knex
// configure our database w/ objection model
Model.knex(appDb)
//This is like passing the DB as a prop
app.locals.db = appDb

// set the port at 3000
const PORT = 3000

//Configure cookie parser/session libraries + middleware n
app.use( cookieParser() )
app.use( cookieSession({
  name: 'cookiesession',
  secret: 'supercookiesecret',
  httpOnly: true,
  signed: false
}))


//Configure passport + session middleware
app.use(passport.initialize())
app.use(passport.session())
passport.use(registerLocalStrategy())
passport.serializeUser(configSerializeUser())
passport.deserializeUser(configDeserializeUser())


//Configure body parser as middleware for express application.
app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )

//Serve static files from the /public directory
app.use( express.static( `${__dirname}/public` ) )

//Register the ejs.renderFile function as the template engine
app.engine( 'ejs', ejs.renderFile )
//set express as the view engine
app.set('view engine', 'ejs')
//set the path to the views
app.set('views', `${__dirname}/src/views`)

//create basic route handler
app.use('/auth', authRouter )
app.use('/api', apiRouter)
app.use('/', pageRouter)

app.use((req, res)=>{
  res.render('reactApp.ejs')
})

// make the app listen to port
app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
