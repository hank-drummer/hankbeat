/**
 * 修复艺考成功案例部分的图片显示问题
 * 这个脚本会确保艺考成功案例部分的图片正确显示
 */

const fs = require('fs');
const path = require('path');

// 图片目录
const imagesDir = path.join(__dirname, '../public/images');
const studentsDir = path.join(imagesDir, 'students');

// 需要修复的艺考成功案例图片
const artExamImages = [
  // 陈浩宇的图片 - 修复显示不完整的问题
  { 
    name: 'chenhaoyu2.JPG', 
    dir: 'future/chenhaoyu',
    source: path.join(studentsDir, 'future/chenhaoyu/chenhaoyu2.JPG'),
    needsResize: true
  },
  // 杨成的图片
  { 
    name: 'yangchengyikaoruqu.jpg', 
    dir: 'professional/yangcheng',
    source: path.join(studentsDir, 'professional/yangcheng/yangchengyikaoruqu.jpg'),
    needsResize: false
  },
  // 邹宇辰的图片
  { 
    name: 'zouyuchenliankaodiyi.jpg', 
    dir: 'professional/zouyuchen',
    source: path.join(studentsDir, 'professional/zouyuchen/zouyuchenliankaodiyi.jpg'),
    needsResize: false
  }
];

// 创建或修复图片
function fixArtExamImage(item) {
  const dirPath = path.join(studentsDir, item.dir);
  const imagePath = path.join(dirPath, item.name);
  
  // 确保目录存在
  if (!fs.existsSync(dirPath)) {
    console.log(`创建目录: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // 检查源图片是否存在
  if (!fs.existsSync(item.source)) {
    console.error(`错误: 源图片不存在 ${item.source}`);
    return;
  }
  
  // 如果图片已经存在但需要调整，先备份
  if (fs.existsSync(imagePath) && item.needsResize) {
    const backupPath = `${imagePath}.backup`;
    if (!fs.existsSync(backupPath)) {
      console.log(`备份原图片: ${imagePath} -> ${backupPath}`);
      fs.copyFileSync(imagePath, backupPath);
    }
    
    // 复制图片（在实际应用中，这里应该使用图像处理库来调整图片大小和格式）
    // 由于我们没有图像处理库，这里只是复制文件
    console.log(`更新图片: ${imagePath}`);
    fs.copyFileSync(item.source, imagePath);
  } 
  // 如果图片不存在，直接创建
  else if (!fs.existsSync(imagePath)) {
    console.log(`创建图片: ${imagePath}`);
    fs.copyFileSync(item.source, imagePath);
  }
  else {
    console.log(`图片已存在且不需要调整: ${imagePath}`);
  }
}

// 修复About.js中的CSS样式问题
function fixAboutJsStyles() {
  const aboutJsPath = path.join(__dirname, '../src/components/About.js');
  
  if (!fs.existsSync(aboutJsPath)) {
    console.error(`错误: About.js不存在 ${aboutJsPath}`);
    return;
  }
  
  let content = fs.readFileSync(aboutJsPath, 'utf8');
  
  // 修改陈浩宇图片的CSS样式，从object-contain改为object-cover
  const oldStyle = 'className="w-full h-64 object-contain bg-gray-100"';
  const newStyle = 'className="w-full h-64 object-cover object-center"';
  
  if (content.includes(oldStyle)) {
    content = content.replace(oldStyle, newStyle);
    console.log('已修改陈浩宇图片的CSS样式，从object-contain改为object-cover');
    
    fs.writeFileSync(aboutJsPath, content, 'utf8');
    console.log(`已更新 ${aboutJsPath}`);
  } else {
    console.log('未找到需要修改的CSS样式或已经修改过');
  }
}

// 主函数
function main() {
  console.log('开始修复艺考成功案例部分的图片...');
  
  // 修复图片
  artExamImages.forEach(item => {
    fixArtExamImage(item);
  });
  
  // 修复CSS样式
  fixAboutJsStyles();
  
  console.log('处理完成！');
}

// 执行主函数
main();