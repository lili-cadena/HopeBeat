const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:"Volunteer"
    },
    description: String,
    position: {
        type: String,
    },
    ong: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    finalDate: Date,
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Experience', experienceSchema);