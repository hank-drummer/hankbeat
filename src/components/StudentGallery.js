import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { studentGroups } from '../data/studentGroups';
import StudentDetailView from './StudentDetailView';

const StudentGallery = () => {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const allStudents = studentGroups.reduce((acc, group) => {
    return [...acc, ...group.students];
  }, []);

  const filteredStudents = selectedGroup === 'all'
    ? allStudents
    : studentGroups.find(group => group.id === selectedGroup)?.students || [];

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
          优秀学员展示
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-center mb-12 max-w-3xl mx-auto"
        >
          这些优秀学员在各自的音乐领域取得了显著成就，展现了扎实的技术功底和独特的艺术表现力
        </motion.p>
        
        {/* 分类导航 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setSelectedGroup('all')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedGroup === 'all' 
              ? 'bg-gradient-to-r from-accent-dark to-accent text-white shadow-lg shadow-accent/30' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            全部
          </button>
          {studentGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${selectedGroup === group.id 
                ? group.id === 'professional' 
                  ? 'bg-gradient-to-r from-professional to-drum-gold text-white shadow-lg shadow-drum-gold/30'
                  : 'bg-gradient-to-r from-future to-accent text-white shadow-lg shadow-accent/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* 学员卡片网格 */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedGroup} // 切换类别时重新触发动画
        >
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              variants={itemVariants}
              className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-accent/10 transition-all duration-500 border border-gray-700/50 cursor-pointer"
              onClick={() => setSelectedStudent(student)}
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
                {student.bilibiliUrls && student.bilibiliUrls.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">演奏视频</h4>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <iframe
                        src={`//player.bilibili.com/player.html?bvid=${student.bilibiliUrls[0].split('/BV')[1]}`}
                        title={`${student.name}的演奏视频`}
                        className="w-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        scrolling="no"
                        border="0"
                        frameBorder="no"
                        framespacing="0"
                      ></iframe>
                    </div>
                    {student.bilibiliUrls.length > 1 && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-400 mb-2">更多视频:</p>
                        <div className="flex flex-wrap gap-2">
                          {student.bilibiliUrls.slice(1, 4).map((url, idx) => (
                            <a 
                              key={idx} 
                              href={url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 text-xs rounded-full transition-colors"
                            >
                              视频 {idx + 2}
                            </a>
                          ))}
                          {student.bilibiliUrls.length > 4 && (
                            <a 
                              href={student.bilibiliUrls[0].split('/video')[0]} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-3 py-1 bg-accent/20 hover:bg-accent/30 text-accent-light text-xs rounded-full transition-colors"
                            >
                              查看全部
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {student.videoId && !student.bilibiliUrls && (
                  <div className="mb-6 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${student.videoId}`}
                      title={`${student.name}的演奏视频`}
                      className="w-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
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

      {/* 学员详细信息弹窗 */}
      {selectedStudent && (
        <StudentDetailView 
          student={selectedStudent} 
          onClose={() => setSelectedStudent(null)} 
        />
      )}
    </div>
  );
};

export default StudentGallery;