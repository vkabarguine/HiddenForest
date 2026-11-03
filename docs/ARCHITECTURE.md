# HiddenForest — Architecture

## 1. Architecture goals

- Keep social networks and AI vendors behind replaceable adapters.
- Separate interactive API requests from long-running media and publishing jobs.
- Preserve source records and processing history.
- Make human approval a first-class part of the publishing workflow.
- Start with a modular monolith; split services only when operational evidence justifies it.

## 2. Proposed components

```text
[ Next.js Web App ]
        |
        v
[ FastAPI Application ] ---- [ PostgreSQL ]
        |                         |
        |                         +-- accounts, assets, drafts,
        |                             jobs, posts, metric snapshots
        |
        +---- [ Redis / Job Queue ]
                     |
                     v
              [ Worker Processes ]
                 |       |       |
                 v       v       v
              FFmpeg   AI APIs  Platform Adapters
                 |       |       |
                 +-------+-------+
                         |
                  [ Object Storage ]
```

### Web application
- Creator dashboard, account connection screens, media library, content editor, publishing calendar, and analytics.
- Calls the backend; does not hold platform client secrets.

### API backend
- Authentication and authorization.
- Domain logic and validation.
- OAuth callback handling and token lifecycle.
- Read/write APIs for assets, drafts, approvals, jobs, and analytics.
- Enqueues long-running work rather than processing large media synchronously.

### Worker system
- Media probing, audio extraction, transcription, summarization, and derivative generation.
- Platform inventory synchronization and analytics refresh.
- Scheduled publishing and retry handling.
- All jobs should have explicit state, retry policy, and correlation ID.

### PostgreSQL
Suggested core entities:
- `users`
- `social_accounts`
- `oauth_credentials` (or a dedicated secrets store reference)
- `media_assets`
- `media_sources`
- `transcripts`
- `content_items`
- `content_variants`
- `approvals`
- `publishing_jobs`
- `published_posts`
- `metric_snapshots`
- `recommendations`
- `audit_events`

Use migrations and foreign keys. Store external platform IDs with a uniqueness constraint scoped to the account/platform.

## 3. Adapter boundaries

### Social platform adapter
A common interface should expose capability-aware operations such as:
- authorize / refresh / revoke connection
- list accessible accounts or channels
- list content and fetch available metadata
- publish a supported content type
- fetch supported analytics

Do not assume every platform supports every operation. Each adapter should return declared capabilities and structured unsupported-operation errors.

### AI provider interfaces
Separate interfaces for:
- speech-to-text
- text generation
- image/video understanding
- embeddings and semantic search (later)

Store provider/model identifiers and relevant processing settings with generated outputs. Never couple domain models to a single vendor's response schema.

### Media storage
Store durable object keys and metadata in the database. Use signed, short-lived URLs for browser access. Keep originals immutable; derived media should be separate assets with lineage.

## 4. Key domain flows

### Import
1. User connects an account.
2. Worker requests permitted content pages.
3. Adapter normalizes platform records.
4. Upsert source records using platform/account IDs.
5. Queue eligible media for processing.
6. Record pagination cursors and sync outcomes.

### AI processing
1. Worker obtains authorized media input.
2. Probe media and extract audio as needed.
3. Transcribe and analyze.
4. Save transcript and generated suggestions with provenance.
5. Mark processing complete or store a structured failure.

### Publish
1. User edits a content variant.
2. User previews it for a target platform.
3. User explicitly approves and schedules it.
4. Worker revalidates account and content capability.
5. Worker publishes with an idempotency strategy where supported.
6. Persist remote identifiers and result.
7. Reconcile uncertain outcomes before retrying to avoid duplicate publication.

## 5. Security

- Use OAuth authorization code flows and state/PKCE where supported.
- Request minimum scopes needed for the current milestone.
- Encrypt refresh/access tokens using a managed key or secrets service; never store plaintext tokens in logs.
- Keep secrets out of frontend bundles, repository files, fixtures, and screenshots.
- Apply CSRF protection, secure cookies, input validation, and rate limits.
- Record security-sensitive actions in an audit log.
- Provide disconnect and token-revocation workflows.
- Use separate development and production credentials.

## 6. Reliability and operations

- Use bounded retries with exponential backoff and jitter.
- Respect platform rate limits and quota responses.
- Make imports and metric refreshes safe to rerun.
- Track job attempts, last error, next run time, and terminal failure state.
- Add health/readiness endpoints and structured logs.
- Test adapters with mocked responses and maintain a small set of safe integration tests.

## 7. Suggested repository layout

```text
backend/
  app/
    api/
    core/
    db/
    domain/
    integrations/
      social/
      ai/
    services/
    workers/
  tests/
frontend/
  src/
    app/
    components/
    features/
infra/
docs/
scripts/
```

This layout is a target, not a requirement to create every directory before its first use.

## 8. Deployment evolution

Start with Docker Compose for local development (API, worker, PostgreSQL, Redis, frontend). Choose production hosting, object storage, secrets management, backups, and monitoring after the deployment/privacy requirements are decided.
