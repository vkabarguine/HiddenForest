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

The immediate objective is to confirm which YouTube and Facebook assets and API capabilities are available to the intended account owner. Avoid building assumptions about Facebook profile publishing, video file access, or analytics fields before testing.

## Decisions made

- Build a modular platform rather than a one-off script.
- Start with YouTube and Facebook.
- Use official platform APIs and OAuth.
- Keep AI providers replaceable behind interfaces.
- Require human approval before publishing in the initial release.
- Start with a modular monolith and background workers.

## Open questions

1. Which exact YouTube channel(s) should be connected?
2. Is the Facebook destination a Page, personal profile, Group, or more than one?
3. Should the first version run locally on the owner's computer or be hosted?
4. Should original videos be uploaded into managed storage, or should the first release catalog platform references and manually supplied files?
5. Which first analytics outcomes matter most: views/watch time, engagement, audience growth, traffic, or conversions?

## Change log

### 2026-11-02
- Created initial product specification, architecture proposal, roadmap, and API integration plan.
- No application code or credentials have been added yet.
