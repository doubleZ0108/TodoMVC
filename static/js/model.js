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

            /* 通过innerHTML方式会让监听器失效 */
            // todoList.innerHTML = [
            //     '<div class="todo-group" id="todo-' + id + '">\n' +
            //     '   <div class="todo-shadow"></div>\n' +
            //     '       <div class="todo-paper" style="transform: rotate(' + randRotation + 'deg);">\n' +
            //     '            <div class="todo-paper-bg">\n' +
            //     '            </div>\n' +
            //     '       </div>\n' +
            //     '   <div class="cover-content-container">\n' +
            //     '       <div class="cover-content">\n' +
            //     '            <p id="todo-text-' + id + '" class="todo-text" style="transform: rotate(' + randRotation + 'deg);">' + todo.content + '</p>\n' +
            //     '       </div>\n' +
            //     '    </div>\n' +
            //     ' </div>'
            // ].join("") + todoList.innerHTML;
            // if(todo.completed){
            //     $('todo-text-'+id).classList.add('completed');
            // }
            // (function(id, todoIndex){
            //     initTodo($('todo-'+id), todoIndex);
            // })(id, todoIndex);

            let todoGroup = $c('div');
            todoGroup.classList.add('todo-group');
            todoGroup.setAttribute('id', "todo-" + id);
            let todoShadow = $c('div');
            todoShadow.classList.add('todo-shadow');
            let todoPaper = $c('div');
            todoPaper.classList.add('todo-paper');
            setStyle(todoPaper, {
                transform: "rotate(" + randRotation + "deg)"
            });
            let todoPaperBg = $c('div');
            todoPaperBg.classList.add('todo-paper-bg');
            todoPaper.appendChild(todoPaperBg);

            let coverContentContainer = $c('div');
            coverContentContainer.classList.add('cover-content-container');
            let coverContent = $c('div');
            coverContent.classList.add('cover-content');
            let textP = $c('p');
            textP.setAttribute('id', "todo-text-" + id);
            textP.classList.add("todo-text");
            if(todo.completed){
                textP.classList.add('completed');
            }
            setStyle(textP, {
                transform: "rotate(" + randRotation + "deg)"
            });
            textP.innerHTML = todo.content;
            coverContent.appendChild(textP);
            coverContentContainer.appendChild(coverContent);

            todoGroup.appendChild(todoShadow);
            todoGroup.appendChild(todoPaper);
            todoGroup.appendChild(coverContentContainer);

            // 绑定监听器
            initTodo(todoGroup, todoIndex);

            todoList.insertBefore(todoGroup, todoList.firstElementChild);
        }
    });
}

function flush() {
    console.log("flush");
}