const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteeringPositionSchema = new Schema({
    seniorityLevel: String,
    weeklyRequiredHours: Number, 
    position: {
        type: String,
        required:true
    },
    ongOwner: {
        type: Schema.Types.ObjectId,
        ref: 'ONG'
    },
    location: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    requests:[
        {
            type: String,
            required:true
        }
    ],
    applicants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Vounteer'
        }
    ]
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('VolunteeringPosition', volunteeringPositionSchema);