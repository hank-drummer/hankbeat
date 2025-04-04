import React from 'react';
import { motion } from 'framer-motion';

const ArtExam = () => {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">艺考专区</h1>
        
        {/* 艺考专区部分 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-lg p-8 mt-8 border border-accent/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-accent">Hank爵士鼓艺考体系</h2>
          <h3 className="text-xl font-semibold mb-6 text-white text-center">考场直通战略（联考大数据+校考精准突破）</h3>
          
          {/* 教师核心优势 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">【教师核心优势】</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 p-6 rounded-lg border-l-4 border-accent"
              >
                <h4 className="text-xl font-bold text-white mb-3">① 考场透视眼</h4>
                <p className="text-gray-300 mb-3 font-medium">深谙各省联考「隐形评分规则」：</p>
                <p className="text-gray-400 mb-2">广东统考重基本功颗粒度 / 浙江必考复合拍视奏 / 湖南偏爱现代编创能力</p>
                <p className="text-gray-300 mb-3 font-medium">破解九大音乐学院校考偏好：</p>
                <p className="text-gray-400">校考即兴逻辑 / 风格广度 / 舞台掌控力</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 p-6 rounded-lg border-l-4 border-accent"
              >
                <h4 className="text-xl font-bold text-white mb-3">② 实战派教学法</h4>
                <p className="text-gray-300 mb-3 font-medium">曲目反侦察系统：</p>
                <p className="text-gray-400 mb-3">为每位学生定制「3+2曲库」：<br />3首保底型考试曲（适配80%院校）<br />2首杀手锏曲目（专攻目标院校口味）</p>
                <p className="text-gray-300 mb-3 font-medium">失误预冻结技术：</p>
                <p className="text-gray-400">通过音频分析锁定学生「危险小节」<br />针对性设计抗干扰训练</p>
              </motion.div>
            </div>
          </div>
          
          {/* 艺考阶段作战表 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">【艺考阶段作战表】<span className="text-gray-400 text-lg font-normal">高一至高二上学期开始</span></h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 p-6 rounded-lg border-l-4 border-blue-500"
              >
                <h4 className="text-xl font-bold text-white mb-3">▌筑基期（3-6月）</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent">✓</span>
                    <p className="text-gray-300">手脚分离特训：开发四肢独立运算能力（如左手画圆右手画方）</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent">✓</span>
                    <p className="text-gray-300">联考曲目预埋：提前植入本省高频考点节奏型</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent">✓</span>
                    <p className="text-gray-300">文化课防塌方：制定鼓谱记忆法背文科考点</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/5 p-6 rounded-lg border-l-4 border-purple-500"
              >
                <h4 className="text-xl font-bold text-white mb-3">▌爆发期（7-8月）</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent">✓</span>
                    <p className="text-gray-300 font-medium">每天4小时「电竞式训练」：</p>
                  </div>
                  <div className="ml-6 space-y-2">
                    <p className="text-gray-400">上午：风格切换魔鬼题（2小节换1种风格）</p>
                    <p className="text-gray-400">下午：视奏速度生死线（江浙沪联考标准160bpm）</p>
                    <p className="text-gray-400">晚间：即兴造句实验室（储备500+动机模块）</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/5 p-6 rounded-lg border-l-4 border-pink-500"
              >
                <h4 className="text-xl font-bold text-white mb-3">▌收割期（9-3月）</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent">✓</span>
                    <p className="text-gray-300 font-medium">每周「过堂模考」：</p>
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-400">还原目标院校考场配置</p>
                  </div>
                  <div className="flex items-start space-x-3 mt-2">
                    <span className="text-accent">✓</span>
                    <p className="text-gray-300 font-medium">校考行程兵器包：</p>
                  </div>
                  <div className="ml-6 space-y-2">
                    <p className="text-gray-400">各考场声场调整方案</p>
                    <p className="text-gray-400">突发天气/交通应对预案</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* 学员战绩可视化 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">【学员战绩可视化】</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/5 p-6 rounded-lg border border-accent/30"
            >
              <h4 className="text-xl font-bold text-white mb-3 text-center">联考数据池</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
                  <p className="text-gray-300 text-center">多年广东省统考第一</p>
                </div>
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
                  <p className="text-gray-300 text-center">多名优秀学员顺利进入理想大学</p>
                </div>
                <div className="flex items-center justify-center p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
                  <p className="text-gray-300 text-center">多名优秀毕业生发挥在音乐行业前线</p>
                </div>
              </div>
            </motion.div>
            
            {/* 艺考成功案例展示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 bg-white/5 p-6 rounded-lg border border-accent/30 overflow-visible"
            >
              <h4 className="text-xl font-bold text-white mb-5 text-center">部分艺考成功案例</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-visible rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
                >
                  <img 
                    src="/images/students/professional/yangcheng/yangchengyikaoruqu.jpg" 
                    alt="杨成艺考录取通知书" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4 bg-gray-800/80">
                    <h4 className="text-lg font-semibold text-white">杨成 - 中国传媒大学</h4>
                    <p className="text-gray-400 text-sm">专业编曲专业录取通知书，顺利通过校考</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="overflow-visible rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
                >
                  <img 
                    src="/images/students/professional/zouyuchen/zouyuchenliankaodiyi.jpg" 
                    alt="邹宇辰联考第一" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4 bg-gray-800/80">
                    <h4 className="text-lg font-semibold text-white">邹宇辰 - 联考成绩单</h4>
                    <p className="text-gray-400 text-sm">广东省艺术类专业统考优异成绩，为校考奠定基础</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="overflow-visible rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
                >
                  <img 
                    src="/images/students/future/chenhaoyu/chenhaoyu2.JPG" 
                    alt="陈浩宇考试成绩单" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4 bg-gray-800/80">
                    <h4 className="text-lg font-semibold text-white">陈浩宇 - 中考专业成绩</h4>
                    <p className="text-gray-400 text-sm">中考音乐专业考试优异成绩，获得特招加分入学</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* 家长必读三件事 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">【家长必读三件事】</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white/5 p-6 rounded-lg border-t-4 border-accent"
              >
                <h4 className="text-lg font-bold text-white mb-3">设备不是玄学</h4>
                <p className="text-gray-400">根据目标院校风格等配鼓棒</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-white/5 p-6 rounded-lg border-t-4 border-accent"
              >
                <h4 className="text-lg font-bold text-white mb-3">选曲决定生死</h4>
                <p className="text-gray-400">慎选抖音网红曲、无效的曲目、无效的练习</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white/5 p-6 rounded-lg border-t-4 border-accent"
              >
                <h4 className="text-lg font-bold text-white mb-3">文化课止损点</h4>
                <p className="text-gray-400">专业集训期每日保留文化课学习时长</p>
              </motion.div>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-amber-300 font-medium">注：每年仅收1名艺考生</p>
            
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 italic">"考试不仅是打鼓，也是用鼓打一场信息战,更是热爱"</p>
              <p className="text-gray-400 text-sm mt-2">——Hank老师执教</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArtExam;