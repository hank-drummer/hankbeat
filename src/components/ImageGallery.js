import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalImages } from '../data/images';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const images = [
    { id: 1, ...personalImages.stageEvent },
    { id: 2, ...personalImages.bandPerformance },
    { id: 3, ...personalImages.artistCollab },
    { id: 4, ...personalImages.concertLive },
    { id: 5, ...personalImages.teachingGroup },
    { id: 6, ...personalImages.studioRecording },
    // 修复workshopTeaching图片路径，直接使用midiyinyuejie.JPG
    { 
      id: 7, 
      src: '/images/students/personal/jiaoxue/midiyinyuejie.JPG',
      alt: 'MIDI音乐节教学',
      title: 'MIDI音乐节',
      description: '专业打击乐教学工作坊'
    },
    // 使用新的演出照片替代重复的centralMusic
    { 
      id: 8, 
      src: '/images/students/personal/yanchu/haohanyanchu3.JPG',
      alt: '舞台演出照片',
      title: '专业舞台表演',
      description: '大型音乐会精彩瞬间'
    },
    // 使用新的个人照片替代重复的artistCollab
    { 
      id: 9, 
      src: '/images/personal/artist-collab-2.jpg',
      alt: '与代言人合作照片',
      title: '品牌代言合作',
      description: '与国际知名品牌代言人合作'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 分类导航 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'all' 
              ? 'bg-gradient-to-r from-accent-dark to-accent text-white shadow-lg shadow-accent/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            全部
          </button>
          <button 
            onClick={() => setSelectedCategory('stage')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'stage' 
              ? 'bg-gradient-to-r from-accent-dark to-accent text-white shadow-lg shadow-accent/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            舞台表演
          </button>
          <button 
            onClick={() => setSelectedCategory('band')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'band' 
              ? 'bg-gradient-to-r from-accent-dark to-accent text-white shadow-lg shadow-accent/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            乐队合作
          </button>
          <button 
            onClick={() => setSelectedCategory('brand')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'brand' 
              ? 'bg-gradient-to-r from-accent-dark to-accent text-white shadow-lg shadow-accent/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            品牌活动
          </button>
          <button 
            onClick={() => setSelectedCategory('personal')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === 'personal' 
              ? 'bg-gradient-to-r from-accent-dark to-accent text-white shadow-lg shadow-accent/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            个人演出
          </button>
        </div>

        {/* 照片网格 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-accent/10 transition-all duration-500 border border-gray-700/50"
              onClick={() => setSelectedImage(image)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              <button 
                className="absolute top-2 right-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-full p-2 transition-colors backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;