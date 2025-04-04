import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VideoGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const videos = [
    {
      id: 13,
      title: '爵士鼓演奏专场',
      description: '精彩爵士鼓演奏专场视频',
      videoUrl: '//player.bilibili.com/player.html?bvid=BV1hit5eXEye',
      date: '2023年',
      category: '专场演出',
      duration: '15:30'
    },
    {
      id: 12,
      title: '爵士鼓演奏专场',
      description: '精彩爵士鼓演奏专场视频',
      videoUrl: '//player.bilibili.com/player.html?bvid=BV15ytpeJEam',
      date: '2023年',
      category: '专场演出',
      duration: '12:45'
    },
    {
      id: 11,
      title: '爵士鼓演奏专场',
      description: '精彩爵士鼓演奏专场视频',
      videoUrl: '//player.bilibili.com/player.html?bvid=BV1TktZeBEef',
      date: '2023年',
      category: '专场演出',
      duration: '18:20'
    },
    {
      id: 10,
      title: '爵士鼓即兴演奏',
      description: '个人爵士鼓即兴演奏视频展示',
      videoUrl: '//player.bilibili.com/player.html?bvid=BV1jgDNYgEGY',
      date: '2023年',
      category: '即兴演奏',
      duration: '10:15'
    },
    {
      id: 9,
      title: '学员成果展示',
      description: '优秀学员爵士鼓表演视频',
      videoUrl: '//player.bilibili.com/player.html?bvid=BV1MsXQYAEWr',
      date: '2023年',
      category: '学员展示',
      duration: '08:45'
    },
    {
      id: 8,
      title: '教学成果展示',
      description: '爵士鼓教学成果汇报演出',
      videoUrl: '//player.bilibili.com/player.html?bvid=BV1CVNbesEyr',
      date: '2022年',
      category: '学员展示',
      duration: '11:20'
    },
    {
      id: 7,
      title: '鼓手技巧展示',
      description: '专业鼓手技巧与风格展示',
      videoUrl: '//player.bilibili.com/player.html?bvid=BV1yVNbesETL',
      date: '2022年',
      category: '技巧展示',
      duration: '09:30'
    },
  ];

  // 获取所有视频分类
  const categories = ['all', ...new Set(videos.map(video => video.category))];
  
  // 根据选中的分类筛选视频
  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold mb-8 text-white text-center">视频展示</h2>
      <p className="text-xl text-gray-300 text-center mb-12">精选演出视频 | 现场表演实录 | 教学成果展示</p>
      
      {/* 分类筛选按钮 */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-accent-dark to-accent text-white shadow-lg shadow-accent/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category === 'all' ? '全部' : category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.videoUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                scrolling="no"
                border="0"
                frameBorder="no"
                framespacing="0"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  {video.category}
                </span>
                <span className="text-sm text-gray-500">{video.duration}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white hover:text-blue-400 transition-colors">
                {video.title}
              </h3>
              <p className="text-gray-400 mb-3">{video.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{video.date}</span>
                <motion.a
                  href={`https://www.bilibili.com/video/${video.videoUrl.split('bvid=')[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                >
                  观看完整视频
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;