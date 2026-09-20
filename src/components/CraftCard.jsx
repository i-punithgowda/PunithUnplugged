const ICONS = {
  devices: (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 2.5c1.4 1.8 2.2 3.6 2.2 5.5S9.4 11.7 8 13.5C6.6 11.7 5.8 9.9 5.8 8S6.6 4.3 8 2.5Z" />
      <path d="M3 8h10" />
    </svg>
  ),
  pay: (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1.5" y="4" width="13" height="8.5" rx="1.4" />
      <path d="M1.5 7h13" />
    </svg>
  ),
  live: (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.2 11.2a5 5 0 0 1 0-6.4M11.8 4.8a5 5 0 0 1 0 6.4M6.2 9.4a2.4 2.4 0 0 1 0-2.8M9.8 6.6a2.4 2.4 0 0 1 0 2.8" />
      <circle cx="8" cy="8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="8" cy="4" rx="5" ry="2" />
      <path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4" />
      <path d="M3 8c0 1.1 2.2 2 5 2s5-.9 5-2" />
    </svg>
  ),
  migrate: (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 6h10M10.5 3.5 13 6l-2.5 2.5M13 10H3M5.5 7.5 3 10l2.5 2.5" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 12.5h7.2A2.8 2.8 0 0 0 14 9.9c0-1.4-1-2.5-2.4-2.7A3.4 3.4 0 0 0 5 5.4 2.7 2.7 0 0 0 2.2 8.2c0 1.4.8 2.5 2.3 2.7" />
    </svg>
  ),
}

function DevicesVisual() {
  return (
    <div className="relative h-full">
      <div className="absolute left-[7%] top-[10%] h-[62%] w-[64%] overflow-hidden rounded-[8px] bg-white shadow-[0_8px_14px_-6px_rgba(30,32,27,0.4)]">
        <div className="flex h-[22%] items-center gap-[3px] bg-[#24344c] px-1.5">
          <span className="h-[5px] w-[5px] rounded-full bg-[#ff8a3c]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#f5e211]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#2ba0ff]" />
        </div>
        <div className="space-y-1 p-1.5">
          <div className="relative h-7 overflow-hidden rounded-[4px] bg-[#cfe8ff]">
            <span className="absolute bottom-0 left-[12%] h-4 w-5 rounded-t-full bg-[#7eb8e8]" />
            <span className="absolute bottom-0 left-[28%] h-5 w-6 rounded-t-full bg-[#6aaee4]" />
            <span className="absolute right-[18%] top-1 h-2.5 w-2.5 rounded-full bg-[#f5e211]" />
          </div>
          <span className="block h-1 w-full rounded-full bg-[#d9c6ee]" />
          <span className="block h-1 w-3/4 rounded-full bg-[#d9c6ee]" />
        </div>
      </div>
      <div className="absolute bottom-[6%] right-[8%] h-[72%] w-[38%] rounded-[11px] bg-[#24344c] p-[3px] shadow-[0_10px_16px_-6px_rgba(30,32,27,0.45)]">
        <div className="flex h-full flex-col rounded-[8px] bg-white p-1">
          <span className="mx-auto mb-1 h-[3px] w-4 rounded-full bg-ink/15" />
          <div className="grid grid-cols-2 gap-[3px]">
            <span className="h-3.5 rounded-[3px] bg-sky" />
            <span className="h-3.5 rounded-[3px] bg-sun" />
          </div>
          <div className="mt-1 flex justify-center gap-0.5">
            <span className="h-1 w-1 rounded-full bg-ink/20" />
            <span className="h-1 w-1 rounded-full bg-ink/20" />
            <span className="h-1 w-1 rounded-full bg-ink/20" />
          </div>
          <span className="mt-1 block h-1 rounded-full bg-ink/10" />
          <span className="mt-0.5 block h-1 w-4/5 rounded-full bg-ink/10" />
        </div>
      </div>
    </div>
  )
}

function PayVisual() {
  return (
    <div className="relative h-full">
      <div className="absolute left-[8%] top-[16%] h-[38%] w-[58%] -rotate-[18deg] rounded-[8px] bg-[#24344c] p-1.5 shadow-[0_8px_14px_-6px_rgba(30,32,27,0.4)]">
        <span className="block h-3 w-4 rounded-[2px] bg-sun" />
        <span className="mt-2 block h-1 w-3/4 rounded-full bg-white/25" />
        <span className="mt-1 block h-1 w-1/2 rounded-full bg-white/20" />
      </div>
      <div className="absolute bottom-[10%] left-[10%] flex">
        <span className="h-4 w-4 rounded-full bg-sun shadow-sm ring-1 ring-ink/10" />
        <span className="-ml-1.5 h-4 w-4 rounded-full bg-[#e8c51a] shadow-sm" />
        <span className="-ml-1.5 h-4 w-4 rounded-full bg-sun shadow-sm" />
      </div>
      <div className="absolute bottom-[12%] right-[8%] top-[10%] w-[46%] rounded-[10px] bg-white p-1.5 shadow-[0_10px_16px_-6px_rgba(30,32,27,0.35)] ring-1 ring-ink/5">
        <span className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#3ecf6a]">
          <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
            <path d="M2.4 6.3 5 8.8 9.6 3.6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
        <p className="mt-1 text-center text-[7px] font-semibold leading-tight tracking-tight text-ink">Payment Successful</p>
        <span className="mt-1.5 block h-1 rounded-full bg-ink/10" />
        <span className="mt-0.5 block h-1 w-2/3 rounded-full bg-ink/10" />
      </div>
    </div>
  )
}

function LiveVisual() {
  return (
    <div className="relative flex h-full flex-col p-2">
      <span className="ml-auto flex items-center gap-0.5 rounded-full bg-[#FF007F] px-1.5 py-[2px] text-[6px] font-bold uppercase tracking-wide text-white">
        <span className="h-1 w-1 rounded-full bg-white" />
        Live
      </span>
      <div className="mt-1 flex items-end gap-1">
        <span className="h-5 w-5 shrink-0 rounded-full bg-[#ff8a3c] shadow-sm" />
        <span className="h-7 flex-1 rounded-2xl rounded-bl-sm bg-white shadow-[0_4px_10px_-4px_rgba(30,32,27,0.35)]" />
      </div>
      <div className="mt-1.5 flex items-end justify-end gap-1">
        <span className="h-7 w-[72%] rounded-2xl rounded-br-sm bg-[#FF007F] shadow-[0_4px_10px_-4px_rgba(30,32,27,0.3)]" />
        <span className="h-5 w-5 shrink-0 rounded-full bg-sky shadow-sm" />
      </div>
    </div>
  )
}

