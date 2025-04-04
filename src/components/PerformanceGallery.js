import React from 'react';
import { motion } from 'framer-motion';

const PerformanceGallery = () => {
  const performances = [
    {
      id: 1,
      title: '国际赛事',
      description: '香港国际鼓手节亚太区公开组冠军',
      image: '/images/awards/asia-pacific-winner.jpg',
      details: [
        '2017年香港国际鼓手节亚太区公开组冠军',
        '专业TAMA架子鼓演奏家',
        '国际赛事评委资格',
        '丰富的国际舞台表演经验'
      ]
    },
    {
      id: 2,
      title: '现场演出',
      description: '专业舞台表演',
      image: '/images/performances/stage-performance.jpg',
      details: [
        '大型音乐节现场演出',
        '爵士乐团表演',
        '商业演出活动'
      ]
    },
    {
      id: 3,
      title: '教学培训',
      description: '专业鼓手培训',
      image: '/images/drum-teaching-session.jpg',
      details: [
        '中央音乐学院认证教师',
        '个性化教学方案',
        '丰富的教学经验'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
      {performances.map((performance, index) => (
        <motion.div 
          key={performance.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: index * 0.3,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -10,
            transition: { duration: 0.2 }
          }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={performance.image}
              alt={performance.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">{performance.title}</h3>
            <p className="text-gray-300 mb-4">{performance.description}</p>
            <ul className="space-y-2">
              {performance.details.map((detail, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PerformanceGallery;