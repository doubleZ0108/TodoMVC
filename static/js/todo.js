const dbltouch_interval = 800; //双击的判定间隔
const tolerateVerticalOffset = 5; // 最大容忍的上下移动距离（希望用户左右滑动）

function initTodo(elem, index) {
    let touchStartTimer, touchEndTimer;

    /* for rotation */
    /* safari不响应hover */
    elem.addEventListener("touchstart", function () {

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
    elem.addEventListener("touchend", function () {
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
    /* double click & long touch to complete */
    elem.addEventListener("touchstart", function () {
        touchStartTimer = new Date();
        click_counter++;
        setTimeout(function () {
            click_counter = 0;
        }, dbltouch_interval);
        if (click_counter > 1) {
            console.log("simulate double touch on mobile...");
            //TODO 动态修改
            click_counter = 0;

            if (!model.data.todos[index].completed) {
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

                todoEdit.addEventListener("blur", function () {
                    if (todoEdit.value !== "") {
                        todoText.innerHTML = todoEdit.value;
                        model.data.todos[index].content = todoEdit.value;
                        flush();
                    } else {
                        alert("Todo cannot be empty😇");
                    }
                    todoContent.removeChild(todoEdit);
                    todoText.style.display = "";
                }, false);

                todoEdit.addEventListener("keyup", function (event) {
                    if (event.keyCode != 13) {
                        return;
                    }
                    todoEdit.blur();
                }, false);

                todoContent.appendChild(todoEdit);
            }

        }
    });
    elem.addEventListener("touchend", function () {
        touchEndTimer = new Date();
        let deltaTime = touchEndTimer.getTime() - touchStartTimer.getTime();
        if (deltaTime > 500) {
            //TODO complete this todo
            model.data.todos[index].completed = !model.data.todos[index].completed;
            update();
        }
    });


    /* swipe to delete */
    let oldTouch, touchObj;
    let isDelete = false;
    elem.addEventListener('touchstart', function (event) {
        oldTouch = event.touches[0];
        touchObj = event.currentTarget;
        isDelete = false;
    }, false);
    elem.addEventListener('touchmove', function (event) {
        let freshTouch = event.touches[0];
        let verticalOffset = freshTouch.clientY - oldTouch.clientY;

        // 左右滑动
        if (Math.abs(verticalOffset) < tolerateVerticalOffset) {
            var horizontalOffset = freshTouch.clientX - oldTouch.clientX;
            touchObj.style.transition = ".2s linear";
            if (Math.abs(horizontalOffset) < deviceWidth / 3) { //移动距离过短 不判定为删除
                touchObj.style.left = horizontalOffset + 'px';
            } else {
                if (horizontalOffset < 0) { // 左滑
                    touchObj.style.left = -deviceWidth * 2 + 'px';
                } else { // 右滑
                    touchObj.style.left = deviceWidth * 2 + 'px';
                }
                isDelete = true;
            }
        }
    }, false);
    elem.addEventListener('touchend', function (event) {
        if (isDelete && elem != null) {
            elem.parentNode.removeChild(elem);
            model.data.todos.splice(index, 1);
            console.log(model.data.todos);
            update();
            flush();
        } else {
            touchObj.style.left = 0;
        }
    }, false);
}