const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    breed: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    age: {
        type: Number,
        min: 0,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

// Schema.statics.[funcName] = ([paramOptional]) => {}
// this is assigning a function to a schema, in this case we are
// assigning our DogSchema a function called sayName, which
// prints the DogSchema's name to the console
DogSchema.statics.sayName = (dog) => {
    console.log(dog.name);
};

DogSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };
    
    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;