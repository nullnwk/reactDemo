import React from "react";

// 自动加载 global 目录下的 .js 结尾的文件
const componentsContext = require.context("./global", true, /\.js$/);




console.log(componentsContext, 'componentsContext');


componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component);
  // 兼容 import export 和 require module.export 两种规范
  const ctrl = componentConfig.default || componentConfig;
  React.component(ctrl.name, ctrl);
});
