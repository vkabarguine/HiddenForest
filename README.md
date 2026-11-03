# HiddenForest

An AI-assisted content operations platform for managing, understanding, adapting, publishing, and improving social media content across platforms.

The platform is built for **Hidden Forest Studio**, the business where Jane Kabarguina offers lessons, classes, and workshops. Business website: https://hiddenforeststudio.com. Initial social sources include Jane's YouTube and Facebook content; the exact Facebook account type is still to be confirmed. This is a business-specific application, not a generic creator SaaS product.

## Product goals

- Inventory and organize existing media and published content using links and metadata first, without storing copies of original videos by default.
- Support studio awareness, interest in classes and workshops, website visits, and inquiries, subject to measurable data.
- Transcribe and analyze videos, then generate accurate titles, descriptions, chapters, captions, and platform-specific post variants.
- Let a human review and approve content before publication.
- Schedule and publish through supported official platform APIs.
- Collect post-level analytics and turn them into practical recommendations.
- Keep platform integrations replaceable and credentials secure.

## MVP principles

1. **Read and understand before publishing.** Begin with media inventory and account/API validation.
2. **Human approval by default.** AI-generated content is a draft until explicitly approved.
3. **Official APIs only.** Respect platform permissions, quotas, policies, and publishing limitations.
4. **Provider-independent AI.** Transcription, language models, and media analysis sit behind interfaces.
5. **Traceability.** Store source media, prompts/model metadata where appropriate, edits, approvals, publishing attempts, and analytics snapshots.
6. **Security first.** OAuth tokens and secrets must never be committed to the repository.

## Proposed technology

- Backend: Python 3.12+, FastAPI, Pydantic, SQLAlchemy
- Database: PostgreSQL
- Background work: Redis and Celery (or an equivalent job system)
- Frontend: Next.js and TypeScript
- Media processing: FFmpeg
- Object storage: S3-compatible storage
- Deployment: prefer cost-conscious online hosting; compare operating costs before selecting a provider. Local development remains supported.

These are initial recommendations, not irreversible decisions. See [Architecture](docs/ARCHITECTURE.md).

## Repository map

- `docs/PROJECT_SPEC.md` — product scope and requirements
- `docs/ARCHITECTURE.md` — proposed system design
- `docs/ROADMAP.md` — phased delivery plan
- `docs/API_INTEGRATIONS.md` — platform integration constraints and validation
- `docs/DEVELOPMENT_STATUS.md` — decisions, progress, and open questions

## First milestone

Validate access to the existing YouTube account and clarify the Facebook account type later; inventory available media links and metadata, and produce a reviewable content catalog. Do not enable automated publishing until API access, permissions, and approval workflows have been tested.

## Development

The implementation scaffold and local setup instructions will be added after the initial product and integration decisions are confirmed. Never place real API keys, OAuth tokens, passwords, or private user data in source control.

## Project status

Early planning. The repository currently contains the initial product documentation; implementation has not started.
