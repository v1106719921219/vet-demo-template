export default function Cloud({ size = 90, color = '#fff', style = {} }: {
  size?: number; color?: string; style?: React.CSSProperties
}) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 180 100" style={style} aria-hidden="true">
      <ellipse cx="50" cy="65" rx="38" ry="28" fill={color}/>
      <ellipse cx="90" cy="55" rx="45" ry="35" fill={color}/>
      <ellipse cx="130" cy="70" rx="40" ry="26" fill={color}/>
    </svg>
  )
}
