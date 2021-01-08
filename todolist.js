const txt = document.querySelector('.txt')
const list = document.querySelector('.list');
let todolist = [];

function addToList(){
    if(txt.value.trim() != ""){
        todolist.push(txt.value.trim());
        if(localStorage.getItem('todolist') === null){
            localStorage.setItem('todolist', JSON.stringify(todolist));
        }else{
            localStorage.setItem('todolist', JSON.stringify(todolist));
        }
        displayList();
    }
}
window.onload = function(){
    if(JSON.parse(localStorage.getItem('todolist')) != null){
        todolist = JSON.parse(localStorage.getItem('todolist'));
        displayList();
    }
}

function displayList(){
    list.innerHTML = "";
    for (let i = 0; i < todolist.length; i++) {
        list.innerHTML += "<center><div class='todolist'>" + todolist[i] +
                          "<i class='fa fa-check fa-lg' onclick='done("+i+")'></i><i class='fa fa-trash fa-lg' onclick='remove("+i+")'></i>"
    }
}

function remove(i){
    todolist.splice(i, 1);
    if(localStorage.getItem('todolist') === null){
        localStorage.setItem('todolist', JSON.stringify(todolist));
    }else{
        localStorage.setItem('todolist', JSON.stringify(todolist));
    }
    displayList();
}
function done(i){
    if(todolist[i].includes('<strike>')){
        todolist[i] = todolist[i].replace('<strike>', '');
        todolist[i] = todolist[i].replace('</strike>', '');
    }else{
        todolist[i] = '<strike>' + todolist[i] + '<strike>';
    }
    if(localStorage.getItem('todolist') === null){
        localStorage.setItem('todolist', JSON.stringify(todolist));
    }else{
        localStorage.setItem('todolist', JSON.stringify(todolist));
    }
    displayList();
}