const mongoose = require ('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
}, {timestamps : true});

const Task = mongoose.model('TASK', taskSchema);

module.exports= Task;
