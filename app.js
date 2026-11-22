const DIMENSIONS = [
  { key: 'clingy', label: '黏人度', color: '#ef6a4d' },
  { key: 'stable', label: '情绪稳定', color: '#4d8fd6' },
  { key: 'social', label: '社交欲', color: '#f1c64c' },
  { key: 'boundary', label: '边界感', color: '#7c9e4d' },
  { key: 'playful', label: '玩心', color: '#d96f9d' },
  { key: 'sensitive', label: '敏感度', color: '#8a72c8' }
];

const CHAPTERS = [
  {
    key: 'clingy',
    title: '被摸的时候',
    kicker: '黏人度',
    color: '#ef6a4d',
    questions: [
      {
        title: '熟人突然摸摸你的头。你的第一反应是？',
        aside: '对方没有恶意，只是表达亲近。',
        options: [
          { text: '立刻靠近，甚至还想再被摸一下', score: 5 },
          { text: '嘴上说不要，身体没有躲', score: 4 },
          { text: '看当时的心情', score: 2 },
          { text: '下意识躲开，保持距离', score: 0 }
        ]
      },
      {
        title: '一个人待了一整天，你会？',
        aside: '没有工作，也没有必须回复的消息。',
        options: [
          { text: '很想找人贴贴、聊天', score: 5 },
          { text: '会主动发几条消息找人说话', score: 4 },
          { text: '有人找就聊，没人找也行', score: 2 },
          { text: '完全不需要，独处很爽', score: 0 }
        ]
      },

      {
        title: '睡觉时你更喜欢？',
        aside: '没有标准睡姿，选最像你的。',
        options: [
          { text: '贴着人，或者一定要抱着什么', score: 5 },
          { text: '在同一个空间，但保留一点距离', score: 3 },
          { text: '自己睡自己的最舒服', score: 1 },
          { text: '谁也别碰我', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'stable',
    title: '被惹毛的时候',
    kicker: '情绪稳定',
    color: '#4d8fd6',
    questions: [
      {
        title: '约好的计划临时被取消。你会？',
        aside: '对方说临时有事，但你已经准备好了。',
        options: [
          { text: '马上找替代方案，情绪不太受影响', score: 5 },
          { text: '会不爽，但过一会儿就好了', score: 3 },
          { text: '会越想越生气', score: 1 },
          { text: '会直接炸', score: 0 }
        ]
      },
      {
        title: '别人没有经过同意动了你很在意的东西。你会？',
        aside: '东西没坏，但那是你的私人物品。',
        options: [
          { text: '先问清楚，再说明自己的界限', score: 5 },
          { text: '心里不舒服，但会忍一下', score: 2 },
          { text: '会冷脸很久', score: 1 },
          { text: '立刻发火', score: 0 }
        ]
      },

      {
        title: '情绪上来的时候，你通常？',
        aside: '没有人要求你立刻冷静。',
        options: [
          { text: '能很快意识到，并让自己停下来', score: 5 },
          { text: '需要一点时间缓冲', score: 3 },
          { text: '很难控制，但事后会后悔', score: 1 },
          { text: '先炸了再说', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'social',
    title: '有人来的时候',
    kicker: '社交欲',
    color: '#f1c64c',
    questions: [
      {
        title: '聚会上大部分都是陌生人。你会？',
        aside: '现场有熟人，但熟人也在和别人聊天。',
        options: [
          { text: '主动认识新的人', score: 5 },
          { text: '先观察，有人搭话就聊', score: 3 },
          { text: '只跟熟人待在一起', score: 1 },
          { text: '想早点回家', score: 0 }
        ]
      },
      {
        title: '朋友临时叫你参加一个很热闹的活动。你会？',
        aside: '时间来得及，只是原本打算休息。',
        options: [
          { text: '马上答应，听起来很好玩', score: 5 },
          { text: '看心情和都有谁', score: 3 },
          { text: '更想两个人安静见面', score: 1 },
          { text: '拒绝，不想临时出门', score: 0 }
        ]
      },
      {
        title: '在人多的地方待久了，你通常会？',
        aside: '活动还没有结束。',
        options: [
          { text: '越玩越兴奋', score: 5 },
          { text: '还能撑，但想坐一会儿', score: 3 },
          { text: '开始找出口', score: 1 },
          { text: '只想消失', score: 0 }
        ]
      },

    ]
  },
  {
    key: 'boundary',
    title: '别越界',
    kicker: '边界感',
    color: '#7c9e4d',
    questions: [
      {
        title: '有人没有经过同意拿了你的东西。你会？',
        aside: '对方觉得“又不是什么大事”。',
        options: [
          { text: '直接拿回来，并说清楚下次要先问', score: 5 },
          { text: '先忍一下，事后再说', score: 2 },
          { text: '心里不爽，但不说', score: 1 },
          { text: '算了，不想引起冲突', score: 0 }
        ]
      },
      {
        title: '别人追问一件你不想说的事。你会？',
        aside: '对方没有恶意，只是很好奇。',
        options: [
          { text: '明确说这个不方便聊', score: 5 },
          { text: '转移话题', score: 3 },
          { text: '随便敷衍过去', score: 1 },
          { text: '硬着头皮回答', score: 0 }
        ]
      },

      {
        title: '私人时间被临时占用。你会？',
        aside: '对方希望你现在就答应。',
        options: [
          { text: '直接拒绝，改约别的时间', score: 5 },
          { text: '看情况和关系再答应', score: 3 },
          { text: '不情愿，但还是答应', score: 1 },
          { text: '基本上都会答应', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'playful',
    title: '想玩的时候',
    kicker: '玩心',
    color: '#d96f9d',
    questions: [
      {
        title: '看到一个从没玩过的新东西。你会？',
        aside: '它看起来有点奇怪，但好像很有趣。',
        options: [
          { text: '马上研究，先玩再说', score: 5 },
          { text: '先看看别人怎么玩', score: 3 },
          { text: '有兴趣，但懒得动', score: 1 },
          { text: '不感兴趣', score: 0 }
        ]
      },
      {
        title: '晚上十一点，有人提议出去吃夜宵。你会？',
        aside: '明天不用早起。',
        options: [
          { text: '马上出门', score: 5 },
          { text: '换件衣服就出发', score: 4 },
          { text: '看当天状态', score: 2 },
          { text: '坚决不去', score: 0 }
        ]
      },

      {
        title: '别人跟你开玩笑或整蛊。你会？',
        aside: '没有恶意，只是想逗你。',
        options: [
          { text: '立刻接梗反击', score: 5 },
          { text: '觉得有趣，配合一下', score: 4 },
          { text: '看关系决定要不要玩', score: 2 },
          { text: '不喜欢，希望对方停下', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'sensitive',
    title: '情绪雷达',
    kicker: '敏感度',
    color: '#8a72c8',
    questions: [
      {
        title: '有人和你说话的语气突然变冷。你会？',
        aside: '对方没有解释发生了什么。',
        options: [
          { text: '马上察觉，并开始想是不是自己的问题', score: 5 },
          { text: '会问一句“怎么了”', score: 4 },
          { text: '过一会儿才反应过来', score: 2 },
          { text: '基本不会注意', score: 0 }
        ]
      },
      {
        title: '在很吵、人很多的地方，你通常会？',
        aside: '你还要在那里待上一段时间。',
        options: [
          { text: '很容易烦躁，想尽快离开', score: 5 },
          { text: '能忍，但会开始累', score: 3 },
          { text: '还好', score: 1 },
          { text: '越热闹越有劲', score: 0 }
        ]
      },
      {
        title: '别人给你一句不太好的评价。你会？',
        aside: '对方说完就去忙别的了。',
        options: [
          { text: '会记很久', score: 5 },
          { text: '会想一阵子', score: 3 },
          { text: '不爽一下就好', score: 1 },
          { text: '完全不在意', score: 0 }
        ]
      },

    ]
  }
];

const PERSONAS = [
  {
    code: 'NO. 01', name: '布偶猫', title: '黏人精本精',
    tagline: '看起来优雅，实际一关门就开始找你。',
    description: '你很容易对人产生依赖，也很需要明确的回应。你并不是没有分寸，只是越在意一段关系，就越想知道自己在对方心里到底重不重要。你愿意主动靠近，但也很容易因为对方的冷淡而开始自我怀疑。你真正需要的不是更多关系，而是更稳定、更具体的安心感。',
    keywords: ['黏人不掉价', '需要回应', '软乎乎'],
    angry: '被冷落的时候不会大吵，只会默默委屈，然后等你发现。',
    cute: '熟人面前秒变大型挂件，还会假装只是刚好路过。',
    avoid: '长时间不回消息、突然失联、假装不在乎。',
    soothe: '明确告诉我“你很重要”，比绕弯子哄半天更有效。',
    quote: '我不是没有边界，我只是想确认你不会走。',
    insight: '你的黏人度和敏感度都很高。你需要的不是更多关系，而是更确定的回应。',
    accent: '#e7a0a8',
    art: { fur: '#f2e4d4', mark: '#6b514a', eye: '#6da9de', pattern: 'mask' },
    prototype: { clingy: 96, stable: 70, social: 82, boundary: 40, playful: 72, sensitive: 82 }
  },
  {
    code: 'NO. 02', name: '英短蓝猫', title: '情绪稳定老钱猫',
    tagline: '不吵不闹，但不代表我没脾气。',
    description: '你不爱把情绪挂在脸上，遇到事情更习惯先观察、再处理。你的稳定不是没感觉，而是不喜欢把每一点波动都变成一场事故。你对关系有自己的节奏，慢热但长情，也不会因为一时的热闹就轻易改变判断。别人以为你什么都不在意，其实你只是选择不轻易表现出来。',
    keywords: ['情绪稳定', '不慌不忙', '有分寸'],
    angry: '不会当场炸，只会突然安静，让你自己体会。',
    cute: '心情好的时候允许你摸三下，多一下就开始看你了。',
    avoid: '临时改计划、过度热情、情绪绑架。',
    soothe: '给我一点空间，然后正常、具体地和我说话。',
    quote: '我的稳定不是没情绪，是懒得浪费情绪。',
    insight: '你的情绪稳定度和边界感都比较高。你不需要轰轰烈烈的表达，也能把关系放在一个舒服的位置。',
    accent: '#94a9c2',
    art: { fur: '#87939f', mark: '#65717c', eye: '#e8b44d', pattern: 'solid' },
    prototype: { clingy: 58, stable: 94, social: 52, boundary: 74, playful: 46, sensitive: 35 }
  },
  {
    code: 'NO. 03', name: '橘猫', title: '快乐饭桶本桶',
    tagline: '天大的事，吃完再说。',
    description: '你身上有一种很直接的快乐感。喜欢就是喜欢，饿了就是饿了，开心的时候藏不住，生气通常也持续不了太久。你不爱把生活过得太复杂，也不太愿意为了一点小事反复折磨自己。你看起来心大，但并不是没感受，只是更愿意把注意力放在眼前能吃、能笑、能让自己舒服的事情上。',
    keywords: ['快乐至上', '饭点敏感', '心大'],
    angry: '饿的时候一点就着，吃饱之后世界和平。',
    cute: '心情好时谁都可以是朋友，尤其是手里有吃的那个。',
    avoid: '抢我的吃的、饭点画饼、临时取消聚餐。',
    soothe: '先上饭，再讲道理。',
    quote: '我不是没心没肺，我只是胃比心更需要被照顾。',
    insight: '你的玩心、社交欲和情绪稳定性都很亮眼。你不需要复杂的解释，一顿好吃的就能让很多事情重新变得可以接受。',
    accent: '#f1a14a',
    art: { fur: '#e9a05a', mark: '#c97534', eye: '#8eae55', pattern: 'stripes' },
    prototype: { clingy: 70, stable: 80, social: 88, boundary: 46, playful: 92, sensitive: 40 }
  },
  {
    code: 'NO. 04', name: '狸花猫', title: '独立狠猫',
    tagline: '可以亲近，但别想控制。',
    description: '你很独立，也很清楚自己的边界。你可以对人很好，但不喜欢被安排、被试探、被用亲密的名义越界。你不是难搞，只是不会为了关系把自己交出去。你信任一个人需要时间，但一旦认定，就会非常稳定。你需要的是平等和尊重，而不是被照顾或被控制。',
    keywords: ['独立清醒', '不好糊弄', '边界拉满'],
    angry: '眼神一冷，边界立刻拉起，不需要大声也能让人知道。',
    cute: '只会对极少数人露出肚皮，别人看不到。',
    avoid: '动手动脚、替我做决定、查岗。',
    soothe: '别追，站在原地，等我自己过来。',
    quote: '我不是难搞，我是不惯着。',
    insight: '你的边界感和情绪稳定度都很高，黏人度偏低。你不是不需要关系，只是不会为了关系失去自己。',
    accent: '#99ad79',
    art: { fur: '#aa9277', mark: '#605348', eye: '#8db55e', pattern: 'stripes' },
    prototype: { clingy: 30, stable: 88, social: 46, boundary: 94, playful: 72, sensitive: 52 }
  },
  {
    code: 'NO. 05', name: '暹罗猫', title: '高音量社交猫',
    tagline: '安静不了一点，没回应也不行。',
    description: '你很需要互动，也很擅长把情绪说出来。开心会说，不开心也会说，喜欢一个人时会忍不住想知道对方在干嘛。你的热情很直接，也很需要被接住。你不喜欢猜来猜去，更不喜欢被冷处理。对你来说，关系里最舒服的状态，是彼此有回应，也有说不完的话。',
    keywords: ['高浓度社交', '话多', '需要回应'],
    angry: '会一直问，直到你给一个明确答案。',
    cute: '熟起来以后话多到停不下来，还会主动汇报今天发生的小事。',
    avoid: '冷暴力、不回消息、敷衍。',
    soothe: '认真回应一句，比转移话题有用得多。',
    quote: '我不是话多，我是在确认你还在。',
    insight: '你的黏人度、社交欲和表达欲都很高。关系对你来说不是装饰，而是需要持续有回声的空间。',
    accent: '#c9a58e',
    art: { fur: '#ead8bd', mark: '#684c42', eye: '#68a9dc', pattern: 'mask' },
    prototype: { clingy: 88, stable: 48, social: 94, boundary: 36, playful: 82, sensitive: 76 }
  },
  {
    code: 'NO. 06', name: '银渐层', title: '精致边界猫',
    tagline: '可以摸，但请你先洗手。',
    description: '你看起来温和、有教养，也有自己的标准。你不是不亲近人，只是亲近需要建立在分寸、干净和舒适之上。你对边界的要求，通常比你说出来的更明确。你不喜欢过度热情，也不喜欢被打乱节奏，但一旦确认对方懂分寸，你会给出非常稳定、耐看的陪伴。',
    keywords: ['精致', '有分寸', '不随便'],
    angry: '表面礼貌，心里已经把你放进观察名单。',
    cute: '只在自己挑的时间靠近，别人主动反而会退半步。',
    avoid: '越界、不讲究、随便动我的东西。',
    soothe: '保持分寸，再带一点真诚，不要用力过猛。',
    quote: '我有教养，不代表我没有底线。',
    insight: '你的边界感和敏感度偏高，情绪也不算大起大落。你适合清楚、体面、不过度黏腻的关系。',
    accent: '#b5bac2',
    art: { fur: '#c0c4ca', mark: '#7c818a', eye: '#6e9d72', pattern: 'stripes' },
    prototype: { clingy: 60, stable: 72, social: 44, boundary: 90, playful: 40, sensitive: 66 }
  },
  {
    code: 'NO. 07', name: '美短', title: '好奇小疯子',
    tagline: '好奇心比命大，玩心比天大。',
    description: '你对世界有很强的好奇心，愿意尝试新东西，也很容易被有意思的事情点燃。你不一定需要很多人，但一定需要一点新鲜感和活动空间。你不太适合被关在一成不变的生活里，越是可以探索、玩闹和尝试，你越有生命力。你的快乐很有感染力，也常常能把身边的人带动起来。',
    keywords: ['好奇心', '玩心重', '行动派'],
    angry: '计划被取消会不开心，但很快会被别的新鲜事吸引走。',
    cute: '会主动把喜欢的东西叼到你面前，邀请你一起玩。',
    avoid: '无聊、被关着、一直讲道理。',
    soothe: '陪我玩十分钟，比哄半小时有效。',
    quote: '我不是不专注，是这个世界值得我分心。',
    insight: '你的玩心和社交欲都很突出，敏感度不高。你需要的不是更稳定，而是更多可以探索的空间。',
    accent: '#d3bd82',
    art: { fur: '#b9b4a8', mark: '#606264', eye: '#d6ad51', pattern: 'patches' },
    prototype: { clingy: 62, stable: 78, social: 74, boundary: 55, playful: 94, sensitive: 42 }
  },
  {
    code: 'NO. 08', name: '三花猫', title: '情绪天气预报',
    tagline: '今天什么脾气，要看今天什么天气。',
    description: '你的感受来得快，也很真实。你可以在上一秒还很热情，下一秒突然需要安静。你不是故意让人猜，只是你的情绪雷达比很多人都灵敏。你需要被理解，而不是被要求永远稳定；你需要被允许有自己的天气，也需要一个不会因为你的变化就立刻离开的人。',
    keywords: ['情绪丰富', '感受敏锐', '变天很快'],
    angry: '上一秒还好好的，下一秒突然不想说话。',
    cute: '心情好的时候主动贴贴，还会把自己的宝贝推给你。',
    avoid: '催我、逼我稳定、问我为什么又变了。',
    soothe: '别急着解决问题，先允许我变天。',
    quote: '我不是善变，我是感受来得比较快。',
    insight: '你的敏感度很高，情绪稳定度偏低。你不是难相处，只是需要被允许拥有自己的天气。',
    accent: '#e58260',
    art: { fur: '#f5eee2', mark: '#e4884e', patch: '#2f2b2a', eye: '#d7ae4c', pattern: 'calico' },
    prototype: { clingy: 52, stable: 34, social: 60, boundary: 80, playful: 66, sensitive: 92 }
  },
  {
    code: 'NO. 09', name: '黑猫', title: '敏感观察员',
    tagline: '不熟别碰，熟了很疯。',
    description: '你不太容易对陌生人打开自己，但会默默观察很多细节。你不是高冷，只是需要先确认环境安全、对方可靠，才会慢慢把真实的自己露出来。你对关系的门槛不低，但一旦信任，就会非常认真地对待。你不太喜欢被围观或被随便评价，更希望别人先理解你，再靠近你。',
    keywords: ['低调观察', '慢热', '安全感优先'],
    angry: '不会当场爆发，但会在心里记住很久。',
    cute: '一旦信任，就会偷偷黏着你，还会假装只是刚好在附近。',
    avoid: '被误解、被围观、被随便评价。',
    soothe: '别逼我解释，先让我确认你是安全的。',
    quote: '我不是高冷，我只是需要先确认。',
    insight: '你的敏感度和边界感都很高，社交欲偏低。你不需要对所有人开放，真正适合的人会愿意等你慢慢靠近。',
    accent: '#9b86bd',
    art: { fur: '#2c2a31', mark: '#1d1b20', eye: '#9bc46a', pattern: 'solid' },
    prototype: { clingy: 34, stable: 70, social: 28, boundary: 88, playful: 60, sensitive: 92 }
  },
  {
    code: 'NO. 10', name: '奶牛猫', title: '随机发疯选手',
    tagline: '精神状态领先人类十年。',
    description: '你身上有一种很难预测的活力。你可以在安静的时候突然冒出一个离谱想法，也可以在大家都很严肃的时候突然把气氛带偏。你不无聊，也经常不按常理出牌。你的情绪起伏不小，但大多数时候并不带恶意。你需要的是空间、笑声和一个能接住你随机状态的人。',
    keywords: ['随机发疯', '离谱可爱', '节目效果'],
    angry: '情绪切换比翻书快，但通常不记仇。',
    cute: '突然跑来发神经、蹭一下就跑，也是一种亲近。',
    avoid: '太严肃、太规矩、非要我解释为什么发疯。',
    soothe: '笑一下，陪我疯一会儿。',
    quote: '我不是不稳定，我是自带节目效果。',
    insight: '你的玩心非常高，情绪稳定度偏低，但这并不等于不可靠。你的能量更像随机播放，而不是固定频道。',
    accent: '#6a9fd2',
    art: { fur: '#f5f0e6', mark: '#2c2929', eye: '#d8b457', pattern: 'patches' },
    prototype: { clingy: 55, stable: 30, social: 72, boundary: 48, playful: 96, sensitive: 52 }
  },
  {
    code: 'NO. 11', name: '缅因猫', title: '温柔大保镖',
    tagline: '看着凶，实际是个大暖猫。',
    description: '你给人的第一印象可能有点距离感，但熟悉之后会发现你其实很会照顾人。你不太爱把温柔挂在嘴边，更习惯用行动护住在乎的人。你有责任感，也有自己的原则，遇到重要的人会很护短。你不是没有脾气，只是你的脾气通常会先用来保护别人，而不是证明自己。',
    keywords: ['外表有距离', '内心护短', '可靠'],
    angry: '不会轻易发火，但会挡在自己在乎的人前面。',
    cute: '用很大的身体做很小的事，还要假装只是顺手。',
    avoid: '欺负我的人、逼我站队、伤害我的小圈子。',
    soothe: '你先靠过来，我会护着你。',
    quote: '我可以很凶，但对你不会。',
    insight: '你的情绪稳定度和边界感都高，黏人度也不低。你不是没有脾气，只是你的脾气通常会先用来保护别人。',
    accent: '#c39a6c',
    art: { fur: '#9c7659', mark: '#5e4533', eye: '#a3b866', pattern: 'stripes' },
    prototype: { clingy: 74, stable: 90, social: 66, boundary: 76, playful: 64, sensitive: 48 }
  },
  {
    code: 'NO. 12', name: '白猫', title: '高冷洁癖猫',
    tagline: '可以靠近，但请保持干净和分寸。',
    description: '你很清楚自己的喜好，也不太愿意为了合群而降低标准。你并不是不亲近人，只是亲近这件事必须发生在你认可的节奏、空间和方式里。你看起来高冷，其实只是把选择权看得很重要。你不会为了热闹委屈自己，也不会随便让别人进入你的生活。真正适合你的人，会懂得分寸比热情更重要。',
    keywords: ['高冷', '有标准', '不将就'],
    angry: '不吵不闹，只会离你远一点。',
    cute: '心情好的时候允许你短暂靠近，时间到了就自己走。',
    avoid: '邋遢、黏腻、没有边界。',
    soothe: '把自己和边界都整理好，再来找我。',
    quote: '我不是不亲，我只是挑。',
    insight: '你的边界感很高，社交欲偏低，情绪稳定度不错。你不需要很多关系，只需要很少但很干净的关系。',
    accent: '#8bbfe0',
    art: { fur: '#f4efe6', mark: '#dcd2c4', eye: '#7db7dd', pattern: 'solid' },
    prototype: { clingy: 30, stable: 74, social: 34, boundary: 94, playful: 42, sensitive: 60 }
  }
];

const STORAGE_KEY = 'maoge_state_v2';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const refs = {
  header: $('#siteHeader'), landing: $('#landingScreen'), test: $('#testScreen'), result: $('#resultScreen'),
  resumeButton: $('#resumeButton'), backButton: $('#backButton'), progressBar: $('#progressBar'),
  questionNumber: $('#questionNumber'), chapterKicker: $('#chapterKicker'), chapterTitle: $('#chapterTitle'),
  chapterStamps: $('#chapterStamps'), questionCard: $('#questionCard'), questionIndex: $('#questionIndex'),
  questionTitle: $('#questionTitle'), questionAside: $('#questionAside'), optionsGrid: $('#optionsGrid'), toast: $('#toast')
};

let state = { answers: Array(18).fill(null), current: 0 };
let activeScreen = 'landing';
let activePersona = null;
let activeScores = null;
let catArtUid = 0;
let radarUid = 0;
let toastTimer = null;

const HERO_CAT = { fur: '#f2e4d4', mark: '#d56e4c', eye: '#4d8fd6', pattern: 'calico' };

function catArtSVG(art) {
  const id = `cat-clip-${++catArtUid}`;
  const fur = art.fur;
  const mark = art.mark;
  const patch = art.patch || mark;
  const pattern = art.pattern;
  const eye = art.eye;
  let patternShapes = '';
  if (pattern === 'mask') {
    patternShapes = `<path d="M40 128C52 70 102 61 138 88L160 104L182 88C218 61 268 70 280 128L257 161C227 187 195 193 160 193C125 193 93 187 63 161Z" fill="${mark}" opacity=".93"/>
      <ellipse cx="104" cy="164" rx="33" ry="21" fill="${mark}" opacity=".8"/><ellipse cx="216" cy="164" rx="33" ry="21" fill="${mark}" opacity=".8"/>`;
  } else if (pattern === 'stripes') {
    patternShapes = `<path d="M123 51L113 101M151 44L146 97M184 46L192 98M211 58L225 103" fill="none" stroke="${mark}" stroke-width="13" stroke-linecap="round"/>
      <path d="M63 140L102 147M258 140L218 147" fill="none" stroke="${mark}" stroke-width="10" stroke-linecap="round"/>`;
  } else if (pattern === 'patches') {
    patternShapes = `<ellipse cx="81" cy="103" rx="52" ry="46" fill="${patch}" transform="rotate(-18 81 103)"/><ellipse cx="234" cy="165" rx="45" ry="35" fill="${patch}" transform="rotate(14 234 165)"/>`;
  } else if (pattern === 'calico') {
    patternShapes = `<ellipse cx="83" cy="94" rx="50" ry="44" fill="${mark}" transform="rotate(-20 83 94)"/><ellipse cx="230" cy="98" rx="50" ry="44" fill="${patch}" transform="rotate(18 230 98)"/><ellipse cx="245" cy="180" rx="30" ry="24" fill="${mark}" opacity=".7"/>`;
  }
  return `
    <svg class="cat-svg" viewBox="0 0 320 320" role="img" aria-label="猫咪插画">
      <defs><clipPath id="${id}"><ellipse cx="160" cy="148" rx="105" ry="96"/></clipPath></defs>
      <path d="M241 276C305 272 301 209 263 199C238 192 222 213 230 231C236 245 254 242 260 233" fill="none" stroke="#211c18" stroke-width="26" stroke-linecap="round"/>
      <path d="M241 276C305 272 301 209 263 199C238 192 222 213 230 231C236 245 254 242 260 233" fill="none" stroke="${fur}" stroke-width="17" stroke-linecap="round"/>
      <path d="M91 312C93 250 119 214 160 214C201 214 227 250 229 312Z" fill="${fur}" stroke="#211c18" stroke-width="3"/>
      <path d="M72 110L84 31L136 74Z" fill="${pattern === 'mask' ? mark : fur}" stroke="#211c18" stroke-width="3" stroke-linejoin="round"/>
      <path d="M248 110L236 31L184 74Z" fill="${pattern === 'mask' ? mark : fur}" stroke="#211c18" stroke-width="3" stroke-linejoin="round"/>
      <path d="M87 94L94 50L122 78Z" fill="#e8a0a4" opacity=".85"/>
      <path d="M233 94L226 50L198 78Z" fill="#e8a0a4" opacity=".85"/>
      <ellipse cx="160" cy="148" rx="105" ry="96" fill="${fur}" stroke="#211c18" stroke-width="3"/>
      <g clip-path="url(#${id})">${patternShapes}</g>
      <ellipse cx="122" cy="146" rx="9" ry="14" fill="${eye}" stroke="#211c18" stroke-width="2"/>
      <ellipse cx="198" cy="146" rx="9" ry="14" fill="${eye}" stroke="#211c18" stroke-width="2"/>
      <ellipse cx="125" cy="141" rx="3" ry="4" fill="#fff"/>
      <ellipse cx="201" cy="141" rx="3" ry="4" fill="#fff"/>
      <path d="M154 166L160 172L166 166Z" fill="#d46d73" stroke="#211c18" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M160 172V180M160 180C154 188 147 188 142 184M160 180C166 188 173 188 178 184" fill="none" stroke="#211c18" stroke-width="2" stroke-linecap="round"/>
      <path d="M75 164L122 171M75 182L120 180M245 164L198 171M245 182L200 180" fill="none" stroke="#211c18" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M113 294C113 278 126 277 126 294M194 294C194 278 207 277 207 294" fill="${fur}" stroke="#211c18" stroke-width="2.5"/>
    </svg>`;
}

function safeLoadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.answers) && saved.answers.length === 18) {
      state.answers = saved.answers;
      state.current = Math.min(Math.max(Number(saved.current) || 0, 0), 18);
    }
  } catch (error) { localStorage.removeItem(STORAGE_KEY); }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: state.answers, current: state.current })); } catch (error) {}
}
function hasProgress() { return state.answers.some(answer => answer !== null); }
function updateResumeButton() {
  refs.resumeButton.hidden = !hasProgress();
  refs.resumeButton.textContent = state.current >= 18 ? '查看上次结果' : '继续上次测试';
}
function setScreen(name) {
  activeScreen = name;
  [refs.landing, refs.test, refs.result].forEach(screen => screen.classList.remove('is-active'));
  const target = { landing: refs.landing, test: refs.test, result: refs.result }[name];
  if (!target) return;
  target.classList.add('is-active');
  refs.header.classList.toggle('on-inner', name !== 'landing');
  window.scrollTo(0, 0);
}
function getChapterAndQuestion(index) { return { chapterIndex: Math.floor(index / 3), questionIndex: index % 3 }; }
function getGlobalIndex(chapterIndex, questionIndex) { return chapterIndex * 3 + questionIndex; }

function startNewTest() {
  state.answers = Array(18).fill(null);
  state.current = 0;
  saveState();
  updateResumeButton();
  setScreen('test');
  renderQuestion();
}

function seededShuffle(length, seed) {
  const order = Array.from({ length }, (_, index) => index);
  let value = ((seed + 19) * 2654435761) >>> 0;
  for (let index = order.length - 1; index > 0; index -= 1) {
    value = (1664525 * value + 1013904223) >>> 0;
    const target = value % (index + 1);
    [order[index], order[target]] = [order[target], order[index]];
  }
  return order;
}

function renderQuestion() {
  if (state.current >= 18) { showResult(computeScores(state.answers)); return; }
  const { chapterIndex, questionIndex } = getChapterAndQuestion(state.current);
  const chapter = CHAPTERS[chapterIndex];
  const question = chapter.questions[questionIndex];
  const accent = chapter.color;
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-soft', hexToRgba(accent, 0.12));

  refs.chapterKicker.textContent = `MEOW ${String(chapterIndex + 1).padStart(2, '0')} / 06`;
  refs.chapterTitle.textContent = chapter.title;
  refs.questionNumber.textContent = String(state.current + 1).padStart(2, '0');
  refs.questionIndex.textContent = `SCENE ${String(state.current + 1).padStart(2, '0')} · ${chapter.kicker}`;
  refs.questionTitle.textContent = question.title;
  refs.questionAside.textContent = question.aside || '';
  refs.progressBar.style.width = `${((state.current + 1) / 18) * 100}%`;
  refs.backButton.disabled = state.current === 0;

  refs.chapterStamps.innerHTML = CHAPTERS.map((item, index) => {
    const done = index < chapterIndex || (index === chapterIndex && questionIndex === 2 && state.answers[getGlobalIndex(index, 2)] !== null);
    const current = index === chapterIndex;
    return `<span class="chapter-stamp ${done ? 'done' : ''} ${current ? 'current' : ''}" title="${item.title}">${String(index + 1).padStart(2, '0')}</span>`;
  }).join('');

  const order = seededShuffle(question.options.length, state.current + 5);
  refs.optionsGrid.innerHTML = order.map((optionIndex, displayIndex) => {
    const option = question.options[optionIndex];
    return `<button class="option-button" data-option-index="${optionIndex}" aria-label="选项 ${String.fromCharCode(65 + displayIndex)}：${escapeHtml(option.text)}"><span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span><span class="option-text">${escapeHtml(option.text)}</span></button>`;
  }).join('');

  refs.questionCard.classList.remove('swap-in');
  void refs.questionCard.offsetWidth;
  refs.questionCard.classList.add('swap-in');
}

function chooseOption(optionIndex) {
  const { chapterIndex, questionIndex } = getChapterAndQuestion(state.current);
  const option = CHAPTERS[chapterIndex].questions[questionIndex].options[optionIndex];
  if (!option) return;
  $$('.option-button', refs.optionsGrid).forEach(button => button.classList.remove('selected'));
  refs.optionsGrid.querySelector(`[data-option-index="${optionIndex}"]`)?.classList.add('selected');
  state.answers[state.current] = option.score;
  state.current += 1;
  saveState();
  window.setTimeout(() => {
    refs.questionCard.classList.add('swap-out');
    window.setTimeout(() => {
      refs.questionCard.classList.remove('swap-out');
      if (state.current >= 18) showResult(computeScores(state.answers)); else renderQuestion();
    }, 170);
  }, 170);
}

function goBack() {
  if (state.current <= 0) return;
  state.current -= 1;
  saveState();
  renderQuestion();
}

function computeScores(answers) {
  const scores = {};
  CHAPTERS.forEach((chapter, chapterIndex) => {
    const values = chapter.questions.map((_, questionIndex) => answers[getGlobalIndex(chapterIndex, questionIndex)]).filter(value => typeof value === 'number');
    const avg = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
    scores[chapter.key] = Math.min(96, Math.max(18, Math.round(26 + avg * 14)));
  });
  return scores;
}

function selectPersona(scores) {
  return PERSONAS.map(persona => {
    const distance = Math.sqrt(DIMENSIONS.reduce((sum, dimension) => {
      const diff = scores[dimension.key] - persona.prototype[dimension.key];
      return sum + diff * diff;
    }, 0) / DIMENSIONS.length);
    return { persona, distance };
  }).sort((a, b) => a.distance - b.distance)[0].persona;
}

function showResult(scores) {
  activeScores = scores;
  activePersona = selectPersona(scores);
  const top = [...DIMENSIONS].sort((a, b) => scores[b.key] - scores[a.key]).slice(0, 2);
  document.documentElement.style.setProperty('--breed-accent', activePersona.accent);
  $('#personaCode').textContent = `CAT FILE / ${activePersona.code}`;
  $('#resultKicker').textContent = `${top[0].label} × ${top[1].label}`;
  $('#personaName').textContent = activePersona.name;
  $('#personaTitle').textContent = activePersona.title;
  $('#personaTagline').textContent = activePersona.tagline;
  $('#personaDescription').textContent = activePersona.description;
  $('#personaKeywords').innerHTML = activePersona.keywords.map(keyword => `<span>${escapeHtml(keyword)}</span>`).join('');
  $('#personaQuote').textContent = activePersona.quote;
  $('#personaInsight').textContent = activePersona.insight;
  $('#resultCat').innerHTML = catArtSVG(activePersona.art);
  $('#previewCat').innerHTML = catArtSVG(activePersona.art);
  $('#previewCode').textContent = activePersona.code;
  $('#previewName').textContent = activePersona.name;
  $('#previewTitle').textContent = activePersona.title;
  renderRadar($('#resultRadar'), scores, { width: 620, showValues: true });
  renderRadar($('#previewRadar'), scores, { width: 220, compact: true, showValues: false });
  setScreen('result');
  updateResumeButton();
}

function radarSVG(scores, options = {}) {
  const width = options.width || 500;
  const height = width;
  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.31;
  const labelRadius = radius + width * 0.13;
  const baseAngle = -Math.PI / 2;
  const pointAt = (index, value) => {
    const angle = baseAngle + (Math.PI * 2 * index) / 6;
    const distance = radius * (Math.max(0, Math.min(96, value)) / 96);
    return [cx + Math.cos(angle) * distance, cy + Math.sin(angle) * distance];
  };
  const labelAt = index => {
    const angle = baseAngle + (Math.PI * 2 * index) / 6;
    return [cx + Math.cos(angle) * labelRadius, cy + Math.sin(angle) * labelRadius];
  };
  const polygon = values => values.map((value, index) => pointAt(index, value).join(',')).join(' ');
  const grids = [16, 32, 48, 64, 80, 96].map(level => `<polygon points="${polygon(Array(6).fill(level))}" class="radar-grid"/>`).join('');
  const axes = DIMENSIONS.map((_, index) => { const [x, y] = pointAt(index, 96); return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="radar-axis"/>`; }).join('');
  const values = DIMENSIONS.map(dimension => scores[dimension.key] || 0);
  const dataPoints = values.map((value, index) => pointAt(index, value));
  const points = dataPoints.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${options.compact ? 2.5 : 4}" class="radar-point"/>`).join('');
  const valueSize = width * 0.034;
  const valuesText = options.showValues ? DIMENSIONS.map((dimension, index) => {
    const [x, y] = pointAt(index, 86);
    return `<text x="${x}" y="${y + valueSize * 0.35}" text-anchor="middle" class="radar-value" style="font-size:${valueSize}px">${scores[dimension.key] || 0}</text>`;
  }).join('') : '';
  const labels = DIMENSIONS.map((dimension, index) => {
    const [x, y] = labelAt(index);
    const anchor = Math.abs(x - cx) < 10 ? 'middle' : x < cx ? 'end' : 'start';
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" class="radar-label">${dimension.label}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="六维猫格雷达图">${grids}${axes}<polygon points="${dataPoints.map(point => point.join(',')).join(' ')}" class="radar-data"/>${points}${valuesText}${labels}</svg>`;
}

function renderRadar(container, scores, options = {}) { if (container) container.innerHTML = radarSVG(scores, options); }

function buildShareText() {
  const top = [...DIMENSIONS].sort((a, b) => activeScores[b.key] - activeScores[a.key]).slice(0, 2);
  return `测出我的脾气品种是「${activePersona.name}」——${activePersona.title}。\n\n${activePersona.tagline}\n${top[0].label} ${activeScores[top[0].key]} / ${top[1].label} ${activeScores[top[1].key]}。\n\n${activePersona.quote}\n\n#猫格测试 #猫系人格 #脾气测试 #人格测试 #猫咪性格`;
}

async function copyShareText() {
  const text = buildShareText();
  try { await navigator.clipboard.writeText(text); showToast('分享文案已复制'); }
  catch (error) {
    const area = document.createElement('textarea');
    area.value = text; area.style.position = 'fixed'; area.style.opacity = '0';
    document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove();
    showToast('分享文案已复制');
  }
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => refs.toast.classList.remove('show'), 2200);
}

function goHome() { setScreen('landing'); updateResumeButton(); }
function resume() { if (state.current >= 18) showResult(computeScores(state.answers)); else { setScreen('test'); renderQuestion(); } }
function restart() { localStorage.removeItem(STORAGE_KEY); startNewTest(); }

function drawCatFace(ctx, art, cx, cy, size) {
  const scale = size / 320;
  ctx.save();
  ctx.translate(cx - 160 * scale, cy - 160 * scale);
  ctx.scale(scale, scale);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#211c18';
  ctx.lineWidth = 3;

  ctx.fillStyle = art.fur;
  ctx.beginPath(); ctx.moveTo(72, 110); ctx.lineTo(84, 31); ctx.lineTo(136, 74); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(248, 110); ctx.lineTo(236, 31); ctx.lineTo(184, 74); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#e8a0a4';
  ctx.beginPath(); ctx.moveTo(87, 94); ctx.lineTo(94, 50); ctx.lineTo(122, 78); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(233, 94); ctx.lineTo(226, 50); ctx.lineTo(198, 78); ctx.closePath(); ctx.fill();

  ctx.fillStyle = art.fur;
  ctx.beginPath(); ctx.ellipse(160, 148, 105, 96, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

  if (art.pattern === 'mask') {
    ctx.fillStyle = art.mark;
    ctx.beginPath(); ctx.ellipse(160, 104, 86, 56, 0, 0, Math.PI * 2); ctx.fill();
  } else if (art.pattern === 'stripes') {
    ctx.strokeStyle = art.mark; ctx.lineWidth = 12;
    [-26, 0, 26].forEach(offset => { ctx.beginPath(); ctx.moveTo(160 + offset, 58); ctx.lineTo(160 + offset * 0.7, 105); ctx.stroke(); });
    ctx.strokeStyle = '#211c18'; ctx.lineWidth = 3;
  } else if (art.pattern === 'patches') {
    ctx.fillStyle = art.mark;
    ctx.beginPath(); ctx.ellipse(91, 112, 44, 40, -0.3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(230, 169, 36, 28, 0.25, 0, Math.PI * 2); ctx.fill();
  } else if (art.pattern === 'calico') {
    ctx.fillStyle = art.mark;
    ctx.beginPath(); ctx.ellipse(84, 94, 47, 41, -0.3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = art.patch || '#2f2b2a';
    ctx.beginPath(); ctx.ellipse(231, 98, 46, 40, 0.25, 0, Math.PI * 2); ctx.fill();
  }

  ctx.fillStyle = art.eye;
  ctx.beginPath(); ctx.ellipse(122, 146, 9, 14, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(198, 146, 9, 14, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.arc(125, 141, 3, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(201, 141, 3, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#d46d73';
  ctx.beginPath(); ctx.moveTo(154, 166); ctx.lineTo(160, 172); ctx.lineTo(166, 166); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = '#211c18'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(160, 172); ctx.lineTo(160, 180); ctx.moveTo(160, 180); ctx.quadraticCurveTo(153, 188, 142, 184); ctx.moveTo(160, 180); ctx.quadraticCurveTo(167, 188, 178, 184); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(75, 164); ctx.lineTo(122, 171); ctx.moveTo(75, 182); ctx.lineTo(120, 180); ctx.moveTo(245, 164); ctx.lineTo(198, 171); ctx.moveTo(245, 182); ctx.lineTo(200, 180); ctx.stroke();
  ctx.restore();
}

function drawCanvasRadar(ctx, scores, cx, cy, radius) {
  const start = -Math.PI / 2;
  const point = (index, value) => {
    const angle = start + (Math.PI * 2 * index) / 6;
    const length = radius * (value / 96);
    return [cx + Math.cos(angle) * length, cy + Math.sin(angle) * length];
  };
  for (let level = 1; level <= 5; level += 1) {
    ctx.beginPath();
    for (let index = 0; index < 6; index += 1) {
      const [x, y] = point(index, level * 19.2);
      if (index === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath(); ctx.strokeStyle = 'rgba(33,28,24,0.14)'; ctx.lineWidth = 1.2; ctx.stroke();
  }
  for (let index = 0; index < 6; index += 1) {
    const [x, y] = point(index, 96);
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.strokeStyle = 'rgba(33,28,24,0.12)'; ctx.stroke();
  }
  const values = DIMENSIONS.map(d => scores[d.key] || 0);
  ctx.beginPath();
  values.forEach((value, index) => { const [x, y] = point(index, value); if (index === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
  ctx.closePath(); ctx.fillStyle = 'rgba(239,106,77,0.2)'; ctx.fill(); ctx.strokeStyle = '#c94832'; ctx.lineWidth = 2.5; ctx.stroke();
  values.forEach((value, index) => { const [x, y] = point(index, value); ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fillStyle = '#c94832'; ctx.fill(); });
  DIMENSIONS.forEach((dimension, index) => {
    const angle = start + (Math.PI * 2 * index) / 6;
    const lx = cx + Math.cos(angle) * (radius + 50);
    const ly = cy + Math.sin(angle) * (radius + 47);
    ctx.fillStyle = '#211c18'; ctx.font = '600 18px "PingFang SC", sans-serif';
    ctx.textAlign = Math.abs(lx - cx) < 8 ? 'center' : lx < cx ? 'right' : 'left';
    ctx.fillText(dimension.label, lx, ly);
  });
}

function downloadShareCard() {
  if (!activePersona) return;
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1440;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f7efe3'; ctx.fillRect(0, 0, 1080, 1440);
  ctx.fillStyle = activePersona.accent; ctx.globalAlpha = 0.3; ctx.beginPath(); ctx.arc(890, 235, 260, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
  ctx.strokeStyle = 'rgba(33,28,24,0.24)'; ctx.lineWidth = 2; ctx.strokeRect(30, 30, 1020, 1380);

  ctx.fillStyle = '#211c18'; ctx.font = '700 18px "SF Mono", monospace'; ctx.textAlign = 'left'; ctx.fillText('猫格 / CAT TEMPERAMENT', 72, 90);
  ctx.textAlign = 'right'; ctx.fillStyle = '#7f7165'; ctx.fillText(activePersona.code, 1008, 90);

  drawCatFace(ctx, activePersona.art, 235, 330, 290);

  ctx.textAlign = 'left'; ctx.fillStyle = '#c94832'; ctx.font = '700 20px "PingFang SC", sans-serif'; ctx.fillText([...DIMENSIONS].sort((a,b)=>activeScores[b.key]-activeScores[a.key]).slice(0,2).map(d=>d.label).join(' × '), 440, 238);
  ctx.fillStyle = '#211c18'; ctx.font = '850 88px "PingFang SC", sans-serif'; ctx.fillText(activePersona.name, 432, 334);
  ctx.fillStyle = '#c94832'; ctx.font = '700 32px "PingFang SC", sans-serif'; ctx.fillText(activePersona.title, 438, 385);
  ctx.fillStyle = '#5e554c'; ctx.font = '500 27px "Songti SC", serif';
  wrapCanvasText(ctx, activePersona.tagline, 438, 433, 530, 40, 2);

  drawCanvasRadar(ctx, activeScores, 540, 760, 178);

  ctx.fillStyle = '#95877a'; ctx.font = '600 15px "SF Mono", monospace'; ctx.fillText('THE CAT WORDS', 72, 1090);
  ctx.fillStyle = '#211c18'; ctx.font = '500 34px "Songti SC", serif';
  wrapCanvasText(ctx, activePersona.quote, 72, 1142, 880, 48, 2);

  ctx.fillStyle = '#95877a'; ctx.font = '500 13px "SF Mono", monospace'; ctx.fillText('18 个日常瞬间 · 测出你的脾气品种', 72, 1360);
  ctx.textAlign = 'right'; ctx.fillText('MAOGE / INNER CAT', 1008, 1360);

  const link = document.createElement('a');
  link.download = `猫格-${activePersona.name}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('猫格卡片已生成');
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const chars = [...text]; const lines = []; let line = '';
  chars.forEach(char => { const test = line + char; if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = char; } else line = test; });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((value, index) => ctx.fillText(index === maxLines - 1 && lines.length > maxLines ? `${value.slice(0,-1)}…` : value, x, y + index * lineHeight));
}
function hexToRgba(hex, alpha) {
  const raw = hex.replace('#',''); const value = parseInt(raw.length === 3 ? raw.split('').map(c=>c+c).join('') : raw, 16);
  return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}
function escapeHtml(value) { return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'); }

document.addEventListener('click', event => {
  const actionTarget = event.target.closest('[data-action]');
  if (actionTarget) {
    const action = actionTarget.dataset.action;
    if (action === 'start') startNewTest();
    if (action === 'resume') resume();
    if (action === 'back') goBack();
    if (action === 'home') goHome();
    if (action === 'download') downloadShareCard();
    if (action === 'copy') copyShareText();
    if (action === 'restart') restart();
    return;
  }
  const option = event.target.closest('[data-option-index]');
  if (option && activeScreen === 'test') chooseOption(Number(option.dataset.optionIndex));
});
window.addEventListener('scroll', () => refs.header.classList.toggle('scrolled', window.scrollY > 16), { passive: true });

$('#heroCat').innerHTML = catArtSVG(HERO_CAT);
safeLoadState();
updateResumeButton();
