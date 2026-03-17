/**
 * vet-demo-template 自動生成スクリプト
 *
 * 使い方:
 *   npm run generate -- input.json
 *   または
 *   npx ts-node --project tsconfig.scripts.json scripts/generate.ts input.json
 */

import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

interface DayScheduleInput {
  am: string
  pm: string | null
}

interface HospitalInput {
  hospital: {
    name: string
    name_kana?: string
    phone: string
    fax?: string
    address: string
    access: string
    parking: string
    website_url?: string
    google_rating?: number
    review_count?: number
    director_name: string
    director_education?: string
    animals: string[]
    hours: Record<string, DayScheduleInput | null>
    features: string[]
    catchcopy?: string
    subcopy?: string
    reviews?: { text: string; author: string }[]
    equipment?: string[]
    weakness_score?: number
    weakness_details: {
      mobile: boolean
      ssl: boolean
      reservation_form: boolean
      last_update_year: number
      response_time_ms: number
    }
    seo?: {
      title?: string
      description?: string
      keywords?: string[]
    }
  }
}

function toSlug(name: string): string {
  // 日本語を含む文字列をURLセーフなスラッグに変換
  return name
    .replace(/[　\s]+/g, '-')
    .replace(/[^\w\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF-]/g, '')
    .toLowerCase()
    .slice(0, 40)
}

function generateHospitalTs(input: HospitalInput): string {
  const h = input.hospital

  // SEO自動生成
  const prefecture = h.address.match(/[都道府県][\s\S]*?(?=[市区町村])/)?.[0] ?? ''
  const city = h.address.match(/[市区町村]\S+/)?.[0] ?? ''
  const seoTitle = h.seo?.title ?? `${h.name}｜${city}のかかりつけ動物病院`
  const seoDesc =
    h.seo?.description ??
    `${h.address}の動物病院。${h.animals.join('・')}の診療。${h.hours['日'] ? '日曜・祝日も診療。' : ''}駐車場${h.parking}。TEL: ${h.phone}`
  const seoKeywords = h.seo?.keywords ?? [
    `${city} 動物病院`,
    `${city} ${h.animals[0]} 動物病院`,
    h.hours['日'] ? `${city} 日曜 動物病院` : '',
    h.features.includes('ペットホテル') ? `${city} ペットホテル` : '',
  ].filter(Boolean)

  return `// ============================================================
// このファイルのみ病院ごとに書き換えます
// generate.ts が自動生成します（手動で編集しないでください）
// 生成日時: ${new Date().toLocaleString('ja-JP')}
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
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

export const HOSPITAL: HospitalData = ${JSON.stringify(
    {
      name: h.name,
      phone: h.phone,
      ...(h.fax ? { fax: h.fax } : {}),
      address: h.address,
      access: h.access,
      parking: h.parking,
      ...(h.website_url ? { website_url: h.website_url } : {}),
      ...(h.google_rating ? { google_rating: h.google_rating } : {}),
      ...(h.review_count ? { review_count: h.review_count } : {}),
      director: {
        name: h.director_name,
        title: '院長',
        ...(h.director_education ? { education: h.director_education } : {}),
      },
      animals: h.animals,
      hours: h.hours,
      features: h.features,
      ...(h.catchcopy ? { catchcopy: h.catchcopy } : {}),
      ...(h.subcopy ? { subcopy: h.subcopy } : {}),
      ...(h.reviews ? { reviews: h.reviews } : {}),
      ...(h.equipment ? { equipment: h.equipment } : {}),
      weakness: h.weakness_details,
      seo: {
        title: seoTitle,
        description: seoDesc,
        keywords: seoKeywords,
      },
    },
    null,
    2
  )}
`
}

async function generateDemoSite(inputPath: string): Promise<string> {
  console.log(`📖 入力ファイル読み込み: ${inputPath}`)
  const input: HospitalInput = JSON.parse(fs.readFileSync(inputPath, 'utf-8'))
  const h = input.hospital

  const slug = toSlug(h.name_kana ?? h.name)
  console.log(`🏥 病院名: ${h.name} (slug: ${slug})`)

  // hospital.ts を上書き生成
  const hospitalTsContent = generateHospitalTs(input)
  const outPath = path.join(__dirname, '..', 'src', 'lib', 'hospital.ts')
  fs.writeFileSync(outPath, hospitalTsContent, 'utf-8')
  console.log(`✅ hospital.ts を更新しました`)

  // Vercel にデプロイ
  const projectName = `vet-demo-${slug}`
  console.log(`🚀 Vercel にデプロイ中... (project: ${projectName})`)

  try {
    const result = execSync(
      `vercel deploy --yes --name "${projectName}" --prod`,
      {
        encoding: 'utf-8',
        cwd: path.join(__dirname, '..'),
        stdio: ['pipe', 'pipe', 'inherit'],
      }
    )

    const url = result.trim().split('\n').pop() ?? ''
    console.log(`\n🎉 デモサイト生成完了！`)
    console.log(`🔗 URL: ${url}`)
    console.log(`\n--- 営業メール用情報 ---`)
    console.log(`病院名: ${h.name}`)
    console.log(`電話: ${h.phone}`)
    console.log(`デモURL: ${url}`)

    return url
  } catch (e) {
    console.error('❌ デプロイに失敗しました。vercel CLI がインストールされているか確認してください。')
    console.error('   npm install -g vercel && vercel login')
    throw e
  }
}

// エントリポイント
const inputFile = process.argv[2]
if (!inputFile) {
  console.error('使い方: npm run generate -- <input.json のパス>')
  process.exit(1)
}

generateDemoSite(path.resolve(inputFile))
  .then((url) => {
    process.stdout.write(url + '\n')
  })
  .catch(() => {
    process.exit(1)
  })
