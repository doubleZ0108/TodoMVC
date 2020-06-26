# TodoMVC

🌐[Zhe ZHANG's TodoMVC](http://server.doublez.site:5000/TodoMVC)

📦[Zhe ZHANG's TodoMVC]()

[toc]

------

## 背景介绍

[TodoMVC](http://todomvc.com/) 是一个开源项目，实现了一个 Todo Application，广泛用于 `MV*` 框架的选择

- **功能**，对应数据库表中记录的增删查改操作（CRUD），TodoMVC 功能是完备的，同时还有表单编辑（edit）功能，过滤（filter）功能等。
- **扩展**，TodoMVC 本身没有实现网络，本地数据存储，路由等功能，教学过程中可以很方便地扩展这些功能，让学生对所学功能有一个更全面的认识；这个过程很有趣，因为你在通过所学知识逐渐让 TodoMVC 变得更加实用。
- **实用**，大量框架和语言实现了 TodoMVC，这带来了一个额外的优势: 一旦熟悉了 TodoMVC，今后熟悉一门新框架（或语言、工具）的成本就更低了，而且不同语言的异同点也会更加直观。

<br/>

## 功能介绍

**基础功能**

- [x] 新增todo
- [x] 删除todo
- [x] 展现todo列表
- [x] 全部完成/未完成
- [x] 删除已完成
- [x] 保存页面状态，刷新页面后可恢复

**高级功能**

- [x] 过滤 (All / Active / Completed)
- [x] 双击编辑单条todo

**创意交互**

- [x] 适配系统主题 (浅色 / 深色)
- [x] 适配手机横竖屏
- [x] 字体大小自适应
- [x] 便利贴特效
  - [x] 长按删除
  - [x] 左滑 / 右滑删除
- [x] 浮动小工具球
  - [x] 拖动自定义位置
  - [x] 左右翻转
  - [x] 单击展开小工具
  - [x] 长按弹出添加todo输入框
- [x] 聚光灯特效
- [x] 波浪特效

<br/>

## 功能展示

便利贴展示todo；全部完成；删除已完成；长按完成；小工具过滤器

<img src="https://upload-images.jianshu.io/upload_images/12014150-9e3833384f3ecda5.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="IMG_3675" width="33%;" /><img src="https://upload-images.jianshu.io/upload_images/12014150-c9b2ae75a3961e9b.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="IMG_3676" width="33%;" />

浮动球全屏移动；左侧翻转；左滑/右滑todo删除

<img src="https://upload-images.jianshu.io/upload_images/12014150-89da8e4fe3929d2f.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="IMG_3683" width="33%;" /><img src="https://upload-images.jianshu.io/upload_images/12014150-32fe829625e51ba4.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="IMG_3680" width="33%;" />

双击todo进行编辑

<img src="https://upload-images.jianshu.io/upload_images/12014150-6dcf34b47e543a6b.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="IMG_3682" width="33%;" /><img src="https://upload-images.jianshu.io/upload_images/12014150-35e01f9866d65d93.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="IMG_3681" width="33%;" />

长按添加一条todo

<img src="https://upload-images.jianshu.io/upload_images/12014150-3671f4f07fa3a44c.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="IMG_3679" width="33%;" /><img src="https://upload-images.jianshu.io/upload_images/12014150-7b34ae2486ba922f.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="IMG_3677" width="33%;" />

横屏适配

<img src="https://upload-images.jianshu.io/upload_images/12014150-0f7ad09027bec78d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200626222240953" width="50%;" width="80%;" />

<br/>

## 核心实现

### 系统主题自适应



### 字体大小自适应



### 浮动小工具



### safari浏览器优化

<br/>

## 开发环境

- **操作系统**
  - **开发环境**：macOS Catalina 10.15.4
  - **部署环境**：Ubuntu 16.04.6 LTS
- **测试环境**: 
  - Safari on iPhone11
  - Chrome Device Simulator
- **IDE**：Visual Studio Code 1.45.1
- **开发语言**
  - HTML5
  - CSS3
  - JavaScript

<br/>

## 关于作者

| Item            | VALUE                                               |
| --------------- | --------------------------------------------------- |
| **Name**        | 张喆                                                |
| **ID**          | 1754060                                             |
| **Adviser**     | 徐凯老师(阿里巴巴) 梁爽老师                         |
| **Course Name** | Web系统与技术                                       |
| **Course Time** | 星期五 2-4 [1-8]<br/>星期六 3-6 [11-17]             |
| **Email**       | [dbzdbz@tongji.edu.cn](mailto:dbzdbz.tongji.edu.cn) |

<br/>

## 项目结构

```
.
├── README.md
├── TodoMVC.html
└── static
    ├── css
    │   ├── TodoMVC.css
    │   ├── button.css
    │   ├── footer.css
    │   ├── header.css
    │   ├── popup.css
    │   └── todo.css
    ├── img
    │   ├── dark-bg.jpg
    │   └── light-bg.jpg
    └── js
        ├── TodoMVC.js
        ├── button.js
        ├── model.js
        ├── popup.js
        ├── storage.js
        ├── todo.js
        └── util.js

4 directories, 17 files
```

