const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:"ONG"
    },
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
    cover: {
        type: String,
        default: 'https://i.pinimg.com/564x/c4/8b/b2/c48bb2ea7a089f5d0b504b9045485670.jpg'
    },
    photo: {
        type: String,
        default: 'https://www.uccmpolice.com/wp-content/uploads/2017/08/Events-icons.png'
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