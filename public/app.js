$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function(err){
        alert(err);
    })
});

function addTodos(todos){
    //add todos to page here
    todos.forEach(function(todo){
        console.log(todo.name)
        var newTodo = $('<li class="task">'+todo.name+'</li>')
        $('.list').append(newTodo);
    })
}