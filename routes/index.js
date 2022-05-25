const { Router } = require('express');

const router = Router()

router.get('/', require('../controllers/render/home'))
router.get('/testlar', require('../controllers/render/tests'))
router.get('/login', require('../controllers/render/login'))
router.get('/register', require('../controllers/render/register'))


router.post('/register', require('../controllers/post/register'))
router.post('/login', require('../controllers/post/login'))

module.exports = router