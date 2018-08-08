const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:"ONG"
    },
    position: {
        type: String,
    },
    weeklyRequiredHours: {
        type: Number,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    requests: {
        type: String,
    },
    ong:{
        type: String,
    },
    applicants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Volunteer',
        }
    ]
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Job', jobSchema);