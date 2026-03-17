// ============================================================
// このファイルのみ病院ごとに書き換えます
// generate.ts が自動生成します
// ============================================================

export type DaySchedule = { am: string; pm: string | null } | null

export interface WeaknessDetails {
  mobile: boolean
  ssl: boolean
  reservation_form: boolean
  last_update_year: number
  response_time_ms: number
}

export interface HospitalData {
  name: string
  phone: string
  fax?: string
  address: string
  access: string
  parking: string
  website_url?: string
  google_rating?: number
  review_count?: number
  director: {
    name: string
    title: string
    education?: string
    message?: string
  }
  animals: string[]
  hours: Record<string, DaySchedule>
  features: string[]
  catchcopy?: string
  subcopy?: string
  reviews?: { text: string; author: string }[]
  equipment?: string[]
  weakness: WeaknessDetails
  // SEO
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

// ============================================================
// バウミュウ動物病院（デフォルト / 動作確認用）
// ============================================================
export const HOSPITAL: HospitalData = {
  name: 'バウミュウ動物病院',
  phone: '0436-41-1008',
  fax: '0436-41-1952',
  address: '〒290-0062 千葉県市原市八幡520',
  access: 'JR内房線 八幡宿駅より徒歩7分（500m）',
  parking: 'あり（無料）',
  website_url: 'https://pya-bowmew.ssl-lolipop.jp/',
  director: {
    name: '町田 幸男',
    title: '院長',
    education: '東京農工大学 獣医科卒',
    message:
      '地域の皆様のペットのかかりつけ医として、どんな小さな悩みもお気軽にご相談ください。高度医療センターとも連携しており、難しい病気でも最善の治療をご提案します。',
  },
  animals: ['犬', '猫'],
  hours: {
    月: { am: '9:00〜13:00', pm: '15:30〜19:00' },
    火: { am: '9:00〜13:00', pm: '15:30〜19:00' },
    水: { am: '9:00〜13:00', pm: '15:30〜19:00' },
    木: { am: '9:00〜13:00', pm: null },
    金: { am: '9:00〜13:00', pm: '15:30〜19:00' },
    土: { am: '9:00〜13:00', pm: '15:30〜19:00' },
    日: { am: '9:00〜13:00', pm: null },
    祝: { am: '9:00〜13:00', pm: null },
  },
  features: ['トリミング', 'ペットホテル', '入院設備', '高度医療センター連携'],
  catchcopy: '日曜も祝日も、\n午前は休まず。\n市原市のかかりつけ動物病院。',
  subcopy: '千葉県市原市八幡｜犬・猫の診療\nJR八幡宿駅より徒歩7分',
  reviews: [
    { text: '何でも相談できて安心できる先生です。代々お世話になっています。', author: '犬・柴犬のオーナー' },
    {
      text: 'ベテランの先生の診る目と技術に感謝しています。難しい症状でも的確に診てもらえました。',
      author: '猫・スコティッシュのオーナー',
    },
    {
      text: '旅行中も預かってくれて、散歩もさせてくれました。ペットホテルも安心してお任せできます。',
      author: '犬・トイプードルのオーナー',
    },
  ],
  equipment: ['CT・MRI', '内視鏡', 'デジタルX線', '超音波エコー', '猫専用待合室'],
  weakness: {
    mobile: false,
    ssl: false,
    reservation_form: false,
    last_update_year: 2015,
    response_time_ms: 4200,
  },
  seo: {
    title: 'バウミュウ動物病院｜千葉県市原市のかかりつけ動物病院',
    description:
      '千葉県市原市八幡の動物病院。犬・猫の診療。日曜・祝日も午前診療。CT・MRI完備。駐車場無料。高度医療センターと連携。TEL: 0436-41-1008',
    keywords: [
      '市原市 動物病院',
      '八幡宿 動物病院',
      '市原市 日曜 動物病院',
      '市原市 猫 動物病院',
      '市原市 ペットホテル',
      '市原市 CT MRI 動物病院',
    ],
  },
}
