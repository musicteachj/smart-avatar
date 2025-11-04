# Smart Avatar

A Vue 3 component that displays user avatars intelligently — shows initials if there's no media, a single image/video if there's one source, or a carousel if there are multiple.

## How to Run

```bash
cd client
npm install
npm run dev
```

Then open your browser to the URL shown in the terminal (usually `http://localhost:5173`).

## How I Approached This

I started by scaffolding the project with Vite's Vue + TypeScript template, then added Vuetify for the UI components and vue-router for navigation. Before diving into features, I set up GitHub Actions and GitHub Pages so I could see my changes live with every push to main. Having that deployment pipeline early made it easy to test on different devices.

From there, I broke the work into phases:

**Phase 1: Foundation**  
Set up Pinia for state management, created TypeScript interfaces for the avatar props and media sources, and wrote a couple utility functions — one to extract initials from names and another to generate deterministic colors using a simple hash. This way "John Smith" always gets the same background color.

**Phase 2: Demo Data**  
Built out a Pinia store with static demo data. Added a variety of user profiles with different media configurations — some with no images, some with single sources, some with multiple. I used placeholder services like picsum.photos for images and sample video URLs to keep it realistic.

**Phase 3: Core Component**  
This was the meat of it. Built the SmartAvatar component with three display modes:

- Initials mode: circular avatar with color-coded background when there's no media
- Single media mode: displays one image or video with play/pause controls
- Carousel mode: cycles through multiple images and videos

The component automatically picks the right mode based on the sources array you pass in. Kept the API simple: just name and sources.

**Phase 4: Demo Page**  
Created a demo page showcasing all the variations. Used a responsive grid layout so it looks good on mobile, tablet, and desktop. Each example has a card with a description explaining what's being demonstrated.

**Phase 5: Polish**  
Tested everything across different screen sizes, fixed some edge cases with the video controls, and made sure the carousel arrows only show up on hover. Added this README and cleaned up any unused files from the initial template.

## What I'd Add With More Time

**User uploads**: Right now it just uses static demo data. Adding drag-and-drop image uploads would make this actually useful.

**Loading states**: It would be nice to show a skeleton loader while images are loading, and handle errors gracefully when media fails to load.

**Accessibility**: I'd add proper ARIA labels, keyboard navigation for the carousel, and better screen reader support.

**Animation**: Smooth transitions between different states would make it feel more polished.

**Tests**: Should have unit tests for the component logic and E2E tests for the demo scenarios.

**Backend integration**: Hook it up to a real API that handles image storage and serves user profile data.
