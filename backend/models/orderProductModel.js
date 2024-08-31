const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    productDetails: {
        type: Array,
        default: []
    },
    email: {
        type: String,
        default: ""
    },
    number: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        default: ""
    },
    orderId: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        enum: ['confirmed', 'processing', 'shipped', 'delivered'],
        default: 'confirmed'
    },


    paymentDetails: {
        paymentId: {
            type: String,
            default: ""
        },

        address: {
            type: Array,
            default: ""
        },



        payment_method_type: [],
        payment_status: {
            type: String,
            default: ""
        }

    },
    shipping_options: [],
    totalAmount: {
        type: Number,
        default: 0
    },


}, {
    timestamps: true
})

const orderModel = mongoose.model('order', orderSchema)

module.exports = orderModel