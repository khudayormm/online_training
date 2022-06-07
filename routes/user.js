const { Router } = require('express')

const router = Router()

const verified = require('../auth/verifyUser')




router.get('/testlar/math', verified, require('../controllers/profile/get/mathtest'))
router.get('/testlar/score', verified, require('../controllers/profile/get/score'))

router.post('/testlar/math', verified, require('../controllers/profile/post/math'))

module.exports = router;