const mongoose = require('mongoose')


const addressSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    number: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        default: ""
    },
    userId: {
        type: String,

    },
    country: String,
    state: String,
    city: String,
    streetaddress: String,
    postalcode: String
},

    {
        timestamps: true
    })


const addressModel = mongoose.model("address", addressSchema)


module.exports = addressModel