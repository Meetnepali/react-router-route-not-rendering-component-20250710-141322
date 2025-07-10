# React Router v6 Nested Route Debug Task

## Scenario
A route refactor broke nested project subpages. Navigating to `/projects/123/details` or `/projects/123/tasks` always shows the NotFound fallback, though `/projects/123` works fine. Your task: **fix the route misconfiguration so nested subpages render their components.**

## What to Do
1. Review `src/App.js` and routing structure.
2. Try to visit `http://localhost:3000/projects/123/details` and `.../tasks`—they incorrectly render the NotFound page.
3. **Find and fix the bug so nested project subpages render their intended components.**

## Setup Instructions

1. Ensure you have [Docker](https://www.docker.com/) installed.
2. Run `./run.sh`
3. Visit [http://localhost:3000/projects/123/details](http://localhost:3000/projects/123/details) in your browser.
4. When fixed: Each subpage shows its correct content!

---

**Files to check:**
- `src/App.js` (the route config)
- `src/Project.js`, etc.

**10-Minute Task!**
