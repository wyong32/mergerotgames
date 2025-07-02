# Merge Rot

The ultimate merging game experience with brainrot entertainment!

## Vercel Deployment

This project is optimized for **Vercel** deployment:

1. **Connect your repository** to Vercel
2. **Build command**: `npm run build`
3. **Output directory**: `dist`
4. **SPA routing** is handled by `vercel.json`

### Auto-deployment
- Push to main branch → automatic deployment
- Pull requests → preview deployments

### Configuration
- `vercel.json` - Handles SPA routing and caching
- All other routes redirect to `index.html`
- Static assets get optimized caching headers

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- ✅ SPA routing with client-side navigation
- ✅ SEO-optimized meta tags
- ✅ Responsive design
- ✅ Legal pages (Privacy, Terms, etc.)
- ✅ Automatic sitemap generation
- ✅ Performance optimized builds

---

**Ready for Vercel deployment!** 🚀
