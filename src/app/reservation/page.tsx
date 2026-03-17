'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HOSPITAL } from '@/lib/hospital'

const schema = z.object({
  ownerName: z.string().min(1, 'お名前を入力してください'),
  phone: z.string().min(10, '正しい電話番号を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  petName: z.string().min(1, 'ペットの名前を入力してください'),
  animalType: z.enum(['犬', '猫'], { required_error: '動物種を選択してください' }),
  ageWeight: z.string().optional(),
  symptoms: z.string().min(1, '症状・相談内容を入力してください'),
  preferredDate: z.string().optional(),
  preferredTime: z.enum(['午前', '午後']).optional(),
  visitType: z.enum(['初診', '再診']),
})

type FormData = z.infer<typeof schema>

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { visitType: '初診' },
  })

  const onSubmit = async (data: FormData) => {
    // TODO: メール or スプレッドシートに送信する実装
    console.log('予約データ:', data)
    await new Promise((r) => setTimeout(r, 800)) // デモ用の遅延
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-bg pt-24 px-4">
          <div className="mx-auto max-w-lg py-20 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl">
              ✓
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-main">送信完了</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              お問い合わせありがとうございます。<br />
              確認後、折り返しご連絡いたします。
            </p>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="mt-6 block text-primary font-bold hover:opacity-80"
            >
              急ぎの場合はお電話を：{HOSPITAL.phone}
            </a>
            <Link href="/" className="mt-8 inline-block text-sm text-muted underline">
              トップページに戻る
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-24 px-4 pb-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="font-serif text-2xl font-bold text-text-main sm:text-3xl">ご予約・お問い合わせ</h1>
            <p className="mt-3 text-sm text-muted">
              以下のフォームからご予約いただけます。<br />
              お急ぎの場合はお電話（
              <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="text-primary font-bold">
                {HOSPITAL.phone}
              </a>
              ）にてご連絡ください。
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-primary-light bg-white p-8 shadow-sm space-y-6"
          >
            {/* 飼い主名 */}
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                飼い主様のお名前 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('ownerName')}
                type="text"
                placeholder="山田 花子"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {errors.ownerName && <p className="mt-1 text-xs text-red-500">{errors.ownerName.message}</p>}
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('phone')}
                type="tel"
                placeholder="090-0000-0000"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {/* メール */}
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="example@mail.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* ペット名 + 動物種 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-main mb-1">
                  ペットの名前 <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('petName')}
                  type="text"
                  placeholder="ポチ"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.petName && <p className="mt-1 text-xs text-red-500">{errors.petName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main mb-1">
                  動物種 <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3 mt-3">
                  {HOSPITAL.animals.map((a) => (
                    <label key={a} className="flex items-center gap-2 cursor-pointer">
                      <input
                        {...register('animalType')}
                        type="radio"
                        value={a}
                        className="accent-primary"
                      />
                      <span className="text-sm">{a}</span>
                    </label>
                  ))}
                </div>
                {errors.animalType && <p className="mt-1 text-xs text-red-500">{errors.animalType.message}</p>}
              </div>
            </div>

            {/* 年齢・体重（任意） */}
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                年齢・体重（任意）
              </label>
              <input
                {...register('ageWeight')}
                type="text"
                placeholder="3歳・5kg"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* 症状・相談内容 */}
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                症状・相談内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('symptoms')}
                rows={4}
                placeholder="例：3日前から食欲がなく、元気がない様子です。"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              {errors.symptoms && <p className="mt-1 text-xs text-red-500">{errors.symptoms.message}</p>}
            </div>

            {/* 希望日時 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-main mb-1">希望日</label>
                <input
                  {...register('preferredDate')}
                  type="date"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main mb-1">希望時間帯</label>
                <div className="flex gap-3 mt-3">
                  {(['午前', '午後'] as const).map((t) => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer">
                      <input
                        {...register('preferredTime')}
                        type="radio"
                        value={t}
                        className="accent-primary"
                      />
                      <span className="text-sm">{t}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* 初診・再診 */}
            <div>
              <label className="block text-sm font-medium text-text-main mb-2">
                初診 / 再診 <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {(['初診', '再診'] as const).map((v) => (
                  <label key={v} className="flex items-center gap-2 cursor-pointer">
                    <input
                      {...register('visitType')}
                      type="radio"
                      value={v}
                      className="accent-primary"
                    />
                    <span className="text-sm">{v}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
