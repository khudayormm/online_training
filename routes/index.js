const { Router } = require('express');
const verify = require('../auth/verifyUser')

const router = Router()

router.get('/', verify, require('../controllers/render/home')) 
router.get('/testlar', require('../controllers/render/tests'))
router.get('/register', require('../controllers/render/register'))


router.post('/register', require('../controllers/post/register'))
router.post('/login', require('../controllers/post/login'))

module.exports = router