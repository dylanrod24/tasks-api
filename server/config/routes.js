var mongoose = require('mongoose');
var taskController = require('./../controllers/tasks.js');
Task = mongoose.model('Task');
var path = require('path');

module.exports = function(app){
    // Retrieves all tasks
    app.get('/tasks', taskController.all),
    // Retrieve a task with // id
    app.get('/tasks/:id', taskController.task),
    // Create a task
    app.post('/tasks', taskController.create),
    // Update a task with id
    app.put('/tasks/:id', taskController.update),
    // Delete a task by id
    app.delete('/tasks/:id', taskController.delete)
    app.all('*', (request, response, next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
