# throwInH5

爱音乐互拓投流H5项目

### node.js版本：18.16.1，[vue](https://cn.vuejs.org/guide/introduction.html)版本：3.3，ui库：[vant4.0](https://vant-contrib.gitee.io/vant/#/zh-CN), 打包工具：[vite](https://vitejs.dev/config/)

### vantUi使用注意点，有四个函数式组件需要在使用时引用，其余为全局引入

- import { showToast } from 'vant';
- import { showDialog  } from 'vant';
- import { showNotify } from 'vant';
- import { showImagePreview } from 'vant';

## 项目常用命令

```sh
npm install
```

### 开发环境启动

```sh
npm run dev
```

### 正式环境打包

```sh
npm run build
```
### 测试环境打包

```sh
npm run build:staging
```
### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
