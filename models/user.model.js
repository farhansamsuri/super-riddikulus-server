const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        //_id of type ObjectId is automatically generated by Mongoose
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        createdAt: Date,
        updatedAt: Date
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model("User", UserSchema)