# Deepali — Full-Stack Developer Portfolio

Personal portfolio website built with React, TypeScript, Express, and Parcel. Features a contact form backend, dark/light mode, interactive animations, and live project demos.

---

## Stack

**Frontend:** React 19, TypeScript, Parcel, GSAP, Locomotive Scroll  
**Backend:** Express.js, TypeScript, express-validator  
**Deployment:** Frontend → Vercel, Backend → Render / Railway

---

## Quick Start

```bash
# Install all dependencies
cd frontend && npm install
cd ../backend && npm install
cd ..

# Start both servers together
npm run dev
```

- Frontend: `http://localhost:1234`
- Backend: `http://localhost:5000`

---

## Project Structure

```
portfolio/
├── frontend/            # React app (Parcel)
│   ├── src/
│   │   ├── components/  # Navbar, Hero, Skills, Experience, Projects, Contact, Footer
│   │   ├── context/     # ThemeContext (dark/light mode)
│   │   ├── api.ts       # Backend API client
│   │   └── index.css    # Global styles + light theme overrides
│   ├── public/
│   ├── .env             # API_URL
│   └── vercel.json
├── backend/             # Express API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── middleware/
│   └── .env.example
└── package.json         # Root scripts (concurrently)
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend + backend concurrently |
| `npm run build` | Build both projects for production |
| `npm run dev --prefix frontend` | Frontend only (Parcel) |
| `npm run dev --prefix backend` | Backend only (ts-node-dev) |

---

## Deployment

**Frontend** — push to Vercel (auto-detects `vercel.json`):
```bash
cd frontend && npx vercel --prod
```

**Backend** — set these env vars on your host:
```
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

---

## Sections

- **Hero** — Intro with animated cards, social links
- **Skills** — Languages, web tech, databases, tools
- **Experience** — Timeline with single-entry centering
- **Projects** — MEDICHAIN & MINDCARE live demos
- **Contact** — Form connected to backend API, email/social links
- **Dark/Light mode** — Toggle in navbar, persisted to localStorage

---

## Environment Variables

**Frontend** (`frontend/.env`):
```
API_URL=http://localhost:5000
```

**Backend** (`backend/.env`):
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:1234
```

---

## License

MIT
