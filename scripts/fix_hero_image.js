/**
 * 修复HeroSection背景图片问题
 * 这个脚本会确保/public/assets/目录中存在drum_3.jpg文件
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const assetsDir = path.join(__dirname, '../public/assets');

// 需要确保存在的图片
const heroImage = 'drum_3.jpg';
const heroImagePath = path.join(assetsDir, heroImage);

// 检查图片是否存在
function checkHeroImage() {
  if (fs.existsSync(heroImagePath)) {
    console.log(`✅ 图片已存在: ${heroImagePath}`);
    // 检查文件权限
    try {
      fs.accessSync(heroImagePath, fs.constants.R_OK);
      console.log(`✅ 图片可读取: ${heroImagePath}`);
    } catch (err) {
      console.error(`❌ 图片权限错误: ${err.message}`);
      // 尝试修复权限
      try {
        fs.chmodSync(heroImagePath, 0o644);
        console.log(`✅ 已修复图片权限: ${heroImagePath}`);
      } catch (err) {
        console.error(`❌ 无法修复图片权限: ${err.message}`);
      }
    }
    return true;
  }
  
  console.error(`❌ 图片不存在: ${heroImagePath}`);
  return false;
}

// 如果图片不存在，尝试从其他图片复制
function createHeroImage() {
  // 查找可用的替代图片
  const files = fs.readdirSync(assetsDir);
  const jpgFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') && file !== heroImage
  );
  
  if (jpgFiles.length === 0) {
    console.error('❌ 没有找到可用的替代图片');
    return false;
  }
  
  // 使用第一个找到的jpg图片作为替代
  const sourceImage = path.join(assetsDir, jpgFiles[0]);
  
  try {
    fs.copyFileSync(sourceImage, heroImagePath);
    console.log(`✅ 已创建图片: ${heroImagePath} (从 ${jpgFiles[0]} 复制)`);
    return true;
  } catch (err) {
    console.error(`❌ 创建图片失败: ${err.message}`);
    return false;
  }
}

// 主函数
function main() {
  console.log('开始修复HeroSection背景图片...');
  
  // 确保assets目录存在
  if (!fs.existsSync(assetsDir)) {
    console.log(`创建目录: ${assetsDir}`);
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  
  // 检查并修复图片
  if (!checkHeroImage()) {
    createHeroImage();
  }
  
  console.log('处理完成！');
}

// 执行主函数
main();