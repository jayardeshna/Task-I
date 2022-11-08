const express = require('express');
const router = express.Router();
const Task = require('../models/taskSchema');


// create the new task

router.post('/create', async(req,res)=>{
    // const {task} = req.body;
    
    try {
        const task = new Task({
            task : req.body.task,
        })
        await task.save();

        res.status(201).json({message: "TASK ADDED SUCCESSFULLY"})
    } catch (error) {
        console.log("FAILED");
    }

})

// get the All Task

router.get('/', async (req, res) =>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete the task by id

router.delete('/delete/:id', async(req, res) =>{
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json("Task Deleted");
    } catch (error) {
        res.status(500).json(error);
        
    }
})


//update by id

router.put('/update/:id', async(req, res)=>{
    try {
        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true
            }
        );
        res.status(201).json(updateTask);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;