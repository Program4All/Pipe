# nwjs-vue

修复 vue-devtools 不能使用的 bug. https://github.com/vuejs/vue-devtools/issues/249

大致界面：

```
| 文件名 | 新建/保存/打开 |
-----------------------
| 组件 | 编辑区域 | 属性 |
```

编辑区域分成三个部分：

输入（文件或者写入的字符串）| 处理（对内容进行处理） | 输出 （将处理完后的数据输出到哪里）

输入部分的模块：

或者把一系列字符串当成一个文件，指定的文件，或者在指定的目录中寻找符合一系列要求的文件。

对文件进行一些处理：

对文件或者字符串进行处理。

输出模块，将得到的数据进行输出，可以直接显示出来，也可以保存起来，也可以分文件保存或者进行各种保存方式。


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
