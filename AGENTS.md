# Agent instructions — HiddenForest

## Project purpose

HiddenForest is an internal AI-assisted content management and business growth platform for **Hidden Forest Studio**, the business where **Jane Kabarguina** teaches lessons, classes, and workshops.

- Studio website: https://hiddenforeststudio.com
- Primary purpose: support the studio's content workflow and business outcomes (awareness, interest in classes/workshops, website visits, and inquiries).
- This is **not** a project for a "Hidden Forest Method" and is **not** currently intended as a generic multi-tenant creator SaaS.
- Refer to `docs/PROJECT_SPEC.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, and `docs/DEVELOPMENT_STATUS.md` for context; update them when decisions or capabilities change.

## Non-negotiable safeguards

1. **Never publish without explicit human approval.** AI may propose, draft, and schedule candidates, but publication requires a specific approval recorded for the exact content, destination, and action. Do not introduce autonomous publishing or enable existing publishing functionality by default.
2. **Use official platform APIs** and respect scopes, quotas, terms, and capabilities. Do not assume Facebook Page, profile, and Group APIs are interchangeable; Facebook account details are still to be confirmed.
3. **Link-first media inventory.** Prefer platform IDs, links, metadata, and authorized captions/transcripts. Do not download, duplicate, or store original videos by default. A video URL alone does not grant permission or technical access to audio/video.
4. **Protect credentials and private data.** Never commit tokens, OAuth client secrets, `.env` files, private media, or personal data. Redact secrets from logs, tests, and output. Ask before handling sensitive credentials.
5. **No fabricated data or claims.** Empty dashboards should show empty/unknown states; don't invent studio metrics, video statistics, or business results.
6. **Avoid destructive changes.** Don't modify the original legacy YouTube `MainApp` project; treat it as reference material. Ask before deleting data, replacing working functionality, changing remote infrastructure, or taking external actions with side effects.

## Development workflow

- Work in the `HiddenForest` repository. Inspect the current tree and recent changes before editing; another agent may have ongoing work.
- Prefer a feature branch and a reviewable pull request for substantial changes. Do not overwrite concurrent Codex changes or force-push.
- Keep changes small and focused. Explain what changed, what was tested, and any known limitations.
- Run relevant checks before committing. Backend: `pytest -q` and `ruff check .` from `backend/`. Frontend: `npm run lint`, `npx tsc --noEmit`, and `npm run build` from `frontend/`. If a command cannot run, report that explicitly.
- Use clear commit messages; keep documentation and `docs/DEVELOPMENT_STATUS.md` current.
- Do not claim that a feature works unless it has been tested or clearly label it as unverified.

## Current architecture and priorities

- Backend: Python/FastAPI; frontend: Next.js/TypeScript. Use existing code and conventions rather than replacing the stack without a reason.
- Prefer affordable online hosting, but evaluate recurring costs before provisioning services. Local development must remain possible.
- First priority: a **read-only YouTube inventory** with real video links, titles, thumbnails, and permitted metadata, integrated into the dashboard. Reuse suitable code from the owner's existing YouTube application when authorized and appropriate.
- Next: authorized transcript/caption analysis, AI-generated drafts, human review and approval, then capability-checked publishing.
- Collect analytics with clear provenance and connect them to studio-relevant outcomes where measurable.
- Maintain replaceable adapters for social platforms and AI providers; avoid unnecessary infrastructure and media storage.

## Communication

- Surface assumptions and uncertainties rather than silently deciding important business or platform behavior.
- Ask for approval before publishing, spending money, enabling paid services, exposing the app publicly, or changing account permissions.
- When completing a task, summarize the files changed, tests run, and recommended next step.
