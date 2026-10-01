# V8 App Template

A modern, production-ready web application template built with Vite, React, and TypeScript. Designed for AI-assisted development with component introspection, layout systems, and excellent developer experience.

## ðŸš€ Features

- **âš¡ Lightning Fast**: Vite for instant hot module replacement and optimized builds
- **ðŸŽ¯ Type Safe**: Full TypeScript coverage across frontend and backend
- **ðŸŽ¨ Beautiful UI**: shadcn/ui components with Tailwind CSS
- **ðŸ§  AI-Friendly**: Component introspection for AI development tools
- **ðŸ“± Responsive**: Mobile-first design with modern CSS
- **ðŸ”§ Developer Experience**: Hot reload, linting, formatting, and testing setup
- **ðŸš€ Production Ready**: Server-side rendering (SSR), optimized builds, and deployment-ready

## ðŸ› ï¸ Tech Stack

### Frontend

- **React 19** - Modern React with hooks and concurrent features
- **TypeScript 5** - Full type safety across the application
- **Vite 6** - Fast build tool and dev server with HMR
- **Tailwind CSS 3** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **React Router DOM 7** - Client-side routing
- **Motion** - Smooth animations and transitions

### Backend

- **Express API** - Health check, SSR, and extensible server routes
- **TypeScript** - Type-safe backend development

### Development Tools

- **ESLint 9** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Fast unit testing
- **TypeScript ESLint** - TypeScript-specific linting

> **Requirement:** Node.js 22 or later.

## ðŸ“ Project Structure

```
v8-app-template/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/       # React components
â”‚   â”‚   â”œâ”€â”€ ui/           # shadcn/ui base components (40+ components)
â”‚   â”‚   â””â”€â”€ Spinner.tsx
â”‚   â”œâ”€â”€ layouts/          # Layout systems
â”‚   â”‚   â”œâ”€â”€ RootLayout.tsx    # Centralized layout wrapper
â”‚   â”‚   â”œâ”€â”€ Website.tsx       # Structural container
â”‚   â”‚   â”œâ”€â”€ Dashboard.tsx     # Dashboard layout
â”‚   â”‚   â”œâ”€â”€ RootLayout.md     # RootLayout documentation
â”‚   â”‚   â”œâ”€â”€ Website.md        # Website layout documentation
â”‚   â”‚   â””â”€â”€ parts/            # Layout components
â”‚   â”‚       â”œâ”€â”€ Header.tsx
â”‚   â”‚       â””â”€â”€ Footer.tsx
â”‚   â”œâ”€â”€ pages/            # Page components (content only)
â”‚   â”‚   â”œâ”€â”€ index.tsx     # Homepage
â”‚   â”‚   â””â”€â”€ _404.tsx      # 404 page
â”‚   â”œâ”€â”€ lib/              # Utilities and API
â”‚   â”‚   â”œâ”€â”€ utils.ts      # Utility functions
â”‚   â”‚   â””â”€â”€ api-client.ts # API client
â”‚   â”œâ”€â”€ server/           # Express API routes and SSR entry point
â”‚   â”‚   â”œâ”€â”€ api/health/GET.ts
â”‚   â”‚   â””â”€â”€ entry.ts
â”‚   â”œâ”€â”€ styles/           # Global styles
â”‚   â”‚   â””â”€â”€ globals.css
â”‚   â”œâ”€â”€ test/             # Test setup
â”‚   â”‚   â””â”€â”€ setup.ts
â”‚   â”œâ”€â”€ App.tsx           # Root application component
â”‚   â”œâ”€â”€ main.tsx          # Application entry point
â”‚   â”œâ”€â”€ router.ts         # Route definitions
â”‚   â””â”€â”€ routes.tsx        # Route components
â”œâ”€â”€ dev-tools/            # Development mode enhancements
â”œâ”€â”€ source-mapper/        # AI introspection plugin
â”œâ”€â”€ public/               # Static assets
â”œâ”€â”€ Dockerfile.dev        # Local Docker development image
â””â”€â”€ vite.config.ts        # Vite, API, SSR, and plugin configuration
```

## ðŸ“œ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the client and SSR server bundle for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run Vitest unit tests
- `npm run test:ui` - Open the Vitest UI
- `npm run test:coverage` - Run tests with coverage reporting
- `npm run audit` - Check dependencies for high-severity vulnerabilities
- `npm run lint` - Run ESLint code linting
- `npm run lint:fix` - Run ESLint and apply fixes where possible
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format source files with Prettier
- `npm run clean` - Remove build output and Vite's dependency cache
- `npm run reset` - Clean the project and reinstall dependencies

## ðŸŽ¨ UI Components

This template includes shadcn/ui components that are:

- **Accessible** - Built with Radix UI primitives
- **Customizable** - Easy to modify and extend
- **Consistent** - Design system with CSS variables
- **Copy-paste friendly** - Own your components

The template includes 40+ pre-configured shadcn/ui components:

