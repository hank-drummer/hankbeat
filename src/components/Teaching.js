import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TeachingGallery from './TeachingGallery';

const Teaching = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-dark-blue text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-accent"
        >
          专业打击乐教学
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 基础课程 */}
          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-800/30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">FUTURE BASIC</h2>
            <p className="text-gray-300 mb-4">电子节奏启蒙课程</p>
            <ul className="space-y-2 text-gray-300">
              <li>现代电子节奏基础</li>
              <li>Hybrid架子鼓技术</li>
              <li>数字音乐节奏训练</li>
              <li>电音节拍构建</li>
            </ul>
          </div>

          {/* 进阶课程 */}
          <div className="bg-gradient-to-br from-rose-900/50 via-purple-900/30 to-fuchsia-800/30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">FUTURE CREATOR</h2>
            <p className="text-gray-300 mb-4">探索多元音乐风格，突破技术边界</p>
            <ul className="space-y-2 text-gray-300">
              <li>金属/双踩鼓专攻</li>
              <li>电子/编程化方向</li>
              <li>现代电子节奏创作</li>
              <li>复合节奏训练</li>
            </ul>
          </div>

          {/* 专业课程 */}
          <div className="bg-gradient-to-br from-amber-900/50 via-rose-900/30 to-pink-800/30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">FUTURE MASTER</h2>
            <p className="text-gray-300 mb-4">引领电子打击乐艺术创新</p>
            <ul className="space-y-2 text-gray-300">
              <li>专业音乐院校考前培训</li>
              <li>跨界音乐制作</li>
              <li>个人风格塑造</li>
              <li>舞台表演技巧</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">教学特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">个性化教学方案</h3>
              <p className="text-gray-300">根据学员兴趣和基础，量身定制学习计划，确保每位学员都能获得最适合的学习体验。</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">专业师资团队</h3>
              <p className="text-gray-300">由中央音乐学院认证教师和专业演奏家组成，确保教学质量和专业水准。</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 添加中央音乐学院师资培训展示 */}
      <TeachingGallery />
    </div>
  );
};

export default Teaching;