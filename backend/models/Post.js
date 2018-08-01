const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    content:[
        {
            type: String,
            required:true
        }
    ],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Volunteer'
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

module.exports = mongoose.model('Post', postSchema);