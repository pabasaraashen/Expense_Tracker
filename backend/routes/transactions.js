const router = require('express').Router()



router.get('/', (req, res) => {
    res.send('Transactions route works!');
})

module.exports = router;