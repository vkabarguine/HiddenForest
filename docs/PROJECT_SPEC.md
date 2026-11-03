# HiddenForest — Product Specification

## 1. Vision

Build an AI-assisted workspace that helps a creator turn an existing body of media into a consistently managed, measurable, and improving social media presence.

The first use case is to organize and grow the Jane Kabarguina content presence using existing YouTube and Facebook material. The design should not assume that only those platforms will ever be supported.

## 2. Users and roles

### Initial user
- Owner / administrator: connects social accounts, manages the media library, reviews AI output, approves publishing, and views analytics.

### Future roles
- Editor: prepares and reviews content.
- Publisher: approves and schedules posts.
- Analyst: reviews performance and recommendations.

Role-based access is a later milestone unless multiple collaborators are required for the first release.

## 3. Core workflows

### A. Connect and inventory
- Connect supported social accounts through official OAuth flows.
- Discover accessible channels, pages, videos, posts, and available metrics.
- Import metadata and references to source media.
- Record the source platform, source ID, URL, timestamps, and import status.
- Clearly distinguish imported metadata from media files actually downloaded or stored.

### B. Media library
- Search and filter by title, transcript, topic, date, platform, and status.
- Store media metadata, thumbnails, transcripts, captions, and processing state.
- Support upload of original media when platform APIs do not provide a downloadable source.
- Avoid duplicate imports using platform IDs and content hashes where available.

### C. AI content studio
- Transcribe speech and retain timestamps where supported.
- Generate summaries, topics, keywords, suggested titles, descriptions, chapters, and short-form excerpts.
- Draft platform-specific captions and calls to action.
- Preserve source facts and flag uncertainty; never invent claims, quotes, credentials, or results.
- Allow editing, regeneration, and comparison of variants.
- Keep provenance: source asset, model/provider, generation time, and user edits.

### D. Review and publishing
- Provide a preview for each platform and format.
- Require explicit human approval before publishing in the MVP.
- Schedule, pause, cancel, and retry publishing jobs.
- Store remote post IDs, URLs, timestamps, and error details.
- Make jobs idempotent to prevent duplicate posts after retries.
- Show platform limitations before a user commits to a schedule.

### E. Analytics
- Import available post and channel/page metrics.
- Store timestamped metric snapshots rather than overwriting history.
- Compare performance by platform, topic, format, and publication time where data supports it.
- Explain missing or non-comparable metrics.
- Generate recommendations with supporting observations and confidence, not unsupported certainty.

## 4. MVP scope

1. User authentication for the application.
2. Secure connection status for YouTube and Facebook.
3. Read-only account and content inventory.
4. Media catalog with search and processing status.
5. Transcript and AI summary generation for selected assets.
6. Draft metadata and post variants with editable review.
7. Basic analytics import and display where official APIs expose the data.

Publishing can follow after API capability and permission validation. The MVP should not depend on scraping or unofficial endpoints.

## 5. Explicitly out of scope for MVP

- Autonomous publishing without user approval.
- Automated ad spend changes or campaign bidding.
- Guaranteed growth, reach, or engagement outcomes.
- Scraping private or restricted platform data.
- Multi-tenant SaaS billing and public self-service onboarding.
- Complex team permissions and approval chains.

## 6. Non-functional requirements

- Security: encrypt secrets at rest, use least-privilege scopes, redact tokens from logs.
- Reliability: retries with backoff, idempotency keys, job status visibility.
- Auditability: record account connections, approvals, publishing actions, and failures.
- Privacy: collect only necessary data and provide deletion/export paths.
- Maintainability: typed interfaces, automated tests, migrations, and documented API adapters.
- Observability: structured logs, health checks, and error reporting without sensitive payloads.

## 7. Success criteria for the first milestone

- The owner can connect the intended accounts using official OAuth.
- The system can enumerate accessible content and report exactly what was and was not imported.
- Duplicate imports are avoided.
- A user can inspect a content item and its source URL.
- The system can process a selected video into a transcript and summary, with processing failures visible.
- No publishing action occurs without an explicit approval step.

## 8. Open product decisions

- Is the first deployment local/private, or hosted from the beginning?
- Which Facebook surface is in scope: Pages, personal profile, Groups, or a combination? Official API support differs.
- Should original video files be copied into managed object storage, or should the first version store platform references and accept manual uploads?
- Which analytics are most important for the first dashboard?
- Is the initial application single-user, or should collaborators be supported immediately?
