const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    position: {
        type: String,
        required:true
    },
    ong: {
        type: String,
        required:true
    },
    logo: {
        type: String,
        default: ''
    },
    startDate: {
        type: Date,
        required:true
    },
    finalDate: Date,
    duration: Number,
    description: String,
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Experience', experienceSchema);