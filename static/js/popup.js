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
}

function showPopUp(){
    setStyle($("popup-box"), {
        opacity: "1",
        zIndex: "999",
    });
    $('todo-input').focus();
}

function hidePopUp(){
    setStyle($("popup-box"), {
        opacity: "0",
        zIndex: "-1",
    });
}