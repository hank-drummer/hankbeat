/**
 * 为缺少profile.jpg的学生目录创建profile.jpg文件
 * 这个脚本会复制现有图片并重命名为profile.jpg
 */

const fs = require('fs');
const path = require('path');

// 学生图片目录
const studentsDir = path.join(__dirname, '../public/images/students');

// 需要处理的学生目录和对应的源图片
const studentImages = [
  // 邓川 - 复制现有的JPG文件为profile.jpg
  { dir: 'future/dengchuan', sourceImage: 'dengchuan3.JPG' },
  // 苗德颜 - 复制现有的png文件为profile.jpg
  { dir: 'future/miaodeyan', sourceImage: 'miaodeyan.png' },
  // 赖沐卿 - 使用laimuqing1.JPG作为profile.jpg
  { dir: 'future/laimuqing', sourceImage: 'laimuqing1.JPG' },
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
  
  // 如果已经有profile.jpg，询问是否覆盖
  if (fs.existsSync(profilePath)) {
    console.log(`${profilePath} 已存在，检查是否需要更新`);
    
    // 获取文件的修改时间
    const profileStat = fs.statSync(profilePath);
    const sourcePath = path.join(dirPath, sourceImage);
    
    if (!fs.existsSync(sourcePath)) {
      console.error(`错误: 源图片不存在 ${sourcePath}`);
      return;
    }
    
    const sourceStat = fs.statSync(sourcePath);
    
    // 如果源图片比profile.jpg新，则更新profile.jpg
    if (sourceStat.mtime > profileStat.mtime) {
      console.log(`源图片比profile.jpg新，更新profile.jpg`);
      try {
        fs.copyFileSync(sourcePath, profilePath);
        console.log(`成功更新: ${profilePath}`);
      } catch (err) {
        console.error(`更新图片失败: ${err.message}`);
      }
    } else {
      console.log(`profile.jpg已是最新，无需更新`);
    }
    
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

// 主函数
function main() {
  console.log('开始创建或更新profile.jpg文件...');
  
  // 为每个学生创建profile.jpg
  studentImages.forEach(student => {
    createProfileImage(student.dir, student.sourceImage);
  });
  
  console.log('处理完成！');
}

// 执行主函数
main();