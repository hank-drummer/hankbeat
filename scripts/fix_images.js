/**
 * 修复学生图片路径问题的脚本
 * 这个脚本会创建符合studentGroups.js配置的profile.jpg文件
 */

const fs = require('fs');
const path = require('path');

// 学生图片目录
const studentsDir = path.join(__dirname, '../public/images/students');

// 需要处理的学生目录和对应的图片
const studentImages = [
  // 职业乐手
  { dir: 'professional/yangcheng', sourceImage: 'yangchengyanchu.JPG' },
  { dir: 'professional/zouyuchen', sourceImage: 'zouyuchen.JPG' },
  { dir: 'professional/huangrenjun', sourceImage: 'huangrenjun1.JPG' },
  { dir: 'professional/lijunxian', sourceImage: 'lijunxianHKdrum.JPG' },
  // 未来之星
  { dir: 'future/kiko', sourceImage: 'kiko.jpg' },
  { dir: 'future/laimuqing', sourceImage: 'laimuqing.JPG' },
  { dir: 'future/shijunzhe', sourceImage: 'shijunzhe.JPG' },
  { dir: 'future/chenhaoyu', sourceImage: null }, // 需要创建目录
];

// 创建profile.jpg文件
function createProfileImage(studentDir, sourceImage) {
  const dirPath = path.join(studentsDir, studentDir);
  const profilePath = path.join(dirPath, 'profile.jpg');
  
  // 确保目录存在
  if (!fs.existsSync(dirPath)) {
    console.log(`创建目录: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // 如果已经有profile.jpg，跳过
  if (fs.existsSync(profilePath)) {
    console.log(`${profilePath} 已存在，跳过`);
    return;
  }
  
  // 如果没有源图片，记录错误
  if (!sourceImage) {
    console.error(`错误: ${studentDir} 没有指定源图片`);
    return;
  }
  
  const sourcePath = path.join(dirPath, sourceImage);
  
  // 检查源图片是否存在
  if (!fs.existsSync(sourcePath)) {
    console.error(`错误: 源图片不存在 ${sourcePath}`);
    return;
  }
  
  // 复制图片为profile.jpg
  try {
    fs.copyFileSync(sourcePath, profilePath);
    console.log(`成功创建: ${profilePath}`);
  } catch (err) {
    console.error(`复制图片失败: ${err.message}`);
  }
}

// 处理缺失的图片
function handleMissingImages() {
  // 处理MISSING_IMAGES.md中提到的缺失图片
  const missingImages = [
    { name: 'lijunxian.jpg', dir: 'professional/lijunxian' },
    { name: 'shijunzhe.jpg', dir: 'future/shijunzhe' },
    { name: 'laimuqing.jpg', dir: 'future/laimuqing' },
    { name: 'chenhaoyu.jpg', dir: 'future/chenhaoyu' },
  ];
  
  missingImages.forEach(item => {
    const dirPath = path.join(studentsDir, item.dir);
    const imagePath = path.join(dirPath, item.name);
    
    // 确保目录存在
    if (!fs.existsSync(dirPath)) {
      console.log(`创建目录: ${dirPath}`);
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // 如果图片不存在，记录错误
    if (!fs.existsSync(imagePath)) {
      console.log(`缺失图片: ${imagePath}`);
    }
  });
}

// 主函数
function main() {
  console.log('开始修复学生图片...');
  
  // 为每个学生创建profile.jpg
  studentImages.forEach(student => {
    createProfileImage(student.dir, student.sourceImage);
  });
  
  // 处理缺失的图片
  handleMissingImages();
  
  console.log('图片修复完成！');
}

// 执行主函数
main();