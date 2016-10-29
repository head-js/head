@head.js/load
==

`head.load.async`: 下载远端 js，css 文件，异步执行，适用于对执行顺序不重要的 js 文件

```javascript
head.load.async(['xxxx.css', 'yyyy.js']);
```

`head.load`: 下载远端 js，css 文件，同步执行，适用于对执行顺序有要求的 js 文件

```javascript
head.load(['xxxx.css', 'yyyy.js', 'zzzz.js']);
```

支持回调函数，在资源下载完以后，会执行回调函数

```javascript
head.load(['xxxx.css', 'yyyy.js', 'zzzz.js'], function () {
     console.log('finish downloading');
});
```

forked from [Tiny-Loader.js](https://github.com/youzan/tiny-loader.js)
==

A small loader that load CSS/JS in best way for page performance

