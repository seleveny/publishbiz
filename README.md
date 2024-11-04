# 部署流程

### 拷贝publishbiz文件夹到linux服务器 
#### 排除掉node_modules、dist文件夹

1. 进入publishbiz目录并安装依赖
```shell
npm install
```
2. 拷贝项目文件到服务器路径
```shell
npm run build
cp -R dist/* /www/wwwroot/shutong/
cp package.json /www/wwwroot/shutong/
cp vite.config.ts /www/wwwroot/shutong/
```
3. 启动服务
```shell
npm run dev
```
