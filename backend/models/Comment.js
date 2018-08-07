const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
    },
    volunteer: {
        type: Schema.Types.ObjectId,
        ref: 'Volunteer'
    },
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Comment', commentSchema);