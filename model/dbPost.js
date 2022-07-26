const mongoose = require('mongoose');


const postModel = mongoose.model(
"dbtest", 
{
    author: {
        type: String, 
        required: true
    },
    number: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date, 
        default: Date.now
    }
}, 
"posted"


)

module.exports = {postModel};