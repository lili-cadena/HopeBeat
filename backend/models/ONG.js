const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ongSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:"Volunteer"
    },
    poverty: Boolean,
    humanRigths: Boolean,
    health: Boolean,
    education: Boolean,
    climateChange: Boolean,
    animals: Boolean,

    summary: String,
    name: {
        type: String,
    },
    summary:{
        type: String,
    },
    location:{
        type: String,
    },
    photoURL: {
        type: String,
        default: 'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Person-icon.png'
    },
    cover: {
        type: String,
        default: 'https://images.britcdn.com/wp-content/uploads/2015/06/MakeYOurMark_desktop.jpg?w=1000&auto=format'
    },
    telephone:Number,
    webSite:String,
    events:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Event',
        },
    ],
    jobs:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Job',
        }
    ],
    followers:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Volunteer',
            childPath: 'following'
        },
    ],
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('ONG', ongSchema);