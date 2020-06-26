//禁用右键菜单
document.oncontextmenu = function(){
    event.returnValue = false;
}

window.onload = function(){
    // for mobile safari infobar
    $('bg').style.height = deviceHeight + "px";

    model.init(function(){
        initModel();
    });

    initBtnGroup();

    initPopUp();

    initFilter();

    initTool();
};
