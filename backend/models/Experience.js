const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    description: String,
    position: {
        type: String,
    },
    ong: {
        type: String,
    },
    logo: {
        type: String,
        default: ''
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