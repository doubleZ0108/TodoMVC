window.model = {
    data: {
        todos: [
            /**
             * 【存储实例】
             * content: "this is a todo example"
             * time: 
             * completed: false
             */
        ],
        filter: "All",
    }
}

function initModel(){
    // 首次加载 可以添加一些特殊的逻辑
    update();
}

function addTodo(){
    let todoInput = $('todo-input')
    let inputText = todoInput.value;
    if(inputText != ""){
        //TODO 添加todo
        todoInput.value = "";

        model.data.todos.push({
            content: inputText,
            time: new Date(),
            completed: false
        });

        update();
    } else {
        alert("Todo cannot be empty😇");
    }
}

let guid = 0;

function update() {
    // model.flush();

    let activeNum = 0;
    let todoList = $('todos');
    todoList.innerHTML = '';

    model.data.todos.forEach((todo, todoIndex) => {
        if(!todo.completed){
            activeNum++;
        }

        if(model.data.filter === "All" || 
          (model.data.filter === "Active" && !todo.completed) || 
          (model.data.filter === "Completed" && todo.completed)){

            var min = -3, max = 3;
            var id = guid++;
            var randRotation = parseFloat(Math.random()*(min - max + 1) + max);
            todoList.innerHTML = [
                '<div class="todo-group" id="todo-' + id + '">\n' +
                '   <div class="todo-shadow"></div>\n' +
                '       <div class="todo-paper" style="transform: rotate(' + randRotation + 'deg);">\n' +
                '            <div class="todo-paper-bg">\n' +
                '            </div>\n' +
                '       </div>\n' +
                '   <div class="cover-content-container">\n' +
                '       <div class="cover-content">\n' +
                '            <p id="todo-text-' + id + '" class="todo-text" style="transform: rotate(' + randRotation + 'deg);">' + todo.content + '</p>\n' +
                '       </div>\n' +
                '    </div>\n' +
                ' </div>'
            ].join("") + todoList.innerHTML;

            if(todo.completed){
                $('todo-text-'+id).classList.add('completed');
            }
            initTodo($('todo-'+id), todoIndex);

        }
    });
}

function flush() {
    console.log("flush");
}