# Cassia Melvin's Personal Website - Brazilian Recipes and North Carolina Living

A Next.js-powered personal website that showcases Brazilian recipes adapted with American ingredients and shares lifestyle content about living in North Carolina. The website features a modern, responsive design with dark mode support and seamless social media integration.

This project combines culinary expertise with lifestyle content, offering visitors authentic Brazilian recipes reimagined with locally available ingredients, alongside insights into life in North Carolina's diverse regions - from the Outer Banks' coastal beauty to Asheville's mountain landscapes. Built with Next.js and TypeScript, the website delivers a fast, accessible, and visually appealing user experience with built-in theme support and social media integration.

## Repository Structure
```
.
├── src/                          # Source code directory
│   ├── app/                     # Next.js app directory containing core application files
│   │   ├── globals.css         # Global styles and theme configuration
│   │   ├── layout.tsx         # Root layout component with theme and metadata setup
│   │   └── page.tsx          # Main landing page component
│   └── components/            # Reusable component directory
│       └── theme-provider.tsx # Theme management component
├── next.config.ts              # Next.js configuration file
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mjs          # ESLint configuration for code quality
├── postcss.config.mjs         # PostCSS configuration for Tailwind CSS
└── package.json              # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cassia-website-2025

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Quick Start
1. After installation, the development server will run at `http://localhost:3000`
2. The main landing page will display with:
   - Author information and social media links
   - Hero image section
   - Contact link with hover effects

```typescript
// Example of adding a new page component
// src/app/recipes/page.tsx
export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-200 via-yellow-100 to-lime-200">
      <h1>Brazilian Recipes</h1>
      {/* Add your content here */}
    </main>
  );
}
```

### More Detailed Examples

1. Using the Theme Provider:
```typescript
import { ThemeProvider } from "@/components/theme-provider"

function MyComponent() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {/* Your component content */}
    </ThemeProvider>
  );
}
```

2. Adding Social Media Links:
```typescript
import { RiInstagramLine } from "react-icons/ri";

<Link
  href="https://www.instagram.com/cassiacmelvin/"
  className="hover:opacity-70 transition-opacity"
  target="_blank"
  rel="noopener noreferrer"
>
  <RiInstagramLine size={28} />
  <span className="sr-only">Instagram</span>
</Link>
```

### Troubleshooting

1. Theme Not Working
- Issue: Dark mode not applying correctly
- Solution: Check if ThemeProvider is properly wrapped around your component
- Debug: Enable system theme detection with `enableSystem` prop

2. Image Loading Issues
- Issue: Images not displaying or slow loading
- Solution: Ensure proper usage of Next.js Image component with required props
- Debug: Check image paths and verify `next.config.ts` image configuration

## Data Flow
The website follows a component-based architecture where theme settings and page content are managed through React context and Next.js routing.

```ascii
[User Input] -> [Theme Provider] -> [Layout Component] -> [Page Components]
                      ↓                     ↓
                [Theme Context]    [Social Media Links]
                      ↓                     ↓
                [Style Updates]     [External Services]
```

Component Interactions:
- ThemeProvider manages dark/light mode preferences
- Layout component provides consistent structure across pages
- Page components render specific content sections
- Social media links connect to external platforms
- Image optimization handled by Next.js Image component