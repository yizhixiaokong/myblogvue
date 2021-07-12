npm run build
rm -r ./dist
cp -r ../dist ./
docker build -t registry.cn-hangzhou.aliyuncs.com/yizhixiaokong/myblogvue:v1.3.4 ./
docker push registry.cn-hangzhou.aliyuncs.com/yizhixiaokong/myblogvue:v1.3.4