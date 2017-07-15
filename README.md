# react-antd-Scaffolding

采用react, antd, webpack, mocha, 快速启动react项目脚手架。

已解决问题：

1. 通过common/RetinaImage.jsx组件解决根据不同dpr加载不同分辨率图片的问题。
2. 打包后文件出现apply is undefined的问题,为题出现再store.jsx createStore方法, compose.js中，具体解决方法见config/store.jsx
3. 增加了express服务器框架，可以模拟测试页面再生产环境下的状态。(再启动sever之前，请确保dist文件已打包)
4. 增加了auto-prefixer可以为css自动添加前缀。
5. 增加了rem.less和postcss-loader，用于自动对less文件中的px单位，自动转换为rem单位。
6. 增加了代码分离分离方案，减少入口文件打包大小，动态加载展示组件，用bundle.js生成一个可以动态加载的Component,结合bundle-loader使用。
7. 修复了manifest中的运行时代码无法内联插入到html中的问题,修复了打包文件无法实现动态加载的问题。
8. 修复了代码分离的时候，加载组件丢失路由信息的问题，解决方法时用withRouter组件将redux-container组件包装一次，再做动态加载。要求被包装的组件必须时一个container组件，而不是一个dump组件。所以再写页面的时候，必须将每个页面当作一个container组件来看待。

待解决问题：

1. mock数据测试(在webpack-dev-server配置中，添加proxy选项，具体看webpack api, 开发时再具体解决。)
2. 跨域调用代理
3. 持续集成
4. 服务器代码部署
5. 测试覆盖率
6. webpack和gulp相结合的前端自动化流程。
