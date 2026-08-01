export function SignalHeading({ index, eyebrow, title }: { index: string; eyebrow?: string; title: string }) {
  return <div className="signal-heading"><div className="signal-meta"><span>{index}</span><i />{eyebrow && <em>{eyebrow}</em>}</div><h2>{title}</h2></div>;
}
