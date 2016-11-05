// theboard, this is the place where the
router.get('/', function (req, res) {

    db.one('SELECT $1 AS value', 123)
        .then(function (data) {
            res.send('DATA:'+data.value)
        })
        .catch(function (error) {
            res.send('ERROR:'+error)
        })
})

// define the about route
router.get('/recruit', function (req, res) {
    res.render('main/index', { title: 'The Monster Game', message: 'recruits' })
})

module.exports = router