// ============================================================
// このファイルのみ病院ごとに書き換えます
// generate.ts が自動生成します（手動で編集しないでください）
// ============================================================

export type DaySchedule = { am: string; pm: string | null } | null

export interface WeaknessDetails {
  mobile: boolean
  ssl: boolean
  reservation_form: boolean
  last_update_year: number
  response_time_ms: number
}

export interface ComparisonItem {
  label: string
  before: string    // 現在のサイト（短く）
  after: string     // 新サイト（短く）
  impact?: string   // 「→ ○○になっている」という影響（サブテキスト）
  stat?: string     // 添える数字データ
  active: boolean
}

export interface ComparisonSection {
  headline: string  // セクションの大見出し
  subtext: string   // ヘッドラインの補足
  closing: string   // 最後の一文
  items: ComparisonItem[]
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
  // AIが生成したカスタム比較セクション（未設定時は自動生成フォールバック）
  comparison?: ComparisonSection
  line_url?: string
  news?: { date: string; category: string; title: string }[]
  partnerships?: { name: string; type: string }[]
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
  google_rating: 4.2,
  review_count: 18,
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
  line_url: 'https://lin.ee/bowmew', // デモ用プレースホルダー
  catchcopy: '市原市の大切な命を、\nずっと守り続けてきた場所。',
  subcopy: '日曜も祝日も午前診療。CT・MRI完備。\nどんな小さな悩みもお気軽にご相談ください。',
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
  comparison: {
    headline: '今日、何人の飼い主が\n別の病院を選びましたか？',
    subtext:
      'スマートフォン検索が78%を占める今、サイトの第一印象で来院先を決める飼い主が増えています。',
    closing: '先生の30年の信頼が、\nサイトのせいで届いていないかもしれません。',
    items: [
      {
        label: 'スマホで見たとき',
        before: '文字が崩れて読めない',
        after: 'どの端末でも美しく表示',
        impact: '→ 78%の飼い主に届いていない',
        stat: 'スマホ検索は全体の78%',
        active: true,
      },
      {
        label: '夜中の問い合わせ',
        before: '電話のみ・つながらない',
        after: '24時間フォームで受付',
        impact: '→ 翌朝には別の病院の患者に',
        stat: '問い合わせの32%は診療時間外に発生',
        active: true,
      },
      {
        label: 'Googleでの見つけやすさ',
        before: 'SSL非対応で検索順位が下がる',
        after: 'SEO最適化・SSL完全対応',
        impact: '→「市原市 動物病院」で見つからない',
        stat: 'SSL非対応はGoogle検索で不利',
        active: true,
      },
      {
        label: '飼い主が感じる信頼感',
        before: '最終更新2015年',
        after: `${new Date().getFullYear()}年・常に最新情報`,
        impact: '→「まだやってるの？」と思われる',
        stat: undefined,
        active: true,
      },
      {
        label: '開いた瞬間の印象',
        before: '表示4.2秒・53%がそのまま閉じる',
        after: '1秒以内・ストレスゼロ',
        impact: '→ ストレスで閉じられる',
        stat: '読み込み3秒超で53%が離脱',
        active: true,
      },
    ],
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
