# Titan Sports Arena — Next.js Website

## Stack
- **Frontend**: Next.js 14 (App Router), React 18, Tailwind CSS
- **Database**: MongoDB (Mongoose)
- **Forms**: Netlify Forms (booking + contact)
- **Hosting**: Netlify

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Set environment variables
Copy `.env.local.example` to `.env.local` and fill in your MongoDB URI:
```
MONGODB_URI=mongodb+srv://...
```

### 3. Run development server
```bash
npm run dev
```

### 4. Deploy to Netlify
- Push to GitHub
- Connect repo in Netlify dashboard
- Set `MONGODB_URI` in Netlify environment variables
- Netlify auto-detects Next.js via `@netlify/plugin-nextjs`

## Pages
- `/` — Home
- `/about` — About
- `/facilities` — Facilities & Pricing
- `/cafe` — Mini Machines Café
- `/gallery` — Photo Gallery (with lightbox + filter)
- `/book` — Booking Form (Netlify Forms)
- `/contact` — Contact Form (Netlify Forms)

## API Routes (MongoDB)
- `POST /api/bookings` — Save booking to MongoDB
- `GET  /api/bookings` — Fetch all bookings
- `POST /api/contact`  — Save contact message
- `GET  /api/contact`  — Fetch all messages

## Images
All images are in `/public/images/`. No renaming needed.
