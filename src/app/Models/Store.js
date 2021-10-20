const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');


const Store = new Schema({
    name: { type: String },
    price: { type: String },
    image: { type: String },
    priceold: { type: String },
    imageinside1: { type: String },
    imageinside2: { type: String },
    imageinside3: { type: String },
    slug: { type: String, slug: 'name' },

}, {
    timestamps: true,
});
// set slug theo name 
mongoose.plugin(slug);




module.exports = mongoose.model('Store', Store);