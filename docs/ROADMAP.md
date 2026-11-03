# HiddenForest — Roadmap

This roadmap is intentionally milestone-driven. Each phase should end with a working, testable result.

## Phase 0 — Validate the foundations

- [ ] Confirm target YouTube channel(s); defer deciding the Facebook account surface until the owner provides details.
- [ ] Determine which account owner can authorize each integration.
- [ ] Create developer app(s) and review current official API requirements.
- [ ] Validate OAuth, available scopes, quotas, and content/analytics endpoints.
- [ ] Compare affordable online hosting options and choose a provider only after estimating recurring costs.
- [ ] Inventory content by links and metadata first; document whether authorized captions or other inputs are available without downloading video files.

**Exit:** a written integration capability matrix and a small proof of concept that can list permitted account/content metadata.

## Phase 1 — Application foundation

- [ ] Define configuration and environment variable conventions.
- [ ] Add FastAPI application and health endpoint.
- [ ] Add PostgreSQL schema and migrations.
- [ ] Add authentication and owner-level authorization.
- [ ] Add Docker Compose development environment.
- [ ] Add linting, formatting, type checks, and automated tests.
- [ ] Add structured logging and safe error handling.

**Exit:** application starts locally, database migrations run, and CI checks pass.

## Phase 2 — Account connections and media catalog

- [ ] Implement YouTube adapter for authorized inventory reads.
- [ ] Implement Facebook inventory only after the exact account surface and permitted API capabilities are confirmed.
- [ ] Build OAuth connection/disconnection screens.
- [ ] Implement paginated, resumable sync jobs.
- [ ] Add normalized media source and asset records.
- [ ] Add duplicate prevention and sync status visibility.
- [ ] Build searchable media library.

**Exit:** user can browse an accurate catalog of accessible content with source links and sync status.

## Phase 3 — AI content studio

- [ ] Add authorized transcript/caption ingestion first; media probing or audio extraction only for owner-provided or otherwise permitted media.
- [ ] Add transcription provider interface and first provider.
- [ ] Store timestamped transcripts.
- [ ] Generate summaries, topics, titles, descriptions, chapters, and tags.
- [ ] Generate platform-specific draft variants.
- [ ] Build edit, compare, and approval UI.
- [ ] Preserve generation provenance and user edits.

**Exit:** a selected video can be turned into editable, reviewable content drafts.

## Phase 4 — Publishing and scheduling

- [ ] Validate official publishing support for each target platform/content type.
- [ ] Implement capability-aware publishing adapters.
- [ ] Add calendar and scheduling workflow.
- [ ] Require explicit approval for every publication, including scheduled jobs.
- [ ] Add job idempotency, retries, and uncertain-result reconciliation.
- [ ] Store remote post IDs and URLs.
- [ ] Add publish history and failure recovery.

**Exit:** approved content can be safely published to supported destinations, with a visible audit trail.

## Phase 5 — Analytics and recommendations

- [ ] Import available channel/page and post metrics.
- [ ] Store timestamped metric snapshots.
- [ ] Build performance dashboard and filters.
- [ ] Identify measurable Hidden Forest Studio outcomes: awareness, website visits, class/workshop interest, and inquiries.
- [ ] Compare content themes and formats where data is comparable.
- [ ] Generate evidence-linked recommendations.
- [ ] Track whether recommendations were accepted and their outcomes.

**Exit:** the dashboard can explain performance and provide actionable, traceable recommendations.

## Phase 6 — Growth and advertising intelligence

- [ ] Evaluate official advertising APIs and account eligibility.
- [ ] Add campaign read-only reporting first.
- [ ] Model campaign goals, spend, and conversion data where available.
- [ ] Add budget or targeting suggestions for human review.
- [ ] Only consider write actions after explicit authorization, safeguards, and audit requirements are defined.

**Exit:** advertising analysis is useful and safe; no autonomous spend changes by default.

## Working rule

Do not advance a phase merely because code exists. Advance when its exit criteria are demonstrated by tests or a real, documented integration check.
