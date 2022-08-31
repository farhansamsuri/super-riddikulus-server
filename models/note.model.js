const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema(
    {
        //_id of type ObjectId is automatically generated by Mongoose
        user: {
            type: mongoose.Schema.Types.ObjectId, 
            required: true,
            ref: "User"
        },
        title: {
            type: String,
            required: true, 
            default: "No Title"
        },
        body: {
            type: String,
            required: true
        },
        createdAt: Date,
        updatedAt: Date
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Note", NoteSchema);