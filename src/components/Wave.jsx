export default function Wave({ fill = 'var(--color-cream)', className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`-mb-px block h-[clamp(40px,6vw,90px)] w-full ${className}`}
    >
      <path
        d="M0 90 L0 52 C 120 12 240 12 360 44 C 480 76 600 76 720 44 C 840 12 960 12 1080 44 C 1200 76 1320 76 1440 48 L1440 90 Z"
        fill={fill}
      />
    </svg>
  )
}
