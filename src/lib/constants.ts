// ============================================================
// 病院情報の定数（編集はこのファイルのみ）
// ============================================================

export const CLINIC = {
  name: 'バウ・ミュウ動物病院',
  nameEn: 'Bow-Mew Animal Hospital',
  phone: '0436-41-1008',
  fax: '0436-41-1952',
  zip: '〒290-0062',
  address: '千葉県市原市八幡520',
  access: 'JR内房線「八幡宿駅」西口より徒歩約7分（500m）',
  parking: '専用駐車場6台完備（無料）',
  icAccess: '館山道 市原ICより約10分',
  lineUrl: 'https://lin.ee/bowmew',
  googleMapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.5!2d140.1204618!3d35.5323696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022996015ea062f%3A0xb5d2a1600dc26f96!2z44OQ44Km44Of44Ol44Km5YuV54mp55eF6Zmi!5e0!3m2!1sja!2sjp!4v1700000000000',
  googleMapDirectionUrl:
    'https://www.google.com/maps/dir/?api=1&destination=千葉県市原市八幡520',
  director: {
    name: '町田 幸男',
    title: '院長・獣医師',
    education: '東京農工大学 獣医科卒',
  },
  animals: ['犬', '猫'],
} as const

export const HOURS = {
  note: '受付は診療時間まで',
  firstVisitNote:
    '問診票のご記入がございますので、お時間に余裕をもってお越しください。',
  closedDay: '水曜午後・木曜午後・日曜午後・祝日',
  schedule: [
    { day: '月', am: true, pm: true },
    { day: '火', am: true, pm: true },
    { day: '水', am: true, pm: false },
    { day: '木', am: true, pm: false },
    { day: '金', am: true, pm: true },
    { day: '土', am: true, pm: true },
    { day: '日', am: true, pm: false },
    { day: '祝', am: true, pm: false },
  ],
  amTime: '9:00〜12:30',
  pmTime: '15:30〜18:00',
} as const

export const SERVICES = [
  {
    icon: 'stethoscope',
    title: '一般診療',
    description: '内科・外科・皮膚科など、幅広い症状に対応します。',
  },
  {
    icon: 'vaccine',
    title: '予防接種・健康診断',
    description: 'ワクチン接種やフィラリア・ノミダニ予防など。',
  },
  {
    icon: 'scissors',
    title: 'トリミング',
    description: '健康チェックをしながらの安心トリミング。',
  },
  {
    icon: 'house',
    title: 'ペットホテル',
    description: '獣医師が常駐する安心のお預かり環境。',
  },
  {
    icon: 'xray',
    title: '各種検査',
    description: 'デジタルX線・超音波エコー・内視鏡など。',
  },
  {
    icon: 'hospital',
    title: '高度医療連携',
    description: 'CT/MRI対応の高度医療センターと連携。',
  },
] as const

export const SEO = {
  title: '市原市の動物病院｜バウ・ミュウ動物病院｜予約不要・当日受付OK',
  description:
    '千葉県市原市八幡の動物病院。予約なし・当日受付OK。犬・猫の一般診療・予防接種・健康診断・トリミング・ペットホテル。日曜祝日も午前診療。JR八幡宿駅徒歩7分。駐車場6台無料。TEL: 0436-41-1008',
} as const
