const mongoose = require('mongoose');

const TolmanSkiffSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: [ true, "You must have an owner name." ],
        minlength: [ 3, "Your owner name must be at least 3 characters long."]
    },
    builderName: {
        type: String,
        required: [ true, "You must have a builder name." ],
        minlength: [ 3, "Your builder name must be at least 3 characters long."]
    },
    modelName: {
        type: String,
        required: [ true, "Please select a model name." ],
        enum: [ 'Standard', 'Wide Body', 'Jumbo', 'Flat Bottom' ],
    },
    startDate: {
        type: Date,
        required: [ true, "You must include a start date." ],
        min: [ '1990-01-01', "Your boat cannot have been built before January 1, 1990."],
        max: [ new Date(), "Your boat build can not start on a future date."]
    },
    finishDate: {
        type: Date,
        min: [ '1990-01-01', "Your boat cannot have been finished before January 1, 1990."],
        max: [ new Date(), "Your boat build can not finish on a future date."]
    },
    buildComplete: {
        type: Boolean,
        default: false
    },
    stockLength: {
        type: Number,
        min: [ 15, "Minimum length for a Tolman Skiff must be at least 15 feet."],
        max: [ 30, "Maximum length for a Tolman Skiff must be no longer than 30 feet." ]
    },
    customLength: {
        type: Number,
        required: [ true, "Your boat must have a custom length."],
        min: [ 15, "Minimum custom length for a Tolman Skiff must be at least 15 feet."],
        max: [ 30, "Maximum custom length for a Tolman Skiff must be no longer than 30 feet." ]
    },
    pictureUrl: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: true });

/* Note: Collection names are all lowercase and plural - based on string 'Skiff */
module.exports = mongoose.model('Skiff', TolmanSkiffSchema)