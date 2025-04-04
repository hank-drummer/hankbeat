import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalImages } from '../data/images';

const PersonalGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // 将照片按类别分组
  const categories = {
    all: Object.values(personalImages),
    performance: Object.values(personalImages).filter(img => 
      img.src.includes('/yanchu/') || 
      img.title.includes('演出') || 
      img.description.includes('表演')
    ),
    teaching: Object.values(personalImages).filter(img => 
      img.src.includes('/jiaoxue/') || 
      img.title.includes('教学') || 
      img.description.includes('培训')
    ),
    awards: Object.values(personalImages).filter(img => 
      img.title.includes('大赛') || 
      img.description.includes('荣誉')
    ),
    collaboration: Object.values(personalImages).filter(img => 
      img.title.includes('合作') || 
      img.description.includes('合作') ||
      img.description.includes('艺人')
    )
  };

  // 动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-3 text-white text-center"
        >
          个人作品集
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-3xl mx-auto"
        >
          长期以来活跃于国内外舞台，参与众多专业演出与教学活动，积累了丰富的舞台经验与教学成果
        </motion.p>
        
        {/* 分类导航 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'all' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            全部
          </button>
          <button 
            onClick={() => setSelectedCategory('performance')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'performance' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            演出表演
          </button>
          <button 
            onClick={() => setSelectedCategory('teaching')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'teaching' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            教学培训
          </button>
          <button 
            onClick={() => setSelectedCategory('awards')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'awards' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            获奖荣誉
          </button>
          <button 
            onClick={() => setSelectedCategory('collaboration')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'collaboration' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            艺人合作
          </button>
        </div>
        
        {/* 照片网格 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory} // 切换类别时重新触发动画
        >
          {categories[selectedCategory].map((image, index) => (
            <motion.div
              key={`${image.title}-${index}`}
              variants={itemVariants}
              className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 border border-gray-700/50"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalGallery;