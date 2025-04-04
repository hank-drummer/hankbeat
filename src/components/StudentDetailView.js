import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentDetailView = ({ student, onClose }) => {
  const [activeTab, setActiveTab] = useState('intro');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // 获取学生证书图片
  const getCertificateImages = (studentId) => {
    // 这里根据学生ID返回对应的证书图片
    // 实际项目中可能需要从API或配置文件中获取
    const certificateMap = {
      'lmq001': [
        {
          id: 1,
          src: '/images/students/future/laimuqing/laimuqinghanyujieguanjun.jpg',
          alt: '赖沐卿汉语节冠军证书',
          title: '汉语节器乐冠军',
          description: '全国汉语节器乐比赛冠军证书'
        },
        {
          id: 2,
          src: '/images/students/future/laimuqing/muqingshenzhenguanjun.jpg',
          alt: '赖沐卿深圳打击乐节冠军证书',
          title: '深圳打击乐节冠军',
          description: '深圳市打击乐节比赛冠军证书'
        },
        {
          id: 3,
          src: '/images/students/future/laimuqing/laimuqingkaoji.HEIC',
          alt: '赖沐卿考级证书',
          title: '英国圣三一7级证书',
          description: '英国圣三一学院爵士鼓7级证书'
        },
        {
          id: 4,
          src: '/images/students/future/laimuqing/laimuqingzhengshu.HEIC',
          alt: '赖沐卿获奖证书',
          title: '全国青少年打击乐大赛金奖',
          description: '全国青少年打击乐比赛金奖证书'
        }
      ],
      // 其他学生的证书可以在这里添加
      'dc001': [
        {
          id: 1,
          src: '/images/students/future/dengchuan/dengchuanjinjiang.JPG',
          alt: '邓川获奖证书',
          title: '重庆市打击乐大赛特金奖',
          description: '重庆市打击乐比赛特金奖证书'
        }
      ],
      // 默认返回空数组
      'default': []
    };
    
    return certificateMap[studentId] || certificateMap['default'];
  };

  const certificates = getCertificateImages(student.id);

  // 动画配置
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* 关闭按钮 */}
        <button 
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors z-10"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* 左侧学员信息 */}
          <div className="md:w-1/3 p-6 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <img
                src={student.image}
                alt={`${student.name}的照片`}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{student.name}</h2>
            
            {/* 标签导航 */}
            <div className="flex flex-wrap gap-2 mt-6">
              <button
                onClick={() => setActiveTab('intro')}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${activeTab === 'intro' 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'}`}
              >
                个人介绍
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${activeTab === 'videos' 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'}`}
              >
                演奏视频
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${activeTab === 'certificates' 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'}`}
                disabled={certificates.length === 0}
              >
                获奖证书
                {certificates.length > 0 && (
                  <span className="ml-1 bg-accent/80 text-white text-xs rounded-full px-1.5">
                    {certificates.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="md:w-2/3 p-6 overflow-y-auto max-h-[70vh] md:max-h-[90vh]">
            <AnimatePresence mode="wait">
              {activeTab === 'intro' && (
                <motion.div
                  key="intro"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">个人成就</h3>
                  <div className="space-y-2.5">
                    {student.achievements && student.achievements.length > 0 ? (
                      student.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                          <p className="text-gray-300">{achievement}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 italic">暂无成就记录</p>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'videos' && (
                <motion.div
                  key="videos"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">演奏视频</h3>
                  {student.bilibiliUrls && student.bilibiliUrls.length > 0 ? (
                    <div className="space-y-6">
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
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">更多视频</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {student.bilibiliUrls.slice(1).map((url, idx) => (
                              <a 
                                key={idx} 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition-colors flex items-center justify-center"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                视频 {idx + 2}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-400 italic">暂无视频</p>
                  )}
                </motion.div>
              )}

              {activeTab === 'certificates' && (
                <motion.div
                  key="certificates"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">获奖证书</h3>
                  {certificates.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                      {certificates.map((cert) => (
                        <div 
                          key={cert.id} 
                          className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                          onClick={() => setSelectedCertificate(cert)}
                        >
                          <div className="h-40 overflow-hidden">
                            <img 
                              src={cert.src} 
                              alt={cert.alt} 
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-3">
                            <h4 className="text-white font-medium text-sm">{cert.title}</h4>
                            <p className="text-gray-400 text-xs mt-1">{cert.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 italic">暂无证书</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 证书查看弹窗 */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <img 
              src={selectedCertificate.src} 
              alt={selectedCertificate.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="bg-black/70 p-4 absolute bottom-0 left-0 right-0">
              <h3 className="text-xl font-bold text-white">{selectedCertificate.title}</h3>
              <p className="text-gray-300">{selectedCertificate.description}</p>
            </div>
            <button 
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCertificate(null);
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
  );
};

export default StudentDetailView;