function DataVisual() {
  return (
    <div className="grid h-full grid-cols-2 gap-1.5 p-2">
      <div className="flex items-end gap-[3px] rounded-[8px] bg-white p-1.5 shadow-[0_4px_10px_-4px_rgba(30,32,27,0.3)]">
        {[40, 70, 52, 88, 60].map((h, i) => (
          <span key={i} className="flex-1 rounded-t-[2px] bg-sky" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex items-center justify-center rounded-[8px] bg-white shadow-[0_4px_10px_-4px_rgba(30,32,27,0.3)]">
        <span
          className="h-9 w-9 rounded-full"
          style={{ background: 'conic-gradient(#2ba0ff 0 140deg, #ff8a3c 140deg 230deg, #f5e211 230deg 300deg, #FF007F 300deg 360deg)' }}
        />
      </div>
      <div className="col-span-2 flex items-end rounded-[8px] bg-white px-1.5 py-1 shadow-[0_4px_10px_-4px_rgba(30,32,27,0.3)]">
        <svg viewBox="0 0 80 24" className="h-5 w-full" aria-hidden="true">
          <path d="M2 18 C 14 16, 18 8, 28 10 S 46 20, 58 8 S 72 6, 78 4" fill="none" stroke="#2ba0ff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

function MigrateVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-3">
      <div className="flex w-full items-center justify-between">
        <Cylinder color="#c5c1b6" />
        <svg viewBox="0 0 18 10" className="h-3 w-4" aria-hidden="true">
          <path d="M1 5h14M11 2l4 3-4 3" fill="none" stroke="#3ecf6a" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <Cylinder color="#3ecf6a" />
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
        <span className="block h-full w-[62%] rounded-full bg-[#3ecf6a]" />
      </div>
      <p className="text-[8px] font-medium tracking-tight text-stone">Migrating...</p>
    </div>
  )
}

function Cylinder({ color }) {
  return (
    <div className="relative h-9 w-8">
      <span className="absolute inset-x-0 top-2 bottom-1" style={{ background: color }} />
      <span className="absolute inset-x-0 top-0 h-3 rounded-full" style={{ background: color, filter: 'brightness(1.12)' }} />
      <span className="absolute inset-x-0 bottom-0 h-3 rounded-full" style={{ background: color, filter: 'brightness(0.88)' }} />
    </div>
  )
}

function CloudVisual() {
  return (
    <div className="relative flex h-full flex-col items-center justify-between px-2 pb-2 pt-3">
      <svg viewBox="0 0 72 36" className="h-8 w-[70%]" aria-hidden="true">
        <path
          d="M22 30h32c7 0 12-5 12-11s-5-11-12-11c-1.2 0-2.4.2-3.5.5C48 4.6 42 1 35 1 25 1 17 8 16 17 10 18 6 23 6 29c0 6 5 11 11 11"
          fill="#fff"
          stroke="#e8e4d8"
          strokeWidth="1"
        />
      </svg>
      <svg viewBox="0 0 100 28" className="absolute left-[12%] top-[38%] w-[76%] opacity-50" aria-hidden="true">
        <path d="M50 2 L16 26 M50 2 L50 26 M50 2 L84 26" fill="none" stroke="#7c5cff" strokeWidth="1.4" strokeDasharray="2 2" />
      </svg>
      <div className="flex w-full items-end justify-between px-1">
        <span className="h-5 w-6 rounded-[3px] bg-sun shadow-sm" />
        <span className="h-6 w-6 rounded-[4px] bg-sky shadow-sm" />
        <Cylinder color="#7c5cff" />
      </div>
    </div>
  )
}

const visuals = {
  devices: DevicesVisual,
  pay: PayVisual,
  live: LiveVisual,
  data: DataVisual,
  migrate: MigrateVisual,
  cloud: CloudVisual,
}

export default function CraftCard({ craft }) {
  const { accent, title, id } = craft
  const dark = accent === '#1e201b'
  const Visual = visuals[id]

  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-[16px] p-[5px] pt-1.5"
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0.28), rgba(255,255,255,0) 40%), ${accent}`,
        boxShadow: '0 14px 24px -10px rgba(30,32,27,0.32), inset 0 1px 0 rgba(255,255,255,0.3)',
      }}
    >
      <div className="mb-1 flex items-center gap-[4px] px-1.5">
        <span className={`h-[6px] w-[6px] rounded-full ${dark ? 'bg-white/40' : 'bg-black/25'}`} />
        <span className={`h-[6px] w-[6px] rounded-full ${dark ? 'bg-white/28' : 'bg-black/18'}`} />
        <span className={`h-[6px] w-[6px] rounded-full ${dark ? 'bg-white/18' : 'bg-black/12'}`} />
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[12px] bg-white shadow-[inset_0_1px_3px_rgba(30,32,27,0.08)]">
        <div className="min-h-0 flex-1 overflow-hidden bg-[#f7f4ea]">{Visual ? <Visual /> : null}</div>
        <div className="flex shrink-0 items-center gap-1.5 border-t border-ink/5 px-2 py-1.5 text-ink">
          {ICONS[id]}
          <span className="text-[11px] font-semibold leading-none tracking-tight">{title}</span>
        </div>
      </div>
    </div>
  )
}
