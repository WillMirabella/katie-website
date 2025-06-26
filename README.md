# Katie M - Personal Website

A clean, minimal personal website built with Next.js and TailwindCSS, featuring essays, travel stories, and a beautiful image gallery.

## Features

- **Home Page**: Personal introduction with image gallery
- **Essays**: Blog-style posts with detailed views
- **Trips**: Travel adventures with expandable details
- **Contact**: Static contact information with social links
- **Responsive Design**: Works beautifully on all devices
- **Modern Styling**: Clean design with custom color palette

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v4 with custom color scheme
- **Typography**: Inter font family
- **Deployment**: Configured for GitHub Pages with static export

## Color Palette

- Primary Light: `#B1F0F7`
- Primary Medium: `#81BFDA`
- Accent Light: `#F5F0CD`
- Accent Bright: `#FADA7A`

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
# Build and export static files
npm run build
```

This will generate a static export in the `out/` directory ready for deployment.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages using GitHub Actions:

1. Push your code to the `main` branch
2. The GitHub Action will automatically build and deploy to GitHub Pages
3. Make sure to enable GitHub Pages in your repository settings

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── essays/
│   │   │   ├── page.tsx      # Essays overview
│   │   │   └── [slug]/       # Individual essay pages
│   │   ├── trips/
│   │   │   └── page.tsx      # Trips page
│   │   ├── contact/
│   │   │   └── page.tsx      # Contact page
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   └── Navigation.tsx    # Main navigation
│   └── data/
│       ├── essays.ts         # Essay content
│       └── trips.ts          # Trip data
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
└── public/                   # Static assets
```

## Customization

### Adding New Essays

Edit `src/data/essays.ts` to add new essay content.

### Adding New Trips

Edit `src/data/trips.ts` to add travel experiences.

### Updating Contact Information

Edit `src/app/contact/page.tsx` to update contact details.

### Adding Real Images

Replace the placeholder images in the home page gallery with actual photos by:
1. Adding image files to the `public/` directory
2. Updating the `sampleImages` array in `src/app/page.tsx`

## Next Steps

1. Replace placeholder images with real photos
2. Update contact information with actual details
3. Customize essay and trip content
4. Set up GitHub repository and enable Pages
5. Push to GitHub to trigger automatic deployment

## License

This project is created for personal use. Feel free to use it as a template for your own website.