import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span className="index">ERR—404</span><h1>This record could not be found.</h1><p>The route may have moved, or the system reference is incomplete.</p><Link className="button primary" href="/en">Return home</Link></main>;
}
