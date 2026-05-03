export default function PawPrint({ size = 28, color = 'currentColor', rotate = 0, opacity = 1 }: {
  size?: number; color?: string; rotate?: number; opacity?: number
}) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 40 44"
      style={{ transform: `rotate(${rotate}deg)`, opacity }}
      fill={color} aria-hidden="true">
      <ellipse cx="20" cy="28" rx="11" ry="10"/>
      <ellipse cx="8" cy="17" rx="4.5" ry="6"/>
      <ellipse cx="32" cy="17" rx="4.5" ry="6"/>
      <ellipse cx="14" cy="7" rx="3.8" ry="5"/>
      <ellipse cx="26" cy="7" rx="3.8" ry="5"/>
    </svg>
  )
}
