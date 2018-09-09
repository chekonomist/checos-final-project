//import express router and fs library
const Router = require('express').Router;
const fs = require('fs-extra')

//Don't know what this does
const pageRouter = Router()

//Tell the router to display the home.html file
pageRouter
  .get('/', (req, res)=>{
    res.render('home.ejs')
  })

//Export this router for the server.js to use it
module.exports = pageRouter
