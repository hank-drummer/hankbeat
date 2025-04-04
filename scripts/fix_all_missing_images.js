/**
 * 完善所有缺失的图片
 * 这个脚本会创建所有缺失的图片文件，包括：
 * 1. 演出展示图片 (performances)
 * 2. 教学成果展示图片 (teaching)
 * 3. 中央音乐学院师资培训展示图片 (personal)
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const performancesDir = path.join(imagesDir, 'performances');
const personalDir = path.join(imagesDir, 'personal');
const teachingDir = path.join(imagesDir, 'teaching');

// 需要创建的演出展示图片
const performanceImages = [
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
  }
];

// 需要创建的个人/教学团队图片
const personalImages = [
  { 
    name: 'stage-event.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyanchu3.JPG')
  },
  { 
    name: 'teaching-group.jpg', 
    source: path.join(imagesDir, 'students/personal/zhongyangyinyuexueyuanpeoxun/zhongyangyinyuexueyuanshizipeixunchongqingzhan.JPG')
  },
  { 
    name: 'artist-collab.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyumingxing.JPG')
  },
  { 
    name: 'concert-live.jpg', 
    source: path.join(imagesDir, 'students/personal/yanchu/haohanyanchu6.JPG')
  },
  { 
    name: 'central-music.jpg', 
    source: path.join(imagesDir, 'students/personal/zhongyangyinyuexueyuanpeoxun/zhongyangyinyuexueyuanshizipeixunhuangqiaozhan.jpg')
  }
];

// 需要创建的中央音乐学院师资培训图片
const teachingImages = [
  { 
    name: 'central-music-training-1.jpg', 
    source: path.join(imagesDir, 'students/personal/zhongyangyinyuexueyuanpeoxun/zhongyangyinyuexueyuanshizipeixunshenzhenzhan.JPG')
  },
  { 
    name: 'central-music-training-2.jpg', 
    source: path.join(imagesDir, 'students/personal/zhongyangyinyuexueyuanpeoxun/zhongyangyinyuexueyuanshizipeixunxiamenzhan.JPG')
  },
  { 
    name: 'central-music-training-3.jpg', 
    source: path.join(imagesDir, 'students/personal/zhongyangyinyuexueyuanpeoxun/zhongyangyinyuexueyuanshizipeixunchongqing3.jpg')
  }
];

// 创建缺失的图片
function createMissingImage(name, sourcePath, targetDir) {
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
  console.log('开始完善所有缺失的图片...');
  
  // 创建演出展示缺失的图片
  console.log('\n处理演出展示图片:');
  performanceImages.forEach(image => {
    createMissingImage(image.name, image.source, performancesDir);
  });
  
  // 创建个人/教学团队缺失的图片
  console.log('\n处理个人/教学团队图片:');
  personalImages.forEach(image => {
    createMissingImage(image.name, image.source, personalDir);
  });
  
  // 创建中央音乐学院师资培训缺失的图片
  console.log('\n处理中央音乐学院师资培训图片:');
  teachingImages.forEach(image => {
    createMissingImage(image.name, image.source, teachingDir);
  });
  
  console.log('\n所有图片处理完成！');
}

// 执行主函数
main();