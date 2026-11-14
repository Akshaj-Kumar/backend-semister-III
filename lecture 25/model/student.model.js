const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    section: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true,
        enum: ["BCA", "Btech", "MCA", "Mtech"]
    },

    semester: {
        type: Number,
        required: true,
        min: 1
    },

    marks: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },

    contact: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },

    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("student", studentSchema);