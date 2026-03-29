import { HOSPITAL } from './hospital'

export type ClinicStatus =
  | 'open_am'
  | 'open_pm'
  | 'break'
  | 'closed_pm'
  | 'closed_today'
  | 'before_open'
  | 'after_close'

export interface ClinicStatusResult {
  status: ClinicStatus
  label: string
  subLabel: string
  badgeColor: 'green' | 'yellow' | 'gray' | 'blue'
}

const DAY_KEYS = ['日', '月', '火', '水', '木', '金', '土']

export function getClinicStatus(now: Date = new Date()): ClinicStatusResult {
  const day = DAY_KEYS[now.getDay()]
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const time = hours * 100 + minutes

  const todayHours = HOSPITAL.hours[day as keyof typeof HOSPITAL.hours]

  // 本日休診
  if (!todayHours) {
    return {
      status: 'closed_today',
      label: '本日は休診です',
      subLabel: '翌診療日にお気軽にご連絡ください',
      badgeColor: 'gray',
    }
  }

  // 開院前（〜9:00）
  if (time < 900) {
    return {
      status: 'before_open',
      label: '本日 9:00より診療開始',
      subLabel: 'オンラインでのご予約は24時間受付中',
      badgeColor: 'blue',
    }
  }

  // 午前診療中（9:00〜13:00）
  if (time >= 900 && time < 1300) {
    return {
      status: 'open_am',
      label: '午前診療中（〜13:00）',
      subLabel: 'お電話またはオンラインでご予約ください',
      badgeColor: 'green',
    }
  }

  // 13:00〜15:30
  if (time >= 1300 && time < 1530) {
    if (!todayHours.pm) {
      return {
        status: 'closed_pm',
        label: '本日の午後は休診です',
        subLabel: '午前の診療は終了しました',
        badgeColor: 'gray',
      }
    }
    return {
      status: 'break',
      label: '休憩中（15:30より再開）',
      subLabel: 'オンラインでのご予約は24時間受付中',
      badgeColor: 'yellow',
    }
  }

  // 15:30〜19:00
  if (time >= 1530 && time < 1900) {
    if (!todayHours.pm) {
      return {
        status: 'closed_pm',
        label: '本日の午後は休診です',
        subLabel: '明日の診療をお待ちしています',
        badgeColor: 'gray',
      }
    }
    return {
      status: 'open_pm',
      label: '午後診療中（〜19:00）',
      subLabel: 'お電話またはオンラインでご予約ください',
      badgeColor: 'green',
    }
  }

  // 閉院後（19:00〜）
  return {
    status: 'after_close',
    label: '本日の診療は終了しました',
    subLabel: 'オンラインでのご予約は24時間受付中',
    badgeColor: 'gray',
  }
}
