# HiddenForest — Development Status

## Current state

- [x] GitHub repository created: `vkabarguine/HiddenForest`
- [x] Repository access verified through the connected GitHub integration.
- [ ] Initial application scaffold
- [ ] Local development environment
- [ ] Social API proof of concept
- [ ] Media inventory
- [ ] AI processing workflow
- [ ] Publishing workflow
- [ ] Analytics dashboard

## Current milestone

**Milestone 0: product and integration discovery**

The platform is for Hidden Forest Studio (https://hiddenforeststudio.com), Jane Kabarguina's lessons, classes, and workshops business. First validate YouTube inventory and capabilities. Facebook account type will be clarified later. Do not assume that a video URL permits downloading or transcribing the video.

## Decisions made

- Build a modular platform for Hidden Forest Studio, not a generic creator SaaS product.
- Prefer affordable online hosting, subject to cost evaluation.
- Start with links and metadata, not stored copies of videos.
- Measure studio-relevant outcomes where possible: awareness, interest in classes/workshops, website traffic, and inquiries.
- Start with YouTube and Facebook.
- Use official platform APIs and OAuth.
- Keep AI providers replaceable behind interfaces.
- Require explicit human approval before every publication, including scheduled content; trust must be established.
- Start with a modular monolith and background workers.

## Open questions

1. Which exact YouTube channel(s) should be connected?
2. Is the Facebook destination a Page, personal profile, Group, or more than one? (Deferred.)
3. Which affordable online hosting provider fits the operating budget?
4. Which authorized captions/transcripts are available for linked videos, and when would owner-provided media be needed?
5. Which first analytics outcomes matter most: views/watch time, engagement, audience growth, traffic, or conversions?

## Change log

### 2026-11-02
- Created initial product specification, architecture proposal, roadmap, and API integration plan.
- Clarified the product is for Jane Kabarguina's Hidden Forest Studio business, not a "Hidden Forest Method".
- Recorded online hosting preference subject to cost, link-first media inventory, explicit publishing approval, and deferred Facebook account details.
- No application code or credentials have been added yet.
