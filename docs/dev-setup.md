# Local Dev Setup

## Requirements
- Node.js 18+
- Docker (optional but recommended)
- Git

## Run Locally (without Docker)

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run start:dev
```

## Run with Docker

```bash
cp .env.example .env
docker-compose up --build
```
