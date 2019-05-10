const router = require('express').Router()
// const auth = require(`../controller/auth`)
const images = require('../controller/images')
const multer = require('multer')
const {sendUploadToGCS} = require('../helpers')
// const upload = multer({
//     storage: multer.MemoryStorage,
//     fileSize: 5 * 1024 * 1024
// })
const upload = multer({ dest: 'uploads/' })


router.post('/upload',
    upload.single('image'),
    // sendUploadToGCS,
    images.newData)
// router.delete('/delete', images.newData)
// router.get('/images', images.getImages)
router.get('/user', images.getUserAndImages)

// router.post('/upload', auth.login)
// router.post('/google-login', auth.googleLogin)
// router.post('/register', auth.register)

module.exports = router