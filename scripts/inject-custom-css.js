'use strict';

// toybox 主题没有自定义 CSS 注入入口，把站点级 custom.css 挂到每页 </head> 前。
// 源文件在 source/css/custom.css，构建后位于 /css/custom.css。
hexo.extend.filter.register('after_render:html', function (str) {
  if (!str || str.indexOf('</head>') === -1) return str;
  const href = (hexo.config.root || '/') + 'css/custom.css';
  return str.replace('</head>', '<link rel="stylesheet" href="' + href + '">\n</head>');
});
