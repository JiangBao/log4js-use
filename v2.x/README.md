# log4js v2.x usage
参考[官方文档](https://nomiddlename.github.io/log4js-node/)

与`v1.x`的一些区别：  
1. 配置文件要将之前的`appenders`拆分成`appenders`与`categories`  
2. 将`console`也输出为log，之前只需要配置`"replaceConsole": true`即可，现在需要这样：
  ```js
  const logger = log4js.getLogger('console');       
  
  console.log = logger.info.bind(logger);
  ```

具体区别见[文档](https://nomiddlename.github.io/log4js-node/migration-guide.html)