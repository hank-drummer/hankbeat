import React from 'react';
import { motion } from 'framer-motion';
import { outstandingStudents } from '../data/outstandingStudents';

const OutstandingStudentsSection = () => {
  // 动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
          优秀学员风采
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-center mb-12 max-w-3xl mx-auto"
        >
          这些优秀学员在各自的音乐领域取得了显著成就，展现了扎实的技术功底和独特的艺术表现力
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {outstandingStudents.map((student) => (
            <motion.div
              key={student.id}
              variants={itemVariants}
              className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-accent/10 transition-all duration-500 border border-gray-700/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={student.image}
                  alt={`${student.name}的照片`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{student.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{student.description}</p>
                <div className="space-y-2.5">
                  {student.achievements && student.achievements.length > 0 ? (
                    student.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        <p className="text-gray-300 text-sm">{achievement}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm italic">暂无成就记录</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OutstandingStudentsSection;