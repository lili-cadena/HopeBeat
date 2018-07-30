const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    ongOwner: {
        type: Schema.Types.ObjectId,
        ref: 'ONG'
    },
    startDate: {
        type: Date,
        required:true
    },
    finalDate: Date,
    startHour: {
        type: Number,
        required:true
    },
    finalHour: {
        type: Number,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    photo: {
        type: String,
        default: ''
    },
    attendees:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Volunteer',
        }
    ],
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Event', eventSchema);