const router =require('express').Router()
const uploadRouter = require('./upload')

router.use('/',uploadRouter)

// router.use(authorization.authorizeMiddleware)
// router.use('/todos',todoRouter)


module.exports = router