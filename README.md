# react-antd-Scaffolding

采用react, antd, webpack, mocha, 快速启动react项目脚手架。

已解决问题：

1. 通过common/RetinaImage.jsx组件解决根据不同dpr加载不同分辨率图片的问题。
2. 打包后文件出现apply is undefined的问题,为题出现再store.jsx createStore方法, compose.js中，具体解决方法见config/store.jsx

待解决问题：

1. mock数据测试(在webpack-dev-server配置中，添加proxy选项，具体看webpack api, 开发时再具体解决。)
2. 跨域调用代理
3. 持续集成
4. 服务器代码部署
5. 测试覆盖率
6. webpack和gulp相结合的前端自动化流程
7. 本地打开打包文件出现 ：Uncaught DOMException: Failed to execute 'pushState' on 'History': A history state object with URL 'file:///D:/World' cannot be created in a document with origin 'null' and URL 'file:///D:/react-antd-Scaffolding/dist/index.html'. 的问题。提示origin 为null，尝试搭建express服务器取测试。
