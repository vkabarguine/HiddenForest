# HiddenForest — API Integration Plan

## General rules

- Use official APIs and OAuth flows only.
- Verify current platform documentation before implementation; permissions, review requirements, quotas, and supported media types change.
- Request the minimum scopes needed for each feature.
- Separate account connection from feature capability: a successful OAuth connection does not mean every read, publish, or analytics operation is available.
- Record API version, granted scopes, capability checks, sync time, and structured errors.
- Never commit app secrets, access tokens, refresh tokens, or downloaded private media.

## YouTube

Likely integration surface: YouTube Data API v3, with YouTube Analytics API for eligible analytics.

Initial validation:
- Identify the exact channel and Google account that owns/manages it.
- Create a Google Cloud project and configure OAuth consent as required.
- Confirm the channel identity returned for the authorized user.
- Test listing channel details and videos available to that authorization.
- Determine quota cost for the intended inventory and refresh patterns.
- Validate which analytics reports and dimensions are available to the channel.
- Confirm current upload/publishing requirements before enabling publication.

Potential MVP operations:
- Read channel and video metadata.
- Import video IDs, titles, descriptions, thumbnails, publication dates, and available statistics.
- Read eligible analytics reports.
- Later: upload video and update supported metadata, subject to API policy and project eligibility.

Important: YouTube API access is not equivalent to unrestricted downloading of original video files. The application should support user-provided original files when needed for processing.

## Facebook

Likely integration surface: Meta Graph API and relevant Page/video publishing capabilities.

Initial validation:
- Confirm whether the target is a Facebook Page, personal profile, Group, or another surface.
- Identify the person who has the required Page access and can authorize the app.
- Create a Meta developer app and configure the required products and OAuth flow.
- Inspect the exact permissions granted to the app and the Page access token.
- Determine whether App Review or business verification is required for intended use.
- Test listing Pages the user can manage and reading permitted Page content.
- Validate available insights and their retention/aggregation constraints.
- Verify publishing support for each intended format before designing the scheduler.

Important: do not assume that personal profile or Group publishing is supported in the same way as Page publishing. Design the adapter around explicit capabilities.

## Capability matrix

Maintain this table with results from real tests; do not mark a capability supported based only on documentation.

| Platform / capability | Status | Evidence / notes |
|---|---|---|
| YouTube OAuth | Not tested | |
| YouTube channel inventory | Not tested | |
| YouTube video inventory | Not tested | |
| YouTube Analytics | Not tested | |
| YouTube upload/publishing | Not tested | |
| Facebook OAuth | Not tested | |
| Facebook Page inventory | Not tested | |
| Facebook Page insights | Not tested | |
| Facebook Page publishing | Not tested | |
| Facebook personal profile publishing | Not assumed | |
| Facebook Group publishing | Not assumed | |

## Implementation approach

Create one adapter per platform, with normalized domain objects and explicit capability reporting. Keep provider-specific pagination, token refresh, rate limiting, API versioning, and error translation inside the adapter.

The product UI should explain when an operation is unavailable because of platform policy, missing permission, account eligibility, or temporary API failure.
