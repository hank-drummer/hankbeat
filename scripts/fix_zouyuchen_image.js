/**
 * 修复邹宇辰艺考成功案例图片显示问题
 * 这个脚本会确保邹宇辰的联考第一图片正确显示
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const studentsDir = path.join(imagesDir, 'students');
const zouyuchenDir = path.join(studentsDir, 'professional/zouyuchen');

// 需要修复的图片
const imageToFix = {
  name: 'zouyuchenliankaodiyi.jpg',
  source: path.join(zouyuchenDir, 'zouyuchenkaoshichengji.JPG'), // 使用现有的考试成绩图片
  target: path.join(zouyuchenDir, 'zouyuchenliankaodiyi.jpg')
};

// 创建或修复图片
function fixZouyuchenImage() {
  // 确保目录存在
  if (!fs.existsSync(zouyuchenDir)) {
    console.log(`创建目录: ${zouyuchenDir}`);
    fs.mkdirSync(zouyuchenDir, { recursive: true });
  }
  
  // 检查源图片是否存在
  if (!fs.existsSync(imageToFix.source)) {
    console.error(`错误: 源图片不存在 ${imageToFix.source}`);
    return;
  }
  
  // 如果目标图片不存在，复制源图片到目标位置
  if (!fs.existsSync(imageToFix.target)) {
    console.log(`创建图片: ${imageToFix.target}`);
    fs.copyFileSync(imageToFix.source, imageToFix.target);
    console.log(`成功创建: ${imageToFix.target}`);
  } else {
    console.log(`图片已存在: ${imageToFix.target}`);
  }
}

// 主函数
function main() {
  console.log('开始修复邹宇辰艺考成功案例图片...');
  
  // 修复图片
  fixZouyuchenImage();
  
  console.log('处理完成！');
}

// 执行主函数
main();