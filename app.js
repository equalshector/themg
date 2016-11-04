var express = require('express'),
    app = express()

//***** STATIC FILE PATHS
    app.use(express.static('app/css'))
    app.set('views', 'app/views')
    app.set('view engine', 'pug')


//***** ROUTE FILES
    var theboard = require('./app/js/routes/theboard.js')
    app.use('/theboard', theboard)


//***** BASIC ROUTES
    app.get('/', function (req, res) {
        res.render('main/index', { title: 'The Monster Game', message: 'Welcome to the Monster Game' })
    })

    app.route('/login')
        .get(function (req, res) {
            res.render('main/login', { title: 'The Monster Game', message: 'Hi, click here to login' })
        })
        .post(function (req, res) {
            res.send('You are trying to login via post, give me a sec...')
        })



//***** GENERIC ERRORS
    app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!')
    })

    app.use(function(err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Something broke!')
    })

//***** START THE SERVER THINGYMAJIC
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })


