module.exports = {
    muptipMongoose: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    Mongoose: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}