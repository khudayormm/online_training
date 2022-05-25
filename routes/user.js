const { Router } = require('express')

const router = Router()




router.get('/testlar/math', require('../controllers/profile/get/mathtest'))
router.get('/testlar/score', require('../controllers/profile/get/score'))

router.post('/testlar/math', require('../controllers/profile/post/math'))

module.exports = router;