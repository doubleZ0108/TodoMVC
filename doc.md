

## 系统主题自适应

```css
/* default */
.back {background: white; color:  #555;text-align: center}	

/* dark */
@media (prefers-color-scheme: dark) {
  .back {background:  #333; color: white;}
  .models {border:solid 1px #00ff00}
}

/* light */
@media (prefers-color-scheme: light) {
  .back {background: white; color:  #555;}
  .models {border:solid 1px #2b85e4}
}
```

- light
    - 黑: #555
- dark
    - 黑: #333



## 字体大小自适应

开始时想用vh，vw

“viewpoint” = window size

15vw = 15% 设置width（可以理解为宽度单位）
15vh = 15% 设置height（可以理解高度单位）



但兼容性并不太好，该用根节点设置px，其余用rem，用@media调整根节点即可



## Safari浏览器顶部工具条

会影响屏幕的screen.height，设置100vh也会变化，出现抖动

因此用js设定为innerHTML



## 浮动按钮

js无法获取style中的top等位置，所以迫不得已置为0

 样式必须直接写在元素内部才能通过div.style.left直接获取属性值（也就是必须是内联样式才行），定义在css中的样式不能通过这种方式获取。

行内css + html内script



在父节点上增加perspective，否则在safari浏览器上无法使用rotateY属性，会直接不显示

```css
.float-btns {
    transform: perspective(400);
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;
}
```



## todo li

safari不响应:hover，使用touchstart, touchend进行替代