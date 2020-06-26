function initPopUp(){
    Array.from($all(".rubber-band")).forEach(function(btn, index){
        btn.addEventListener("click", function(){
            this.style.animation = "rubberBandAnimation 1s"; 
            setTimeout(function () {
                btn.style.animation = "none";
            }, 1000);

            if(index === 1){
                addTodo();
            }
            hidePopUp();
        }, false);
    });

    $('todo-input').addEventListener('keyup', function(){
        if (event.keyCode != 13){
            return;
        }
        addTodo();
        hidePopUp();
    }, false);

    hidePopUp();
}

function showPopUp(){
    setStyle($("popup-box"), {
        opacity: "1",
        zIndex: "999",
    });
    
    $('todo-input').disabled = false;
    Array.from($all('.InputBtnGroup .rubber-band')).forEach(elem => {
        elem.disabled = false;
    });

    $('todo-input').focus();
}

function hidePopUp(){
    setStyle($("popup-box"), {
        opacity: "0",
        zIndex: "-100",
    });

    $('todo-input').disabled = true;
    Array.from($all('.InputBtnGroup .rubber-band')).forEach(elem => {
        elem.disabled = true;
    });
}