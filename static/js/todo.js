function initTodoStyle(){
    /* safari不响应hover */
    Array.from($all('.todo-group')).forEach(function(elem) {  
        let touchStartTimer, touchEndTimer;

       elem.addEventListener("touchstart", function(){
           touchStartTimer = new Date();
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
           touchEndTimer = new Date();
            let deltaTime = touchEndTimer.getTime() - touchStartTimer.getTime();
            if(deltaTime > 500){
                console.log("finish");
            }

            setStyle(this.firstElementChild, {
                transform: "none",
            });

            setStyle(this.firstElementChild.nextElementSibling.firstElementChild, {
                transform: "none"
            });

            setStyle(this.lastElementChild.firstElementChild, {
                transform: "none"
            });
       })

    });
}