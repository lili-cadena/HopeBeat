const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    finalDate: {
        type: Date,
        default: Date.now
    },
    startHour: {
        type: Number,
    },
    finalHour: {
        type: Number,
    },
    location: {
        type: String,
    },
    summary: {
        type: String,
    },
    description: {
        type: String,
    },
    photo: {
        type: String,
        default: 'https://www.uccmpolice.com/wp-content/uploads/2017/08/Events-icons.png'
    },
    ong:{
        type: Schema.Types.ObjectId,
        ref: 'ONG',
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