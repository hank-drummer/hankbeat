import React from 'react';
import { motion } from 'framer-motion';

const StudentCategories = () => {
  const categories = [
    {
      id: 1,
      title: '少儿启蒙',
      description: '针对4-12岁儿童，培养音乐兴趣，发展节奏感和协调能力',
      features: ['基础节奏训练', '音乐游戏', '简单乐器演奏']
    },
    {
      id: 2,
      title: '青少年进阶',
      description: '适合13-18岁青少年，系统学习打击乐技巧',
      features: ['专业技巧训练', '乐理知识', '舞台表演']
    },
    {
      id: 3,
      title: '成人兴趣',
      description: '为成人提供灵活的学习计划，享受音乐带来的快乐',
      features: ['个性化课程', '压力释放', '音乐社交']
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900/80 to-gray-950/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">学员分类</h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">根据学员年龄和学习目标，我们提供个性化的专业课程</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/30 hover:shadow-accent/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 pb-2 border-b border-gray-700/50">{category.title}</h3>
              <p className="text-gray-300 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.features.map((feature, i) => (
                  <li key={i} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCategories;