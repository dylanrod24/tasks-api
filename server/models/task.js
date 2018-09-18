var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: String,
    description: {type: String, default: null},
    completed: {type: Boolean, default: false}
}, {timestamps: true});
mongoose.model('Task', taskSchema); // I am setting this schema in my models as 'Task'
