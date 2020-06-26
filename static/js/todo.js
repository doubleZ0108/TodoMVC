const dbltouch_interval = 800;  //双击的判定间隔

function initTodo(elem, index){
    let touchStartTimer, touchEndTimer;

    /* for rotation */
    /* safari不响应hover */
   elem.addEventListener("touchstart", function(){
        setStyle(this.firstElementChild, {
            transform: "rotateX(86deg)",
        });

        setStyle(this.firstElementChild.nextElementSibling.firstElementChild, {
            transform: "rotateX(var(--rotate-deg)) translate3d(0, 0, 0)"
        });

        setStyle(this.lastElementChild.firstElementChild, {
            transform: "rotateX(var(--rotate-deg)) translate3d(0, 0, 0)"
        });
   });
   elem.addEventListener("touchend", function(){
        setStyle(this.firstElementChild, {
            transform: "none",
        });

        setStyle(this.firstElementChild.nextElementSibling.firstElementChild, {
            transform: "none"
        });

        setStyle(this.lastElementChild.firstElementChild, {
            transform: "none"
        });
   });

   var click_counter = 0;
   /* for functions */
   elem.addEventListener("touchstart", function(){
        touchStartTimer = new Date();
        click_counter++;
        setTimeout(function () {
            click_counter = 0;
        }, dbltouch_interval);
        if (click_counter > 1) {
            console.log("simulate double touch on mobile...");
            //TODO 动态修改
            click_counter = 0;

            if(!model.data.todos[index].completed) {
                let todoContent = elem.lastElementChild.firstElementChild;
                let todoText = todoContent.firstElementChild;
                let currentText = todoText.innerHTML;
                let currentRotation = todoText.style.transform;
                console.log(currentRotation);
                todoText.style.display = "none";

                let todoEdit = $c('input');
                todoEdit.setAttribute("type", "text");
                todoEdit.value = currentText;
                todoEdit.classList.add("editing");
                todoEdit.style.transform = currentRotation;
                todoEdit.focus();

                todoEdit.addEventListener("blur", function(){
                    if(todoEdit.value !== ""){
                        todoText.innerHTML = todoEdit.value;
                        model.data.todos[index].content = todoEdit.value;
                        flush();
                    } else {
                        alert("Todo cannot be empty😇");
                    }
                    todoContent.removeChild(todoEdit);
                    todoText.style.display = "";
                }, false);

                todoEdit.addEventListener("keyup", function(event){
                    if(event.keyCode != 13){
                        return;
                    }
                    todoEdit.blur();
                }, false);

                todoContent.appendChild(todoEdit);
            }

        }
   });
   elem.addEventListener("touchend", function(){
        touchEndTimer = new Date();
        let deltaTime = touchEndTimer.getTime() - touchStartTimer.getTime();
        if(deltaTime > 500){
            //TODO complete this todo
            model.data.todos[index].completed = !model.data.todos[index].completed;
            update();
        }
   });
}