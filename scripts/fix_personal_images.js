/**
 * 修复personal目录中缺失的图片
 * 这个脚本会创建personal目录中缺失的图片文件
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const personalDir = path.join(imagesDir, 'personal');

// 需要创建的图片和源图片（从students/personal目录复制）
const personalImages = [
  { 
    name: 'stage-event.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanlive1.JPG')
  },
  { 
    name: 'teaching-group.jpg', 
    source: path.join(imagesDir, 'students/personal/jiaoxue/midiyinyuejie.JPG')
  },
  { 
    name: 'artist-collab.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyumingxing.JPG')
  },
  { 
    name: 'concert-live.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyanchu3.JPG')
  },
  { 
    name: 'central-music.jpg', 
    source: path.join(imagesDir, 'students/personal/jiaoxue/haohanjinpaidaoshi.JPG')
  },
  { 
    name: 'drum-teaching-session.jpg', 
    source: path.join(imagesDir, 'students/personal/jiaoxue/haohanjiangke.JPG')
  }
];

// 创建缺失的图片
function createMissingImage(name, sourcePath) {
  const targetPath = path.join(personalDir, name);
  
  // 确保personal目录存在
  if (!fs.existsSync(personalDir)) {
    console.log(`创建目录: ${personalDir}`);
    fs.mkdirSync(personalDir, { recursive: true });
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
  console.log('开始修复personal目录中缺失的图片...');
  
  // 创建缺失的图片
  personalImages.forEach(image => {
    createMissingImage(image.name, image.source);
  });
  
  console.log('处理完成！');
}

// 执行主函数
main();