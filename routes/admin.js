const { Router } = require('express')

const router = Router()

const upload = require('../middleware/upload-image')



router.get('/', require('../controllers/admin/render/home'))
router.get('/login', require('../controllers/admin/render/login'))
router.get('/register', require('../controllers/admin/render/register'))

router.get('/math', require('../controllers/admin/sciences/get/math'))
router.get('/math/add', require('../controllers/admin/sciences/get/add-math'))



router.post('/math/add', upload.single('myFfile'), require('../controllers/admin/sciences/post/add-math'))


module.exports = router