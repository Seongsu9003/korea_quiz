export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: 'daily_life' | 'social_customs' | 'food_culture' | 'transportation' | 'technology';
}

export interface QuizData {
  [language: string]: {
    questions: Question[];
  };
}

export const quizData: QuizData = {
  en: {
    questions: [
      {
        id: "transport_1",
        question: "What is the most common way to pay for public transportation in Seoul?",
        options: ["T-money card or mobile app", "Cash only", "Credit card", "Monthly pass only"],
        correctAnswer: 0,
        category: "transportation"
      },
      {
        id: "social_1",
        question: "When entering someone's home in Korea, what should you do?",
        options: ["Keep your shoes on", "Remove your shoes", "Ask permission first", "Bring house slippers"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "social_2",
        question: "What is the proper way to receive a business card in Korea?",
        options: ["With one hand quickly", "With both hands and a slight bow", "Just take it casually", "Read it immediately"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_1",
        question: "Which mobile app is essential for food delivery in Korea?",
        options: ["KakaoTalk", "Yogiyo or Baedal Minjok", "Naver", "Coupang"],
        correctAnswer: 1,
        category: "technology"
      },
      {
        id: "social_3",
        question: "What does the number 4 represent in Korean culture?",
        options: ["Good luck", "Prosperity", "Bad luck (death)", "Nothing special"],
        correctAnswer: 2,
        category: "social_customs"
      },
      {
        id: "social_4",
        question: "How do you show respect when drinking with elders?",
        options: ["Drink faster than them", "Turn your head away while drinking", "Toast loudly", "Refuse to drink"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "daily_1",
        question: "What is the most popular convenience store chain in Korea?",
        options: ["7-Eleven", "GS25", "CU", "All are equally popular"],
        correctAnswer: 3,
        category: "daily_life"
      },
      {
        id: "social_5",
        question: "When should you use two hands in Korean culture?",
        options: ["Only when greeting", "When giving/receiving items", "Never necessary", "Only with strangers"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "social_6",
        question: "What is the Korean age system based on?",
        options: ["Birth date", "Everyone becomes 1 year older on January 1st", "Lunar calendar", "School year"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_2",
        question: "Which banking app is most commonly used in Korea?",
        options: ["KakaoBank", "Toss", "Both are popular", "Foreign banks only"],
        correctAnswer: 2,
        category: "technology"
      },
      {
        id: "social_7",
        question: "What should you do when someone older enters the room?",
        options: ["Continue what you're doing", "Stand up and bow slightly", "Say hello loudly", "Ignore them"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_3",
        question: "Which communication app is essential for daily life in Korea?",
        options: ["WhatsApp", "WeChat", "KakaoTalk", "LINE"],
        correctAnswer: 2,
        category: "technology"
      }
    ]
  },
  vi: {
    questions: [
      {
        id: "transport_1",
        question: "Cách phổ biến nhất để thanh toán giao thông công cộng ở Seoul là gì?",
        options: ["Thẻ T-money hoặc ứng dụng di động", "Chỉ tiền mặt", "Thẻ tín dụng", "Chỉ vé tháng"],
        correctAnswer: 0,
        category: "transportation"
      },
      {
        id: "social_1",
        question: "Khi vào nhà của ai đó ở Hàn Quốc, bạn nên làm gì?",
        options: ["Giữ giày", "Cởi giày", "Xin phép trước", "Mang dép nhà"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "social_2",
        question: "Cách đúng để nhận danh thiếp ở Hàn Quốc là gì?",
        options: ["Dùng một tay nhanh chóng", "Dùng hai tay và cúi đầu nhẹ", "Chỉ nhận bình thường", "Đọc ngay lập tức"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_1",
        question: "Ứng dụng di động nào cần thiết để giao đồ ăn ở Hàn Quốc?",
        options: ["KakaoTalk", "Yogiyo hoặc Baedal Minjok", "Naver", "Coupang"],
        correctAnswer: 1,
        category: "technology"
      },
      {
        id: "social_3",
        question: "Số 4 đại diện cho điều gì trong văn hóa Hàn Quốc?",
        options: ["May mắn", "Thịnh vượng", "Xui xẻo (chết)", "Không có gì đặc biệt"],
        correctAnswer: 2,
        category: "social_customs"
      },
      {
        id: "social_4",
        question: "Làm thế nào để thể hiện sự tôn trọng khi uống với người lớn tuổi?",
        options: ["Uống nhanh hơn họ", "Quay đầu đi khi uống", "Chúc to", "Từ chối uống"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "daily_1",
        question: "Chuỗi cửa hàng tiện lợi phổ biến nhất ở Hàn Quốc là gì?",
        options: ["7-Eleven", "GS25", "CU", "Tất cả đều phổ biến như nhau"],
        correctAnswer: 3,
        category: "daily_life"
      },
      {
        id: "social_5",
        question: "Khi nào bạn nên dùng hai tay trong văn hóa Hàn Quốc?",
        options: ["Chỉ khi chào hỏi", "Khi đưa/nhận đồ vật", "Không bao giờ cần thiết", "Chỉ với người lạ"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "social_6",
        question: "Hệ thống tuổi tác Hàn Quốc dựa trên điều gì?",
        options: ["Ngày sinh", "Mọi người lớn thêm 1 tuổi vào ngày 1 tháng 1", "Âm lịch", "Năm học"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_2",
        question: "Ứng dụng ngân hàng nào được sử dụng phổ biến nhất ở Hàn Quốc?",
        options: ["KakaoBank", "Toss", "Cả hai đều phổ biến", "Chỉ ngân hàng nước ngoài"],
        correctAnswer: 2,
        category: "technology"
      },
      {
        id: "social_7",
        question: "Bạn nên làm gì khi có người lớn tuổi vào phòng?",
        options: ["Tiếp tục làm việc của mình", "Đứng dậy và cúi đầu nhẹ", "Chào to", "Phớt lờ họ"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_3",
        question: "Ứng dụng giao tiếp nào cần thiết cho cuộc sống hàng ngày ở Hàn Quốc?",
        options: ["WhatsApp", "WeChat", "KakaoTalk", "LINE"],
        correctAnswer: 2,
        category: "technology"
      }
    ]
  },
  ja: {
    questions: [
      {
        id: "transport_1",
        question: "ソウルで公共交通機関の支払いで最も一般的な方法は何ですか？",
        options: ["T-moneyカードまたはモバイルアプリ", "現金のみ", "クレジットカード", "定期券のみ"],
        correctAnswer: 0,
        category: "transportation"
      },
      {
        id: "social_1",
        question: "韓国で他人の家に入る時、何をすべきですか？",
        options: ["靴を履いたまま", "靴を脱ぐ", "まず許可を求める", "室内履きを持参する"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "social_2",
        question: "韓国で名刺を受け取る正しい方法は何ですか？",
        options: ["片手で素早く", "両手で軽くお辞儀をして", "ただ普通に取る", "すぐに読む"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_1",
        question: "韓国でフードデリバリーに必須のモバイルアプリはどれですか？",
        options: ["KakaoTalk", "YogiyoまたはBaedal Minjok", "Naver", "Coupang"],
        correctAnswer: 1,
        category: "technology"
      },
      {
        id: "social_3",
        question: "韓国文化で数字の4は何を表しますか？",
        options: ["幸運", "繁栄", "不運（死）", "特に意味なし"],
        correctAnswer: 2,
        category: "social_customs"
      },
      {
        id: "social_4",
        question: "年上の人と飲酒する際の敬意の示し方は？",
        options: ["相手より早く飲む", "飲む時に顔を横に向ける", "大声で乾杯する", "飲酒を断る"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "daily_1",
        question: "韓国で最も人気のあるコンビニチェーンは何ですか？",
        options: ["7-Eleven", "GS25", "CU", "全て同じくらい人気"],
        correctAnswer: 3,
        category: "daily_life"
      },
      {
        id: "social_5",
        question: "韓国文化でいつ両手を使うべきですか？",
        options: ["挨拶の時のみ", "物を渡す/受け取る時", "必要ない", "知らない人とのみ"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "social_6",
        question: "韓国の年齢システムは何に基づいていますか？",
        options: ["誕生日", "1月1日にみんなが1歳年をとる", "旧暦", "学年"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_2",
        question: "韓国で最もよく使われる銀行アプリはどれですか？",
        options: ["KakaoBank", "Toss", "両方とも人気", "外国銀行のみ"],
        correctAnswer: 2,
        category: "technology"
      },
      {
        id: "social_7",
        question: "年上の人が部屋に入ってきた時、何をすべきですか？",
        options: ["していることを続ける", "立ち上がって軽くお辞儀する", "大声で挨拶する", "無視する"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_3",
        question: "韓国の日常生活に必須のコミュニケーションアプリはどれですか？",
        options: ["WhatsApp", "WeChat", "KakaoTalk", "LINE"],
        correctAnswer: 2,
        category: "technology"
      }
    ]
  },
  zh: {
    questions: [
      {
        id: "transport_1",
        question: "在首尔，公共交通最常见的支付方式是什么？",
        options: ["T-money卡或手机应用", "仅限现金", "信用卡", "仅限月票"],
        correctAnswer: 0,
        category: "transportation"
      },
      {
        id: "social_1",
        question: "在韩国进入他人家中时，你应该做什么？",
        options: ["保持穿鞋", "脱鞋", "先请求许可", "带室内拖鞋"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "social_2",
        question: "在韩国接受名片的正确方式是什么？",
        options: ["单手快速接取", "双手接取并轻微鞠躬", "随便接取", "立即阅读"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_1",
        question: "在韩国送餐必需的手机应用是哪个？",
        options: ["KakaoTalk", "Yogiyo或Baedal Minjok", "Naver", "Coupang"],
        correctAnswer: 1,
        category: "technology"
      },
      {
        id: "social_3",
        question: "数字4在韩国文化中代表什么？",
        options: ["好运", "繁荣", "厄运（死亡）", "没有特殊意义"],
        correctAnswer: 2,
        category: "social_customs"
      },
      {
        id: "social_4",
        question: "与长辈饮酒时如何表示尊重？",
        options: ["比他们喝得更快", "喝酒时转过头去", "大声干杯", "拒绝饮酒"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "daily_1",
        question: "韩国最受欢迎的便利店连锁是什么？",
        options: ["7-Eleven", "GS25", "CU", "都同样受欢迎"],
        correctAnswer: 3,
        category: "daily_life"
      },
      {
        id: "social_5",
        question: "在韩国文化中什么时候应该使用双手？",
        options: ["仅在问候时", "给予/接受物品时", "从不必要", "仅与陌生人"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "social_6",
        question: "韩国的年龄系统基于什么？",
        options: ["出生日期", "每个人在1月1日增长一岁", "农历", "学年"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_2",
        question: "韩国最常用的银行应用是哪个？",
        options: ["KakaoBank", "Toss", "两个都很受欢迎", "仅限外国银行"],
        correctAnswer: 2,
        category: "technology"
      },
      {
        id: "social_7",
        question: "当年长者进入房间时你应该做什么？",
        options: ["继续做你正在做的事", "站起来并轻微鞠躬", "大声打招呼", "忽视他们"],
        correctAnswer: 1,
        category: "social_customs"
      },
      {
        id: "tech_3",
        question: "韩国日常生活中必需的通讯应用是哪个？",
        options: ["WhatsApp", "WeChat", "KakaoTalk", "LINE"],
        correctAnswer: 2,
        category: "technology"
      }
    ]
  }
};

export interface Persona {
  level: string;
  title: string;
  description: string;
  minScore: number;
  maxScore: number;
  icon: string;
}

export const personas: Persona[] = [
  {
    level: "Beginner Korean Life Explorer",
    title: "The Curious Newcomer",
    description: "You're just beginning your Korean adventure! Every day brings new discoveries, from figuring out the subway system to trying your first Korean BBQ. Don't worry - everyone starts somewhere, and your curiosity will take you far!",
    minScore: 0,
    maxScore: 40,
    icon: "🌱"
  },
  {
    level: "Intermediate Korean Life Adapter",
    title: "The Cultural Bridge Builder",
    description: "You're making great progress! You can navigate daily life with confidence, know some social customs, and probably have a favorite Korean dish. You're building bridges between your culture and Korean culture beautifully!",
    minScore: 41,
    maxScore: 70,
    icon: "🌉"
  },
  {
    level: "Advanced Korean Life Expert",
    title: "The K-Culture Master",
    description: "Amazing! You've mastered the art of Korean living. From subway etiquette to business card ceremonies, you navigate Korean culture like a local. You're practically a cultural ambassador! 한국생활의 고수!",
    minScore: 71,
    maxScore: 100,
    icon: "👑"
  }
];
