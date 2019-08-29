function addTodo() {
    console.log("called add todo !!");
    
    var li = document.createElement("li");
    var taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'task');

    var cb=document.createElement("input");
    cb.setAttribute('type','checkbox');
    taskDiv.append(cb);

    var inputValue = document.getElementById("newTodo").value;
    var t = document.createTextNode(inputValue);
    taskDiv.appendChild(t);

    var EditButton = document.createElement("button");
    EditButton.setAttribute('class', "EditBtn");
    EditButton.setAttribute('type', "Button");
    EditButton.append(document.createTextNode('Edit'));
    taskDiv.append(EditButton);

    var DeleteButton = document.createElement("button");
    DeleteButton.setAttribute('class', "DeleteBtn");
    DeleteButton.setAttribute('type', "Button");
    DeleteButton.append(document.createTextNode('Delete'))
    taskDiv.append(DeleteButton);

    li.append(taskDiv);

    document.getElementById("todoUL").appendChild(li);
    document.getElementById("newTodo").value = "";

}

function editTodo() {

}

function deleteTodo() {

}

function deleteMultipleTodo() {

}

function markAsDone(){

}

function markMultipleAsDone(){
    
}