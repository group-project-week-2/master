
// const { givesError } = require('../helpers')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// const { givesError } = require('../helpers')
// mongoose.connect((process.env.MONGOOSE_CONNECT || 'mongodb://localhost:27017/test'), { useNewUrlParser: true });
// const Schema = mongoose.Schema

const Schema = require('mongoose').Schema

let userSchema = new Schema({
    provinsi: String,
    kab:String,
    nik:String,
    nama:String,
    ttl:String,
    alamat:String,
    agama:String,
    statusPerkawinan:String,
    pekerjaan:String,
    kewarganegaraan:String,
    berlakuHingga:String,
    img:String
})

// userSchema.pre('save', function () {
//     if (this.isModified('password')) { this.password = bcrypt.hashSync(this.password, 6) }
// })

// userSchema.methods.comparePassword = function (str) {
//     return bcrypt.compareSync(str, this.password)
// }

let User = mongoose.model('User', userSchema)

module.exports = { User }
