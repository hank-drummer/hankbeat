/**
 * 修复优秀学员展示部分的图片
 * 这个脚本会确保优秀学员展示部分的图片正确显示
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const outstandingDir = path.join(imagesDir, 'students/outstanding');

// 需要创建的图片和源图片
const outstandingImages = [
  { 
    name: 'band_performance.jpg', 
    source: path.join(imagesDir, 'performances', 'band-performance.jpg')
  }
];

// 创建缺失的图片
function createMissingImage(name, sourcePath) {
  const targetPath = path.join(outstandingDir, name);
  
  // 确保outstanding目录存在
  if (!fs.existsSync(outstandingDir)) {
    console.log(`创建目录: ${outstandingDir}`);
    fs.mkdirSync(outstandingDir, { recursive: true });
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
  console.log('开始修复优秀学员展示部分的图片...');
  
  // 创建缺失的图片
  outstandingImages.forEach(image => {
    createMissingImage(image.name, image.source);
  });
  
  console.log('处理完成！');
}

// 执行主函数
main();