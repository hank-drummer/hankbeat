import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/students/personal/yanchu/haohanlive1.JPG" 
          alt="郝汉专业鼓手舞台表演" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-secondary/70 to-transparent"></div>
      </div>
      
      {/* 中央标题文字 */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white text-center mb-4 tracking-tight">
          郝汉<span className="text-accent">|</span>Hank
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl">
          专业鼓手 | 音乐教育者
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;