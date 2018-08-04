const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const volunteerSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    photoURL: {
        type: String,
        default: ''
    },
    cover: {
        type: String,
        default: ''
    },
    summary: String,
    causes: [
        {
            type: String,
            // required:true
        }
    ],
    locations: [String],
    ongs:[
        {
            type: Schema.Types.ObjectId,
            ref: 'ONG',
        }
    ],
    experiences:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Experience',
        }
    ],
    following:[
        {
            type: Schema.Types.ObjectId,
            ref: 'ONG'
        }
    ],
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

volunteerSchema.plugin(passportLocalMongoose, {usernameField:'email'});
module.exports = mongoose.model('Volunteer', volunteerSchema);