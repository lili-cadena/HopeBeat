const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ongSchema = new Schema({
    summary: String,
    location: String,
    active: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required:true
    },
    causes: {
        type: String,
        default: false
    },
    photoURL: {
        type: String,
        default: ''
    },
    cover: {
        type: String,
        default: ''
    },
    owner:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Volunteer',
        }
    ],
    events:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Event',
        },
    ],
    volunteeringPositions:[
        {
            type: Schema.Types.ObjectId,
            ref: 'VolunteeringPosition',
        }
    ],
    posts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
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