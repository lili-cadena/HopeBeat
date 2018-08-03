const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ongSchema = new Schema({
    active: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required:true
    },
    causes: [
        {
            type: String,
            required:true
        }
    ],
    summary:{
        type: String,
        required:true
    },
    location:{
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
    telephones:[Number],
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