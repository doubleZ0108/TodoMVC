window.onload = function(){
    // for mobile safari infobar
    $('bg').style.height = deviceHeight + "px";

    initBtnGroup();
};

function initBtnGroup(){
    let btnGroup = $('btn-group');

    let oldTouch;
    btnGroupTouchHandler = {
        click: function(){
            console.log("click");
        },
        start: function(event){
            event.preventDefault();
            $('ButtonGroup-click').checked = !$('ButtonGroup-click').checked;
            oldTouch = event.touches[0];
        },
        move: function(event){
            event.preventDefault();

            $('ButtonGroup-click').checked = false;

            let freshTouch = event.touches[0];

            let deltaRight = oldTouch.clientX - freshTouch.clientX;
            let deltaBottom = oldTouch.clientY - freshTouch.clientY;
            let right = parseFloat(btnGroup.style.right || 0) + deltaRight;
            let bottom = parseFloat(btnGroup.style.bottom || 0) + deltaBottom;

            if(right < deviceWidth - 60 && right > 0
                && bottom < deviceHeight - 200 && bottom > 0){
                setStyle(btnGroup, {
                    right: right + "px",
                    bottom: bottom + "px"
                });
            }

            // 浮动球移动到了左边
            if(right > (deviceWidth - 60) / 2){
                // btnGroup.style.transform = "translateY(-30px) rotateY(180deg)";
                setStyle(btnGroup, {
                    transform: "translateY(-30px) rotateY(180deg)"
                });
                Array.from($all('.ButtonGroup a i')).forEach(function(elem){
                    elem.style.transform = "rotateY(180deg)";
                });
            } else {
                btnGroup.style.transform = "translateY(-30px)";
                Array.from($all('.ButtonGroup a i')).forEach(function(elem){
                    elem.style.transform = "none";
                });
            }
            
            oldTouch = freshTouch;
        },
        end: function(event){
            event.preventDefault();
            console.log($('ButtonGroup-click').checked);
        },
        cancel: function(event){
            event.preventDefault();
        }
    };

    btnGroup.addEventListener("click", btnGroupTouchHandler.click);
    btnGroup.addEventListener("touchstart", btnGroupTouchHandler.start);
    btnGroup.addEventListener("touchmove", btnGroupTouchHandler.move);
    btnGroup.addEventListener("touchend", btnGroupTouchHandler.end);
    btnGroup.addEventListener("touchcancel", btnGroupTouchHandler.cancel);
}