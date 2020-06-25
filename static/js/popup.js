function initPopUp(){
    Array.from($all(".rubber-band")).forEach(function(btn, index){
        btn.addEventListener("click", function(){
            this.style.animation = "rubberBandAnimation 1s"; 
            setTimeout(function () {
                btn.style.animation = "none";
            }, 1000);

            if(index === 1){
                let todoInput = $('todo-input')
                let inputText = todoInput.value;
                if(inputText != ""){
                    //TODO 添加todo
                    todoInput.value = "";
                    console.log("add todo ");
                }
            }
            hidePopUp();
        });
    });
}

function showPopUp(){
    setStyle($("popup-box"), {
        opacity: "1",
        zIndex: "999",
    });
}

function hidePopUp(){
    setStyle($("popup-box"), {
        opacity: "0",
        zIndex: "-1",
    });
}