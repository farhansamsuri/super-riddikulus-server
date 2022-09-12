const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        //_id of type ObjectId is automatically generated by Mongoose
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true, 
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        gender: {
            type: String,
        },
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model('User', UserSchema)