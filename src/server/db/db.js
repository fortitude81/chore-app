var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/todos');
//mongoose.connect('mongodb://jb:123@ds021000.mlab.com:21000/choreapp');
var Todo = mongoose.model('Todo', {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean,
    ownerUserID: String,
    assignUserID: String
});

var User = mongoose.model('User', {
	userName: {
        type: String,
        required: true
    },
	passWord: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

module.exports.Todo = Todo;
module.exports.User = User;