- **Layout**: Card, Separator, Tabs, Sheet, Dialog
- **Forms**: Button, Input, Textarea, Select, Checkbox, Switch
- **Navigation**: Navigation Menu, Breadcrumb, Pagination
- **Feedback**: Alert, Badge, Progress, Skeleton, Sonner
- **Data Display**: Table, Avatar, Calendar, Hover Card
- **Overlays**: Popover, Tooltip, Alert Dialog, Drawer
- **Interactive**: Accordion, Collapsible, Command, Context Menu

To add new components:

```bash
npx shadcn-ui@latest add component-name
```

## ðŸ§  AI Integration

### Component Introspection

The custom source-mapper plugin adds metadata to components in development:

```html
<div
  data-source-file="/src/components/Button.tsx"
  data-source-line="15"
  data-source-component="Button"
>
  Click Me
</div>
```

### Development Mode Integration

The dev-tools package provides:

- **Element selection**: Click to identify components
- **Live editing**: Modify component props in real-time
- **Source mapping**: Navigate directly to component source
- **AI integration**: Enhanced context for AI development tools

### AI-Friendly Patterns

- **Consistent naming**: PascalCase components, camelCase hooks
- **Clear file structure**: Logical separation of concerns
- **Type-first approach**: Comprehensive TypeScript types
- **Standard patterns**: CRUD operations, form handling, error boundaries

## ðŸ—ƒï¸ API & Layouts

### API Routes

The template includes:

- `GET /api/health` - Health check endpoint
- Extensible API client setup in `src/lib/api-client.ts`

### Layout System

**RootLayout Pattern** (recommended for multi-page sites):

`App.tsx` already wraps every route in RootLayout, which renders a shared header and footer on every page. Customize them by editing `src/layouts/parts/Header.tsx` and `Footer.tsx` directly â€” there is no config prop. For reference, the routing shape is a pathless layout route:

```tsx
// src/App.tsx (already wired)
const router = createBrowserRouter([
  {
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    children: routes,
  },
]);
```

Pages become simple content components:

```tsx
// src/pages/home.tsx
export default function HomePage() {
  return <div>Your content here</div>;
}
```

**Available Layouts**:

- **RootLayout** (`src/layouts/RootLayout.tsx`) - Centralized header/footer wrapper
- **Website** (`src/layouts/Website.tsx`) - Structural container (used by RootLayout)
- **Dashboard** (`src/layouts/Dashboard.tsx`) - Admin panels and dashboards

See `src/layouts/*.md` for detailed usage documentation.

## ðŸ§ª Testing

Run tests with:

```bash
npm run test
```

The template includes:

- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **Jest DOM** - Custom Jest matchers

## ðŸ“¦ Deployment

### Build for production:

```bash
npm run build
```

### Deploy options:

- **Vercel/Netlify** - Frontend deployment
- **Railway/Render** - Full-stack deployment
- **Docker** - Containerized deployment

### Enquiry storage on Vercel

Contact form submissions are forwarded to the GoDaddy Inbox and archived through the Google Apps Script Web App. Website review submissions are written through Apps Script as well. Set `GOOGLE_SHEETS_ENDPOINT` in Vercel, or use the existing `VITE_GOOGLE_SHEETS_ENDPOINT` setting. The script must accept a flat JSON object and return `{ "success": true }`. No Google Cloud service-account key is needed for this setup.


## ðŸ”§ Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure only the values needed by your deployment. See `ENVIRONMENT_VARIABLES.md` for each variable's purpose and whether it belongs in Vercel.

```env
VITE_GA_MEASUREMENT_ID=
GOOGLE_SHEETS_ENDPOINT=
```

### Custom Plugins

**Source Mapper Plugin**: Adds component introspection for AI tools
**Dev Tools Plugin**: Enables development mode enhancements
**Fullstory Integration**: Optional user analytics (configurable)

Configure in `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sourceMapperPlugin from "./source-mapper/src/index";
import { devToolsPlugin } from "./dev-tools/src/vite-plugin";
import { fullStoryPlugin } from "./fullstory-plugin";

export default defineConfig(({ mode }) => ({
  plugins: [
    react({ babel: { plugins: [sourceMapperPlugin] } }),
    ...(mode === "development" ? [devToolsPlugin(), fullStoryPlugin()] : []),
  ],
}));
```

## ðŸŽ¯ Best Practices

### Component Architecture

- Keep components small and focused
- Use composition over inheritance
- Extract reusable logic into hooks
- Prefer function components with hooks

### State Management

- Keep local state in components with useState/useReducer
- Use React Context for app-wide state (theme, auth)
- Consider external libraries (Zustand, Redux Toolkit) for complex state
- Leverage layout props for shared configuration

### Layout Usage

- Use RootLayout for multi-page sites (configure in `App.tsx`)
- Pages should only contain content, not layout concerns
- Define header/footer once, applies to all pages
- Follow layout documentation in `src/layouts/*.md`
- Never duplicate header/footer config across pages

## ðŸ¤ Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Run linting and tests
6. Submit a pull request

## ðŸ“„ License

MIT License - feel free to use this template for any project.

## ðŸ™ Acknowledgments

Built with amazing open-source tools:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vitest](https://vitest.dev/)

---

**Happy coding! ðŸŽ‰**
