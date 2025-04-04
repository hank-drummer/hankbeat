/**
 * 添加更多架子鼓相关图片
 * 这个脚本会从students/personal/yanchu目录复制更多架子鼓相关图片到performances目录
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const performancesDir = path.join(imagesDir, 'performances');
const yanchuDir = path.join(imagesDir, 'students/personal/yanchu');

// 需要添加的架子鼓图片
const drumImages = [
  { 
    name: 'drum-performance-1.jpg', 
    source: path.join(yanchuDir, 'haohanHKdrum.JPG')
  },
  { 
    name: 'drum-performance-2.jpg', 
    source: path.join(yanchuDir, 'haohanHKdrum1.JPG')
  },
  { 
    name: 'drum-award.jpg', 
    source: path.join(yanchuDir, 'HKdrummerguanjun.JPG')
  },
  { 
    name: 'drum-live-1.jpg', 
    source: path.join(yanchuDir, 'haohanlive1.JPG')
  },
  { 
    name: 'drum-live-2.jpg', 
    source: path.join(yanchuDir, 'haohanyanchu2.JPG')
  },
  { 
    name: 'drum-live-3.jpg', 
    source: path.join(yanchuDir, 'haohanyanchu3.JPG')
  },
  { 
    name: 'drum-live-4.jpg', 
    source: path.join(yanchuDir, 'haohanyanchu6.JPG')
  },
  { 
    name: 'drum-live-5.jpg', 
    source: path.join(yanchuDir, 'haohanyanchu7.JPG')
  },
  { 
    name: 'drum-live-6.jpg', 
    source: path.join(yanchuDir, 'haohanyanchuzhao4.JPG')
  },
  { 
    name: 'drum-live-7.jpg', 
    source: path.join(yanchuDir, 'haohanyanchuzhao5.JPG')
  }
];

// 创建架子鼓图片
function createDrumImage(name, sourcePath) {
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
  console.log('开始添加架子鼓相关图片...');
  
  // 创建架子鼓图片
  drumImages.forEach(image => {
    createDrumImage(image.name, image.source);
  });
  
  console.log('架子鼓图片添加完成！');
}

// 执行主函数
main();