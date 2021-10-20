const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const Samsung = new Schema({
    name: { type: String },
    price: { type: String },
    image: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Samsung', Samsung);