const express = require('express');
const router = express.Router();

const mediaController = require('../Controllers/media');

/* GET: default route */
router.get('/', (req, res, next) => {
    mediaController.index(req, res, next);
});

/* GET: /media/create => display blank form */
router.get('/create', (req, res, next) => {
    mediaController.displayCreateForm(req, res, next);
});

/* POST: /media/create => process form submission for creating */
router.post('/create', (req, res, next) => {
    mediaController.createMedia(req, res, next);
});

module.exports = router;