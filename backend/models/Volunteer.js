const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const volunteerSchema = new Schema({
    summary: String,
    poverty: Boolean,
    humanRigths: Boolean,
    health: Boolean,
    education: Boolean,
    climateChange: Boolean,
    animals: Boolean,
    
    locations: [String],
    facebookId:String,
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
        default: 'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Person-icon.png'
    },
    cover: {
        type: String,
        default: 'https://images.britcdn.com/wp-content/uploads/2015/06/MakeYOurMark_desktop.jpg?w=1000&auto=format'
    },
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