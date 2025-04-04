import React from 'react';
import { motion } from 'framer-motion';
import { teachingImages } from '../data/images';

const TeachingGallery = () => {
  // 从teachingImages中提取中央音乐学院师资培训相关的图片
  const trainingImages = [
    teachingImages.centralMusicTraining1,
    teachingImages.centralMusicTraining2,
    teachingImages.centralMusicTraining3,
    teachingImages.centralMusicTraining4,
    teachingImages.centralMusicSuzhou,
    teachingImages.centralMusicGroup1
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          中央音乐学院师资培训
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
        >
          作为中央音乐学院认证教师，参与全国音乐教师种子人才培养项目，致力于提升打击乐教育水平
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg text-white font-medium"
          >
            专业打击乐培训
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeachingGallery;