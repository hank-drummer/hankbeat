/**
 * 修复awards目录中缺失的图片
 * 这个脚本会创建awards目录中缺失的图片文件
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const awardsDir = path.join(imagesDir, 'awards');

// 需要创建的图片和源图片（从students/personal目录复制）
const awardImages = [
  { 
    name: 'asia-pacific-winner.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/HKdrummerguanjun.JPG')
  },
  { 
    name: 'performance-stage.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanlive1.JPG')
  },
  { 
    name: 'brand-event.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyudaiyanren.JPG')
  },
  { 
    name: 'profile-photo.jpg', 
    source: path.join(imagesDir, 'students/personal/jiaoxue/haohanjiangke.JPG')
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
  console.log('开始修复awards目录中缺失的图片...');
  
  // 创建缺失的图片
  awardImages.forEach(image => {
    createMissingImage(image.name, image.source);
  });
  
  console.log('处理完成！');
}

// 执行主函数
main();