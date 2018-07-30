const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    content:[
        {
            type: String,
            required:true
        }
    ],
    ongOwner: {
        type: Schema.Types.ObjectId,
        ref: 'ONG'
    },
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