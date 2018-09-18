var mongoose = require('mongoose');
Task = mongoose.model('Task');

module.exports = {
    // Request to retrieve all tasks
    all: function(request, response) {
        Task.find({}, function(errors, tasks) {
            if(errors) {
                console.log("Returned error:", errors);
            }
            else {
                response.json({data: tasks});
            }
        })
    },
    // GET request to get a task with a specific ID
    task: function(request, response) {
        Task.findById({id}, function(errors, tasks) {
            if(errors) {
                console.log(errors)
            }
            else {
                response.json({data: tasks});
            }
        })
    },
    // POST request to create a task
    create: function(request, response) {
        console.log("DATA:", request.body.title, request.body.description);
        var task = new Task({title: request.body.title, description: request.body.description})
        task.save(function(errors){
            if(errors){
                response.json("Error:", errors);
            }
            else {
                console.log("successfully added");
            }
            response.redirect('/');
        })
    },
    update: function(request, response) {
        Task.findById(id, function(errors, tasks) {
            if(errors){
                console.log(errors);
            }
            else {
                tasks.title = request.body.title;
                tasks.description = request.body.description;
                tasks.save(function(errors) {
                    if(errors) {
                        console.log(errors);
                    }
                })
            }
        })
    },
    delete: function(request, response) {
        Task.findById(id, function(errors, tasks) {
            if(errors) {
                console.log(errors);
            }
            else {
                tasks.delete(function(errors) {
                    if(errors) {
                        console.log(errors);
                    }
                })
            }
        })
    }
}
