/**
 * 修复打击乐教学图片
 * 这个脚本会确保打击乐教学图片正确显示在About页面
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const sourceImagePath = path.join(imagesDir, 'students/personal/jiaoxue/haohanjiangke.JPG');
const targetImagePath = path.join(imagesDir, 'drum-teaching-session.jpg');

// 主函数
function main() {
  console.log('开始修复打击乐教学图片...');
  
  // 检查源图片是否存在
  if (!fs.existsSync(sourceImagePath)) {
    console.error(`错误: 源图片不存在 ${sourceImagePath}`);
    return;
  }
  
  // 复制图片
  try {
    fs.copyFileSync(sourceImagePath, targetImagePath);
    console.log(`成功创建: ${targetImagePath}`);
  } catch (err) {
    console.error(`复制图片失败: ${err.message}`);
  }
  
  console.log('处理完成！');
}

// 执行主函数
main();