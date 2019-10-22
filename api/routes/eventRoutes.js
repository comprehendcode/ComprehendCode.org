var express = require('express');
var router = express.Router();

var ctrlEvent= require('../controller/event');

router.get('/event/:title', ctrlEvent.read);
router.get('/events', ctrlEvent.readAll);
router.delete('/event/:name', ctrlEvent.delete);
router.post('/event', ctrlEvent.register)

module.exports = router;