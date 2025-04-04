#!/bin/bash

# 创建目标目录
mkdir -p public/images/students

# 复制并重命名照片
cp public/assets/1a6afb35314a4c2d7c42a83840fbb5c5.JPG public/images/students/lijunxian.jpg
cp public/assets/0a23b4a8d464e44c10c793725f4a5c87.JPG public/images/students/shijunzhe.jpg
cp public/assets/251ec76e1if71f0454caa044ff0f2cd7.JPG public/images/students/laimuqing.jpg
cp public/assets/2b6875ee4i7dd8d076f5bf5bc74c2d2f.JPG public/images/students/chenhaoyu.jpg

# 设置权限
chmod 644 public/images/students/*.jpg

echo "照片复制完成！"