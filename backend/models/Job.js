const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    position: {
        type: String,
        required:true
    },
    weeklyRequiredHours: {
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

module.exports = mongoose.model('Job', jobSchema);