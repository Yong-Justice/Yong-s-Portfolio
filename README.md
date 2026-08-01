# Yong Justice Numfor — Portfolio

A bilingual, data-driven professional portfolio built around the “Signal / System / Record” design concept. It presents frontend development, digital records, operational workflows, data skills, and support experience as one coherent body of work.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The default route redirects to English at `/en`; French is available at `/fr`.

Production verification:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Edit content

All editable facts and copy live in `src/content/`. `site-config.ts` holds contact details and URLs; `projects.ts` holds case studies; the remaining files cover profile, experience, education, capabilities, navigation, and interface copy.

Keep missing or unverified material explicit in `CONTENT_CHECKLIST.md`. Do not replace TODOs with assumptions. Assets live in `public/images/` and `public/documents/`; keep the stable CV filenames because external links may depend on them.

## Project privacy

The German examination platform is client work with a private repository. Do not add screenshots, a live link, proprietary content, client credentials, user data, payment data, or private administration details until written permission is confirmed. NexaCase and Arkiva must use fictional demonstration data only.

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected Next.js settings.
4. Set `NEXT_PUBLIC_SITE_URL` to the production origin, without a trailing slash.
5. Deploy and verify both `/en` and `/fr` routes.
6. Add a custom domain later, update `NEXT_PUBLIC_SITE_URL`, and redeploy.

No database, CMS, authentication, or Supabase configuration is required.

## Release quality checklist

- Test widths: 360, 390, 768, 1024, 1440, and wide desktop.
- Test keyboard navigation, visible focus, mobile menu scroll behavior, both themes, and reduced motion.
- Confirm sitemap, robots, metadata, Open Graph image, favicon, and structured data.
- Verify every link and both CV downloads; unavailable links must remain unavailable rather than use `#`.
- Replace the watermarked portrait with a photographer-authorized clean export before public launch.
- Confirm no `.env`, key, token, credential, private client record, or proprietary content is committed.
