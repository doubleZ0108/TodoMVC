const dbltouch_interval = 500;  //双击的判定间隔

function initTodoStyle(){
    /* safari不响应hover */
    Array.from($all('.todo-group')).forEach(function(elem) {  
        let touchStartTimer, touchEndTimer;

        /* for rotation */
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
                console.log("simulate double touch on iPhone...");
                //TODO 动态修改
                click_counter = 0;
            }
       });
       elem.addEventListener("touchend", function(){
            touchEndTimer = new Date();
            let deltaTime = touchEndTimer.getTime() - touchStartTimer.getTime();
            if(deltaTime > 500){
                //TODO delete this todo
                console.log("删除");
            }
       });

    });
}