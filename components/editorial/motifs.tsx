type MotifProps = { className?: string };

export function IrregularStar({ className = "" }: MotifProps) {
  return <svg className={className} viewBox="0 0 100 100" aria-hidden="true"><path d="M49 2c5 25 13 30 37 19-14 21-11 31 13 39-25 3-31 12-18 34-22-12-31-8-35 17-7-24-17-27-37-12 9-24 3-32-22-30 25-5 29-15 14-36 23 13 32 10 38-14Z" fill="currentColor"/></svg>;
}

export function Sparkles({ className = "" }: MotifProps) {
  return <svg className={className} viewBox="0 0 100 70" aria-hidden="true"><path d="M18 2c1 14 6 19 18 20-12 1-17 7-18 21-2-14-7-20-18-21C11 21 16 16 18 2Zm52 18c2 19 9 26 27 28-18 2-25 9-27 22-2-13-9-20-27-22 18-2 25-9 27-28Z" fill="currentColor"/></svg>;
}

export function CurvedArrow({ className = "" }: MotifProps) {
  return <svg className={className} viewBox="0 0 180 100" aria-hidden="true"><path d="M8 18c48 0 87 13 103 42 7 12 4 23-4 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="m95 78 12 13 13-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export function Tape({ className = "" }: MotifProps) { return <span className={`tape-strip ${className}`} aria-hidden="true"/>; }

export function FolderMark({ className = "" }: MotifProps) {
  return <svg className={className} viewBox="0 0 100 78" aria-hidden="true"><path d="M5 17h36l9 10h45v45H5Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/><path d="M5 28h90" stroke="currentColor" strokeWidth="4"/></svg>;
}
