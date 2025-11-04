# Smart Avatar - Client

Vue 3 + Vite + Vuetify application with GitHub Pages deployment.

## Tech Stack

- **Vue 3** (v3.5.22) - Composition API
- **Vuetify** (v3.10.8) - Material Design UI Framework
- **Vue Router** (v4.6.3) - Client-side routing
- **Vite** (v7.1.7) - Build tool and dev server
- **TypeScript** - Type safety

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` or `master` branch.

**Setup Steps:**

1. Go to your repository settings on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source**, select "GitHub Actions"
4. Push your code to the main/master branch
5. The workflow will automatically build and deploy your app

Your site will be available at: `https://<username>.github.io/smart-avatar/`

### Manual Deployment

You can also deploy manually using the deploy script:

```bash
npm run deploy
```

Then push the `dist` folder contents to the `gh-pages` branch:

```bash
# From the client directory
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:<username>/smart-avatar.git main:gh-pages
cd ..
```

## Configuration

The base path is configured in `vite.config.ts` as `/smart-avatar/`. If you rename your repository, update this value accordingly.

```typescript
export default defineConfig({
  base: '/smart-avatar/', // Update this if repo name changes
  // ...
})
```

## Project Structure

```
client/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Vue components
│   ├── plugins/        # Vuetify configuration
│   ├── router/         # Vue Router configuration
│   ├── views/          # Page components
│   ├── App.vue         # Root component
│   └── main.ts         # App entry point
├── public/             # Public static files
└── index.html          # HTML template
```

## License

This project is private and proprietary.
