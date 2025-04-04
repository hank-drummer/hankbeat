/**
 * 添加更多个人相关图片
 * 这个脚本会从students/personal目录复制更多个人相关图片到personal和teaching目录
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const personalDir = path.join(imagesDir, 'personal');
const teachingDir = path.join(imagesDir, 'teaching');
const jiaoxueDir = path.join(imagesDir, 'students/personal/jiaoxue');
const yanchuDir = path.join(imagesDir, 'students/personal/yanchu');
const zhongYangDir = path.join(imagesDir, 'students/personal/zhongyangyinyuexueyuanpeoxun');

// 需要添加的个人图片
const personalImages = [
  { 
    name: 'teaching-session-1.jpg', 
    source: path.join(jiaoxueDir, 'haohanjiangke.JPG'),
    target: personalDir
  },
  { 
    name: 'teaching-session-2.jpg', 
    source: path.join(jiaoxueDir, 'haohanjinpaidaoshi.JPG'),
    target: personalDir
  },
  { 
    name: 'performance-award.jpg', 
    source: path.join(yanchuDir, 'haohanguanjun.jpg'),
    target: personalDir
  },
  { 
    name: 'artist-collab-2.jpg', 
    source: path.join(yanchuDir, 'haohanyudaiyanren.JPG'),
    target: personalDir
  }
];

// 需要添加的中央音乐学院师资培训图片
const teachingImages = [
  { 
    name: 'central-music-training-4.jpg', 
    source: path.join(zhongYangDir, 'zhongyangyinyuexueyuanshizipeixunchongqingzhan2.JPG'),
    target: teachingDir
  },
  { 
    name: 'central-music-group-1.jpg', 
    source: path.join(zhongYangDir, 'zhongyangyinyuexueyuanshizipeixunchongqingzhan.JPG'),
    target: teachingDir
  }
];

// 创建图片
function createImage(name, sourcePath, targetDir) {
  const targetPath = path.join(targetDir, name);
  
  // 确保目标目录存在
  if (!fs.existsSync(targetDir)) {
    console.log(`创建目录: ${targetDir}`);
    fs.mkdirSync(targetDir, { recursive: true });
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
  console.log('开始添加更多个人相关图片...');
  
  // 创建个人图片
  console.log('\n处理个人图片:');
  personalImages.forEach(image => {
    createImage(image.name, image.source, image.target);
  });
  
  // 创建中央音乐学院师资培训图片
  console.log('\n处理中央音乐学院师资培训图片:');
  teachingImages.forEach(image => {
    createImage(image.name, image.source, image.target);
  });
  
  console.log('\n所有个人相关图片添加完成！');
}

// 执行主函数
main();