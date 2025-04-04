import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    {
      year: '2017',
      title: '香港国际鼓手节冠军',
      description: '在亚太地区最具影响力的鼓手比赛中获得公开组冠军',
      image: '/images/awards/asia-pacific-winner.jpg'
    },
    {
      year: '2019',
      title: '中央音乐学院教师培训',
      description: '参与中央音乐学院全国音乐教师种子人才培养项目',
      image: '/images/central-music-training.jpg'
    },
    {
      year: '2015-至今',
      title: '专业演出与教学',
      description: '创立MOGO爵士大乐队，活跃于深圳爵士音乐圈',
      image: '/images/drum-teaching-session.jpg'
    },
    {
      year: '2016',
      title: '新加坡国际音乐节',
      description: '担任中国区评委，推广音乐教育',
      image: '/images/central-music-group.jpg'
    }
  ];

  return (
    <div className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">职业生涯里程碑</h2>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;