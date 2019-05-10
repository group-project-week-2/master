const { OAuth2Client } = require('google-auth-library')
const { wrapAsync, givesError } = require('../helpers')
const jwt = require('jsonwebtoken')

const { User } = require('../model')
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)


const functions = {
    newData: wrapAsync(async (req, res) => {
        
        
        
        
        let newUser = { ...req.body }
        newUser.img = `${req.file.filename}.jpeg`
        let user = await User.create(newUser)
        console.log(req.file)
        console.log(req.body)

        if (user) res.status(201).send({ file: req.file, created: user })
        else throw givesError(404, 'a new data cannot be saved')

    }),
    getImages: wrapAsync(async (req, res) => {
        // MyModel.find({ name: /john/i }, 'img')
        let search = {}
        console.log(req.query)
        Object.keys(req.query).forEach(key => { 
            search[key] = new RegExp(req.query[key],'i')            
        })
        console.log(search)
        let user = await User.find(search)
        if (user) {
            res.json(user.img)
        } else throw givesError(404, 'no such user')
    }),
    getUserAndImages: wrapAsync(async (req, res) => {
        let search = {}
        console.log(req.query)
        Object.keys(req.query).forEach(key => { 
            search[key] = new RegExp(req.query[key],'i')            
        })
        console.log(search)
        let user = await User.find(search)
        if (user) {
            res.json(user)
        } else throw givesError(404, 'no such user')
    }),

    // register: wrapAsync(async (req, res) => {
    //     let user = await User.create({ ...req.body })
    //     if (user) {
    //         res.status(201).json(user)
    //     } else throw givesError(404, 'user cannot be created')
    // }),

    // login: wrapAsync(async (req, res) => {
    //     let user = await User.findOne({ email: req.body.email }).select('+password')
    //     if (user && user.comparePassword(req.body.password)) {
    //         delete user.password;
    //         let token = jwtGiveToken(user)
    //         res.status(201).json({ user, token })
    //     }
    //     else throw givesError(404, 'check your username / password')
    // }),

    // googleLogin: wrapAsync(async (req, res) => {
    //     // console.log(process.env.GOOGLE_CLIENT_ID)   

    //     let ticket = await googleClient.verifyIdToken({
    //         idToken: req.body.token,
    //         audience: process.env.GOOGLE_CLIENT_ID || 'none'
    //     })
    //     if (ticket) {
    //         let { email, name } = ticket.getPayload()
    //         let user = await User.findOne({ email })
    //         if (!user) { user = User.create({ password: generateStringOfNumber(8), email, name, image: ticket.picture }) }
    //         let jwt_token = jwtGiveToken(user)
    //         res.status(201).json({
    //             user: { _id: user._id, name: user.name, email: user.email, },
    //             token: jwt_token
    //         })
    //     } else throw givesError(404, 'have you supplied the right google credentials')
    // }),

    // authorizeMiddleware: async (req, res, next) => {
    //     try {
    //         let token = jwt.verify(req.headers.token)
    //         let user = await User.findOne({ _id: token._id })
    //         if (user) {
    //             req.user = user
    //             next()
    //         }
    //         else { next(givesError(401, 'bad token, no such user')) }

    //     } catch (err) {
    //         next(givesError(401, 'bad token'))
    //     }
    // }
}

module.exports = functions