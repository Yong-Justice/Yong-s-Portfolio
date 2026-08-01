import { capabilities } from "@/src/content/capabilities";
import type { Locale } from "@/src/content/site-config";

export function CapabilityMap({ locale }: { locale: Locale }) {
  return <div className="capability-map">{capabilities[locale].map((item) => <article key={item.index}><div><span>{item.index}</span><i /></div><h3>{item.name}</h3><p>{item.description}</p><small>{item.evidence}</small></article>)}</div>;
}
