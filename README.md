# HMS QA Automation (Playwright + TypeScript)

This repo contains only test automation for the HMS backend/frontend app.

## How to use with separate IDEs
- Open backend app (`hms`) in PyCharm
- Open this QA repo (`hms-qa`) in WebStorm

## Prerequisites
1. Run backend in PyCharm terminal:
```bash
cd /Users/Marcus-Dev/Desktop/hms
source .venv313/bin/activate
uvicorn main:app --reload --port 8000
```
2. In this QA repo:
```bash
cd /Users/Marcus-Dev/Desktop/hms-qa
cp .env.example .env
npm ci
npx playwright install
npm run test:smoke
```

## Commands
- `npm run test:smoke`
- `npm run test:regression`
- `npm run test:api`
- `npm run test:report`

## Notes
- Implement TODOs in `tests/` to build your portfolio step by step.
- Base URLs are configured in `.env`.
