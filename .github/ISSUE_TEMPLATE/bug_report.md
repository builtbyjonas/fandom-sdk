---
name: Bug Report
about: Create a report to help us improve
title: "[BUG] "
labels: bug
assignees: ""
---

## Bug Description

**Describe the bug**
A clear and concise description of what the bug is.

**Expected behavior**
A clear and concise description of what you expected to happen.

**Actual behavior**
A clear and concise description of what actually happened.

## Reproduction

**To Reproduce**
Steps to reproduce the behavior:

1. Initialize SDK with '...'
2. Call method '...'
3. See error

**Minimal reproduction code**

```typescript
// Please provide a minimal code example that reproduces the issue
import { FandomSDK } from "fandom-sdk";

const sdk = new FandomSDK("example-wiki");
// Your code here...
```

## Environment

**System Information:**

- OS: [e.g. macOS 12.0, Windows 11, Ubuntu 20.04]
- Node.js version: [e.g. 18.15.0]
- npm/yarn version: [e.g. npm 8.19.2]
- fandom-sdk version: [e.g. 0.1.0]

**Wiki Information:**

- Wiki subdomain: [e.g. 'sonic', 'marvel']
- Page/content that triggers the bug: [if applicable]

## Error Details

**Error message**

```
Please paste the full error message here
```

**Stack trace**

```
Please paste the full stack trace here
```

**Network requests** (if applicable)

- Are you experiencing network timeouts?
- Are specific API endpoints failing?
- Any 4xx/5xx HTTP status codes?

## Additional Context

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Additional information**
Add any other context about the problem here.

**Workaround**
If you found a temporary workaround, please describe it here.

## Checklist

- [ ] I have searched for existing issues
- [ ] I have provided all required information
- [ ] I have tested with the latest version
- [ ] I have included a minimal reproduction example
