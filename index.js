const   
    express = require('express')
    mongoose = require('mongoose')
    logger = require('morgan')
    bodyParser = require('body-parser')
    holidayRoutes = require('.routes/holidays.js')
    PORT = 3000

    app.use(logger('dev'))
    app.use(bodyParser.json())

    mongoose.connect('mongodb://localhost/holiday', (err) =>{
        console.log(err || "connected to Mongodb")
    })

    app.get('/', (req, res)=>{
        res.json({message: "the root is on fire"})
    })
    
    app.use('/holidays', holidaysRoutes)
    
    app.listen(PORT, (err) =>{
        console.log(err || `Server running on port ${PORT}`)
    })