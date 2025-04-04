// 学员数据配置文件
const studentData = {
  master: [
    {
      id: 'hrj001',
      name: '黄仁俊',
      age: 23,
      years: 8,
      achievements: [
        '师从郝汉(中央音乐学院全国架子鼓导师)、坂本健志(Berklee音乐学院)',
        '北京现代音乐学院爵士院爵士鼓专业',
        '北京航天航空大学管乐团打击乐部教师',
        '北航附中管乐团打击乐部教师',
        '荣获北京市"校园之星"比赛优秀指导教师'
      ],
      image: '/images/students/performance/huangrenjun.jpg',
      videoId: 'xyz789'
    },
    {
      id: 'master-2',
      name: '李俊贤',
      achievements: [
        '香港国际鼓手节亚太公开组5强',
        '日本爵士鼓大赛亚军',
        'Soultone镲片代言人',
        'MIDI音乐节特邀嘉宾'
      ],
      image: '/images/students/creative/lijunxian.jpg',
      videoId: 'xyz123'
    },
    {
      id: 'master-3',
      name: '杨诚',
      achievements: [
        '中国传媒大学编曲专业',
        '香港国际鼓手节亚太公开组亚军',
        '上海音乐学院打击乐三试通过',
        '跨界音乐制作进行中'
      ],
      image: '/images/students/professional/yangcheng.jpg',
      videoId: 'abc456'
    }
  ],
  creator: [
      {
        id: 'sjz001',
        name: '施俊哲',
        age: 18,
        years: 3,
        achievements: [
          '金属/双踩鼓专攻',
          '已掌握中速双踩与激流金属基础',
          '正在突破极端速度与复合节奏',
          '当前曲目: War Ensemble (Slayer)',
          '目标曲目: Bleed (Meshuggah)'
        ],
        image: '/images/students/creative/shijunzhe.jpg',
        videoId: 'def789'
      },
      {
        id: 'dc001',
        name: '邓川',
        age: 18,
        years: 3,
        achievements: [
          '墩墩打击乐大赛特金奖',
          '深圳打击乐节冠军',
          '中国好鼓手全国总决赛32强',
          '电子/编程化方向专攻'
        ],
        image: '/images/students/professional/dengchuan.jpg',
        videoId: 'jkl345'
      },
      {
        id: 'mdl001',
        name: '苗德林',
        age: 18,
        years: 4,
        achievements: [
          '深圳市青少年艺术节金奖',
          '华南地区打击乐比赛特等奖',
          '当前学习: 现代电子节奏创作',
          '目标曲目: Bleed (Meshuggah)'
        ],
        image: '/images/students/miaodelin.jpg'
      }
    ],
  innovator: [
    {
      id: 'innovator-1',
      name: '陈浩宇',
      age: 16,
      years: 2,
      achievements: [
        '中考考学全类音乐第一名',
        '特招加分入学',
        '当前学习: 电子音乐编程与创作'
      ],
      image: '/images/students/chenhaoyu.jpg',
      videoId: 'pqr789'
    }
  ]
};

// 分组配置
const groupConfigs = {
  master: {
    category: 'FUTURE MASTER · 专业班',
    description: '引领电子打击乐艺术创新',
    bgColor: 'bg-gradient-to-br from-amber-900/50 via-rose-900/30 to-pink-800/30',
    dotColor: 'bg-amber-400'
  },
  creator: {
    category: 'FUTURE CREATOR · 进阶班',
    description: '探索多元音乐风格，突破技术边界',
    bgColor: 'bg-gradient-to-br from-rose-900/50 via-purple-900/30 to-fuchsia-800/30',
    dotColor: 'bg-rose-400'
  },
  innovator: {
    category: 'FUTURE INNOVATOR · 创新班',
    description: '融合传统与电子，打造个人风格',
    bgColor: 'bg-gradient-to-br from-fuchsia-900/50 via-purple-900/30 to-violet-800/30',
    dotColor: 'bg-fuchsia-400'
  }
};

// 导出学员分组数据
export const studentGroups = Object.entries(groupConfigs).map(([key, config]) => ({
  id: key,
  ...config,
  students: studentData[key]
}));