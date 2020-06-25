//禁用右键菜单
document.oncontextmenu = function(){
    event.returnValue = false;
}

var supportsVibrate = "vibrate" in navigator;

window.onload = function(){
    // for mobile safari infobar
    $('bg').style.height = deviceHeight + "px";

    initBtnGroup();

    initTodoStyle();

    initPopUp();
};
