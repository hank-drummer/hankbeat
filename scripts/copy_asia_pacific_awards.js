/**
 * 复制亚太鼓手节获奖照片到awards目录
 * 这个脚本将用户提供的三张亚太鼓手节获奖照片复制到网站的awards目录
 */

const fs = require('fs');
const path = require('path');

// 源文件路径（从students/personal/yanchu目录获取）
const sourceFiles = [
  { src: path.join(__dirname, '../public/images/students/personal/yanchu/haohanguanjun.jpg'), dest: 'asia-pacific-certificate.jpg' },
  { src: path.join(__dirname, '../public/images/students/personal/yanchu/haohanHKdrum.JPG'), dest: 'asia-pacific-performance.jpg' },
  { src: path.join(__dirname, '../public/images/students/personal/yanchu/HKdrummerguanjun.JPG'), dest: 'asia-pacific-award.jpg' }
];

// 目标目录
const targetDir = path.join(__dirname, '../public/images/awards');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`创建目录: ${targetDir}`);
}

// 复制文件
sourceFiles.forEach(file => {
  try {
    if (fs.existsSync(file.src)) {
      const targetPath = path.join(targetDir, file.dest);
      fs.copyFileSync(file.src, targetPath);
      console.log(`成功复制: ${file.src} -> ${targetPath}`);
    } else {
      console.error(`源文件不存在: ${file.src}`);
    }
  } catch (error) {
    console.error(`复制文件时出错: ${file.src}`, error);
  }
});

console.log('亚太鼓手节获奖照片复制完成！');