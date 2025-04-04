/**
 * 修复缺失的奖项图片
 * 这个脚本会创建About.js中引用但不存在的奖项图片
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const awardsDir = path.join(imagesDir, 'awards');

// 需要创建的奖项图片
const awardImages = [
  { 
    name: 'asia-pacific-award.jpg', 
    source: path.join(awardsDir, 'asia-pacific-winner.jpg')
  },
  { 
    name: 'asia-pacific-performance.jpg', 
    source: path.join(imagesDir, 'performances/stage-performance.jpg')
  }
];

// 创建缺失的图片
function createMissingImage(name, sourcePath) {
  const targetPath = path.join(awardsDir, name);
  
  // 确保awards目录存在
  if (!fs.existsSync(awardsDir)) {
    console.log(`创建目录: ${awardsDir}`);
    fs.mkdirSync(awardsDir, { recursive: true });
  }
  
  // 如果图片已经存在，跳过
  if (fs.existsSync(targetPath)) {
    console.log(`${targetPath} 已存在，跳过`);
    return;
  }
  
  // 检查源图片是否存在
  if (!fs.existsSync(sourcePath)) {
    console.error(`错误: 源图片不存在 ${sourcePath}`);
    return;
  }
  
  // 复制图片
  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`成功创建: ${targetPath}`);
  } catch (err) {
    console.error(`复制图片失败: ${err.message}`);
  }
}

// 主函数
function main() {
  console.log('开始修复缺失的奖项图片...');
  
  // 创建缺失的图片
  awardImages.forEach(image => {
    createMissingImage(image.name, image.source);
  });
  
  console.log('处理完成！');
}

// 执行主函数
main();