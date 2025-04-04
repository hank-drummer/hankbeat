/**
 * 创建缺失图片的脚本
 * 这个脚本会创建MISSING_IMAGES.md中列出的所有缺失图片
 */

const fs = require('fs');
const path = require('path');

// 图片根目录
const imagesDir = path.join(__dirname, '../public/images');

// 缺失图片列表
const missingImages = {
  performances: [
    'band-performance.jpg',
    'soundwave-event.jpg',
    'student-group.jpg',
    'drum-solo.jpg'
  ],
  awards: [
    'asia-pacific-winner.jpg',
    'performance-stage.jpg',
    'brand-event.jpg',
    'profile-photo.jpg'
  ],
  personal: [
    'stage-event.jpg',
    'teaching-group.jpg',
    'artist-collab.jpg',
    'concert-live.jpg',
    'central-music.jpg'
  ],
  students: [
    { name: 'lijunxian.jpg', dir: 'professional/lijunxian' },
    { name: 'shijunzhe.jpg', dir: 'future/shijunzhe' },
    { name: 'laimuqing.jpg', dir: 'future/laimuqing' },
    { name: 'chenhaoyu.jpg', dir: 'future/chenhaoyu' }
  ]
};

// 可用的示例图片（用于复制）
const sampleImages = [
  path.join(imagesDir, 'performances', '00_01_49.JPG'),
  path.join(imagesDir, 'performances', '00_03_03.JPG'),
  path.join(imagesDir, 'performances', '097c76bc3aa2c280e7adfbf033200f10.jpg'),
  path.join(imagesDir, 'performances', '71e7bae345d6c2ef7e73109916b672a5.jpg'),
  path.join(imagesDir, 'performances', '7ce42f03d5bb9053f58eb248134d881f.JPG'),
  path.join(imagesDir, 'performances', 'b478aca6aa1d905c05eaf2a20b89768b.JPG'),
  path.join(imagesDir, 'performances', 'd10c9b85ec0fb0d47753aba5ee4bc1a3.JPG'),
  path.join(imagesDir, 'central-music-group.jpg'),
  path.join(imagesDir, 'central-music-training.jpg'),
  path.join(imagesDir, 'drum-teaching-session.jpg')
];

// 创建目录（如果不存在）
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`创建目录: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
    return true;
  }
  return false;
}

// 创建缺失的图片
function createMissingImage(imagePath, sampleImagePath) {
  // 如果图片已存在，跳过
  if (fs.existsSync(imagePath)) {
    console.log(`图片已存在，跳过: ${imagePath}`);
    return false;
  }
  
  try {
    // 复制示例图片作为缺失图片
    fs.copyFileSync(sampleImagePath, imagePath);
    console.log(`成功创建图片: ${imagePath}`);
    return true;
  } catch (err) {
    console.error(`创建图片失败: ${imagePath}, 错误: ${err.message}`);
    return false;
  }
}

// 处理普通目录的缺失图片
function handleDirectoryMissingImages(dirName, imageNames) {
  const dirPath = path.join(imagesDir, dirName);
  ensureDirectoryExists(dirPath);
  
  let createdCount = 0;
  
  imageNames.forEach((imageName, index) => {
    const imagePath = path.join(dirPath, imageName);
    // 使用循环选择示例图片，确保不会越界
    const sampleImagePath = sampleImages[index % sampleImages.length];
    
    if (createMissingImage(imagePath, sampleImagePath)) {
      createdCount++;
    }
  });
  
  return createdCount;
}

// 处理学生目录的缺失图片
function handleStudentMissingImages(students) {
  let createdCount = 0;
  
  students.forEach((student, index) => {
    const dirPath = path.join(imagesDir, 'students', student.dir);
    ensureDirectoryExists(dirPath);
    
    const imagePath = path.join(dirPath, student.name);
    const profilePath = path.join(dirPath, 'profile.jpg');
    
    // 使用循环选择示例图片，确保不会越界
    const sampleImagePath = sampleImages[index % sampleImages.length];
    
    // 创建学生图片
    if (createMissingImage(imagePath, sampleImagePath)) {
      createdCount++;
    }
    
    // 如果profile.jpg不存在，则创建
    if (!fs.existsSync(profilePath)) {
      try {
        // 如果学生图片已创建，则复制它作为profile.jpg
        if (fs.existsSync(imagePath)) {
          fs.copyFileSync(imagePath, profilePath);
        } else {
          // 否则使用示例图片
          fs.copyFileSync(sampleImagePath, profilePath);
        }
        console.log(`成功创建profile图片: ${profilePath}`);
        createdCount++;
      } catch (err) {
        console.error(`创建profile图片失败: ${profilePath}, 错误: ${err.message}`);
      }
    }
  });
  
  return createdCount;
}

// 主函数
function main() {
  console.log('开始创建缺失图片...');
  
  let totalCreated = 0;
  
  // 处理performances目录的缺失图片
  totalCreated += handleDirectoryMissingImages('performances', missingImages.performances);
  
  // 处理awards目录的缺失图片
  totalCreated += handleDirectoryMissingImages('awards', missingImages.awards);
  
  // 处理personal目录的缺失图片
  totalCreated += handleDirectoryMissingImages('personal', missingImages.personal);
  
  // 处理students目录的缺失图片
  totalCreated += handleStudentMissingImages(missingImages.students);
  
  console.log(`缺失图片创建完成！共创建 ${totalCreated} 个图片。`);
}

// 执行主函数
main();