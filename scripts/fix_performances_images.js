/**
 * 修复performances目录中缺失的图片
 * 这个脚本会创建performances目录中缺失的图片文件
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const performancesDir = path.join(imagesDir, 'performances');

// 需要创建的图片和源图片（从students/personal目录复制）
const performanceImages = [
  // 这些图片在MISSING_IMAGES.md中被列为缺失，取消注释以重新创建
  { 
    name: 'band-performance.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyuedui.JPG')
  },
  { 
    name: 'soundwave-event.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanshanghaizhanhui.JPG')
  },
  { 
    name: 'student-group.jpg', 
    source: path.join(imagesDir, 'students/personal/jiaoxue/midiyinyuejie.JPG')
  },
  { 
    name: 'drum-solo.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyanchu2.JPG')
  },
  // 确保stage-performance.jpg存在
  { 
    name: 'stage-performance.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanlive1.JPG')
  },
  // 添加其他可能缺失的图片
  { 
    name: 'drum-performance-1.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/HKdrummerguanjun.JPG')
  },
  { 
    name: 'drum-performance-2.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyanchu2.JPG')
  },
  { 
    name: 'drum-award.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/HKdrummerguanjun.JPG')
  }
];

// 创建缺失的图片
function createMissingImage(name, sourcePath) {
  const targetPath = path.join(performancesDir, name);
  
  // 确保performances目录存在
  if (!fs.existsSync(performancesDir)) {
    console.log(`创建目录: ${performancesDir}`);
    fs.mkdirSync(performancesDir, { recursive: true });
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
  console.log('开始修复performances目录中缺失的图片...');
  
  // 创建缺失的图片
  performanceImages.forEach(image => {
    createMissingImage(image.name, image.source);
  });
  
  console.log('处理完成！');
}

// 执行主函数
main();