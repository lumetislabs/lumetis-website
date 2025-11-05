# Lumetis Labs Website

A modern, minimal website for Lumetis Labs LLC built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design with mobile-first approach
- Clean, minimal UI with Apple-level spacing
- SEO optimized with metadata, Open Graph, and sitemap
- TypeScript for type safety
- Tailwind CSS for styling
- Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This will:
- Build the Next.js application
- Generate sitemap.xml and robots.txt automatically via next-sitemap

### Start Production Server

```bash
npm start
```

## Project Structure

```
lumetis-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── privacy-policy/    # Privacy Policy page
│   ├── terms/             # Terms & Conditions page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Container.tsx      # Container wrapper
│   ├── Section.tsx        # Section wrapper
│   └── Button.tsx        # Button component
├── lib/                   # Utility functions
│   └── seo.ts            # SEO metadata defaults
└── public/                # Static assets
    └── robots.txt         # Robots.txt file
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables** (if needed):
   - Add `SITE_URL` in Vercel dashboard if you want to customize the sitemap URL
   - Default: `https://lumetislabs.com`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to complete deployment

### Post-Deployment

After deployment, verify:
- ✅ All pages load correctly
- ✅ Navigation works on all pages
- ✅ Sitemap is accessible at `/sitemap.xml`
- ✅ Robots.txt is accessible at `/robots.txt`
- ✅ Contact form shows success toast (client-side only)

## Customization

### Update Site URL

Edit `next-sitemap.config.js` to change the sitemap URL:
```javascript
siteUrl: process.env.SITE_URL || 'https://yourdomain.com'
```

### Update Contact Email

Edit `app/contact/page.tsx` to change the contact email address.

### Update Company Address

Edit `components/Footer.tsx` to update the company address.

## SEO Configuration

- Base metadata is set in `app/layout.tsx`
- Page-specific metadata can be added in each page's `metadata` export
- Sitemap is automatically generated via `next-sitemap`
- Robots.txt is included in the `public` folder

## Notes

- The contact form is client-side only (no backend)
- Form submissions show a success toast but don't send emails
- To enable email functionality, integrate with a service like Formspree, SendGrid, or Vercel Functions

## License

Copyright © 2025 Lumetis Labs LLC

