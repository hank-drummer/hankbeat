import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const certifications = [
    {
      title: 'Soundwave Master',
      description: '品牌国际代言人'
    },
    {
      title: 'Soultone Cymbel',
      description: '品牌国际代言人'
    },
    {
      title: '亚太国际鼓手节',
      description: '公开组冠军'
    },
    {
      title: '中央音乐学院',
      description: '全国爵士鼓师资培训导师'
    },
    {
      title: '香港国际鼓手节',
      description: '签约大使'
    },
    {
      title: '上海乐器展',
      description: '表演嘉宾'
    }
  ];

  const experiences = [
    {
      title: '中央音乐学院',
      description: '全国爵士鼓师资培训导师、全国音乐教师种子人才培养项目导师'
    },
    {
      title: '亚太国际鼓手节',
      description: '公开组冠军、评委、签约艺术家'
    },
    {
      title: '香港国际鼓手节',
      description: '签约大使、评委、特邀表演嘉宾'
    },
    {
      title: '上海乐器展',
      description: '特邀表演嘉宾、大师课讲师'
    },
    {
      title: '教学成就',
      description: '培训出全国几百位优秀鼓手老师，多名学生在国内外比赛中获奖'
    },
    {
      title: '专业指导',
      description: '深圳打击乐大赛优秀指导老师、多名学生在"特长生中国"、"薪火杯"等比赛荣获特等奖'
    }
  ];

  const achievements = [
    {
      description: '日本爵士鼓大赛亚军、香港国际鼓手节亚太青少组亚军、全国数字音乐大赛冠军'
    },
    {
      description: '深圳打击乐节蝉联冠军、广西第三音乐总冠军、YAMAHA爵士鼓大赛冠军'
    },
    {
      description: '香港国际鼓手节亚太公开组亚军、香港国际鼓手节中国赛区亚太公开组冠军、香港国际鼓手节亚太公开组小军鼓亚军'
    },
    {
      description: '香港国际鼓手节亚太青少组亚军、香港国际鼓手节亚太公开组5强、日本爵士鼓大赛亚军'
    },
    {
      description: '中国好鼓手全国总决赛32强、重庆市打击乐大赛特金奖、深圳打击乐节冠军'
    },
    {
      description: 'MIDI音乐节特邀嘉宾、全国数字音乐大赛金奖、多个音乐教育机构特聘讲师'
    },
    {
      description: '深圳市青少年艺术节金奖、华南地区打击乐比赛特等奖、校园音乐节最佳表演奖'
    },
    {
      description: '英国圣三一8级(满级)优秀、华南三省爵士鼓冠军、电子音乐创作新星'
    }
  ];

  const collaborations = [
    {
      description: '合作艺人：刘聪、吴莫愁、廖昌永'
    },
    {
      description: '参与多个大型音乐节、电视节目和商业演出，包括MIDI音乐节、摩登天空音乐节、草莓音乐节等'
    },
    {
      description: '与多个国际知名乐器品牌合作，担任Soundwave Master和Soultone Cymbel品牌国际代言人'
    }
  ];

  const teachingMethod = [
    {
      title: '即兴代入法',
      description: '独创教学方法，帮助学生快速掌握节奏感和音乐表现力，提升演奏技巧'
    },
    {
      title: '个性化培养',
      description: '根据学生特点定制教学计划，因材施教，挖掘学生潜力'
    },
    {
      title: '多元音乐融合',
      description: '融合爵士、摇滚、电子等多种音乐元素，拓展学生音乐视野'
    },
    {
      title: '舞台实践',
      description: '定期组织学生参与演出和比赛，积累舞台经验，提升实战能力'
    },
    {
      title: '专业考级指导',
      description: '针对英国圣三一、国内音乐学院等考级提供专业指导，助力学生顺利通过考试'
    }
  ];

  const studentAchievements = [
    {
      name: '杨诚',
      achievements: [
        '中国传媒大学编曲专业',
        '上海音乐学院打击乐三试通过',
        '香港国际鼓手节亚太公开组亚军',
        '香港国际鼓手节中国赛区亚太公开组冠军'
      ]
    },
    {
      name: '李俊贤',
      achievements: [
        '香港国际鼓手节亚太青少组亚军',
        '香港国际鼓手节亚太公开组5强',
        '日本爵士鼓大赛亚军',
        'Soultone镲片代言人',
        '全国数字音乐大赛冠军'
      ]
    },
    {
      name: '黄仁俊',
      achievements: [
        '北京现代音乐学院爵士院爵士鼓专业',
        '北京航天航空大学管乐团打击乐部教师',
        '北航附中管乐团打击乐部教师',
        '多名学生在比赛中获得特等奖'
      ]
    },
    {
      name: '邓川',
      achievements: [
        '电子/编程化方向专攻',
        'chester音乐大赛特金奖',
        '深圳打击乐节冠军',
        '中国好鼓手全国总决赛32强'
      ]
    },
    {
      name: '优秀学员考学成果',
      achievements: [
        '美国加州大学',
        '沈阳音乐学院',
        '上海音乐学院',
        '浙江音乐学院',
        '中国传媒大学',
        '多年广东省高考爵士鼓艺考第一',
        '连续深圳市中考爵士鼓顺利升学'
      ]
    },
    {
      name: '优秀学员比赛成果',
      achievements: [
        '日本鼓手节第一',
        '亚太国际鼓手节公开组第二',
        '亚太国际鼓手节青年组第二',
        '深圳打击乐节蝉联冠军',
        '广东广西福建三省总冠军',
        'Yamaha爵士鼓大赛冠军',
        '重庆打击乐大赛冠军',
        '多年广东省高考爵士鼓艺考第一',
        '连续深圳市中考爵士鼓顺利升学',
        '全国所有音乐学院考级全满级'
      ]
    }
  ];

  const skills = [
    {
      name: '爵士鼓演奏',
      level: 95,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: '音乐理论',
      level: 85,
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: '编曲制作',
      level: 80,
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      name: '舞台表演',
      level: 90,
      color: 'from-pink-500 to-pink-700'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">关于我</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* 图片部分移到上方 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.img
                src="/images/teaching/central-music-training-1.jpg"
                alt="中央音乐学院培训"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src="/images/teaching/central-music-group-1.jpg"
                alt="音乐教师培训"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
            <motion.img
              src="/images/drum-teaching-session.jpg"
              alt="打击乐教学"
              className="w-full h-64 object-cover rounded-lg mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            
            {/* 文字内容部分 */}
            <h2 className="text-2xl font-semibold mb-4">专业背景</h2>
            <p className="text-gray-300 leading-relaxed">
              作为一名专业打击乐教师和演奏者，我在中央音乐学院接受了系统的音乐教育和专业培训。多年以来，我致力于打击乐教学和表演，积累了丰富的教学经验和舞台经验。
            </p>
            <p className="text-gray-300 leading-relaxed">
              我参与过多个重要的音乐教育项目，包括中央音乐学院"央音"种子人才培养计划与音乐教师岗位能力培训项目。作为导师，我培训出全国几百位优秀鼓手老师，一直活跃于一线演出现场和幕后制作。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* 图片部分移到上方 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.img
                src="/images/students/personal/yanchu/haohanlive1.JPG"
                alt="舞台活动照片"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src="/images/students/personal/yanchu/haohanyumingxing.JPG"
                alt="艺人合作照片"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
            <motion.img
              src="/images/students/personal/yanchu/haohanyuedui.JPG"
              alt="乐队演出照片"
              className="w-full h-64 object-cover rounded-lg mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            
            <h2 className="text-2xl font-semibold mb-4">演出经历</h2>
            <p className="text-gray-300 leading-relaxed">
              我曾参与众多大型音乐节和商业演出，与多位知名艺人合作。在舞台上，我追求精准的节奏把控和富有感染力的表演，为观众带来震撼的音乐体验。
            </p>
            <p className="text-gray-300 leading-relaxed">
              作为一名职业鼓手，我熟悉各种风格的音乐，能够快速适应不同的演出环境和要求，为乐队和艺人提供稳定而富有创意的节奏支持。
            </p>
          </motion.div>
        </div>



        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-white text-center">个人专业成就</h2>
          
          {/* 亚太鼓手节获奖照片展示 */}
          <h3 className="text-2xl font-bold mb-6 text-white text-center">亚太鼓手节冠军</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              <img 
                src="/images/awards/asia-pacific-certificate.jpg" 
                alt="亚太鼓手节冠军证书" 
                className="w-full h-64 object-contain bg-gray-800"
              />
              <div className="p-4 bg-gray-800/80">
                <h4 className="text-lg font-semibold text-white">亚太鼓手节冠军证书</h4>
                <p className="text-gray-400 text-sm">亚太地区顶级打击乐比赛冠军荣誉</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              <img 
                src="/images/awards/asia-pacific-performance.jpg" 
                alt="亚太鼓手节表演照片" 
                className="w-full h-64 object-contain bg-gray-800"
              />
              <div className="p-4 bg-gray-800/80">
                <h4 className="text-lg font-semibold text-white">亚太鼓手节现场表演</h4>
                <p className="text-gray-400 text-sm">国际级比赛现场演出瞬间</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              <img 
                src="/images/awards/asia-pacific-award.jpg" 
                alt="亚太鼓手节获奖照片" 
                className="w-full h-64 object-contain bg-gray-800"
              />
              <div className="p-4 bg-gray-800/80">
                <h4 className="text-lg font-semibold text-white">亚太鼓手节获奖现场</h4>
                <p className="text-gray-400 text-sm">与其他获奖选手合影留念</p>
              </div>
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-white text-center">品牌代言</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-white text-center">音乐经历</h3>
          <div className="space-y-6 mb-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-white text-center">学员荣誉</h3>
          <div className="space-y-4 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-white text-center">艺人合作</h3>
          <div className="space-y-4">
            {collaborations.map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="bg-white/5 p-6 rounded-lg text-center"
              >
                <p className="text-gray-400">{collab.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 教学理念与学员成就部分 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white text-center">教学与学员成就</h2>
          
          <h3 className="text-2xl font-bold mb-6 text-white text-center">教学理念与方法</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {teachingMethod.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 p-6 rounded-lg border border-accent/20"
              >
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400">{method.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-white text-center">优秀学员成就</h3>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">以下是部分优秀学员在我的指导下取得的成就</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentAchievements.map((student, index) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-accent/10 transition-all duration-500 border border-gray-700/50 p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{student.name}</h3>
                <div className="space-y-2.5">
                  {student.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <p className="text-gray-300 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        

      </motion.div>
    </div>
  );
};

export default About;