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

    }
}

function initModel(){
    let data = model.data;

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

        // model.flush();      // 写入存储
        Update();

    } else {
        alert("Todo cannot be empty😇");
    }
}

function Update() {
    console.log("update");
}