# replit.md

## Overview

This is a full-stack web application built with React.js frontend and Express.js backend, showcasing a modern portfolio website for Parth Khandla, a frontend developer. The application uses a monolithic structure with shared schemas and types, implements a clean separation between client and server code, and includes a comprehensive UI component library built with shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot reload with Vite integration in development mode

### Build System
- **Client Build**: Vite with React plugin and TypeScript support
- **Server Build**: esbuild for server bundle optimization
- **Development**: Integrated development server with HMR support

## Key Components

### Database Layer
- **ORM**: Drizzle with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - contains user table definition with Zod validation
- **Migrations**: Stored in `./migrations` directory
- **Connection**: Uses Neon Database serverless connection (@neondatabase/serverless)

### Storage Interface
- **Pattern**: Repository pattern with IStorage interface
- **Implementation**: MemStorage class for in-memory storage (development)
- **Methods**: User CRUD operations (getUser, getUserByUsername, createUser)

### UI Components
- **Component Library**: Comprehensive set of shadcn/ui components
- **Theme**: Dark theme with CSS custom properties
- **Typography**: Space Grotesk, Inter, and JetBrains Mono fonts
- **Icons**: Font Awesome and Lucide React icons

### Portfolio Sections
- **Hero Section**: Animated introduction with 3D-like effects
- **About Section**: Personal information and statistics
- **Skills Section**: Interactive skill cubes with animations
- **Experience Section**: Timeline of work experience
- **Projects Section**: 3D project cards with hover effects
- **Contact Section**: Contact form with WhatsApp integration

## Data Flow

### Client-Server Communication
1. **API Requests**: Client uses TanStack Query for data fetching
2. **Request Handling**: Express middleware processes requests with logging
3. **Error Handling**: Centralized error handling with status codes
4. **Response Format**: JSON responses with consistent error structure

### Development Workflow
1. **Hot Reload**: Vite handles client-side hot reloading
2. **Server Restart**: tsx handles server restart on file changes
3. **Static Assets**: Vite serves static assets in development
4. **Production Build**: Separate client and server build processes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Runtime error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (Replit-specific)
- **tsx**: TypeScript execution for development server

### Portfolio-Specific
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel component
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette component

## Deployment Strategy

### Build Process
1. **Client Build**: `vite build` creates optimized client bundle in `dist/public`
2. **Server Build**: `esbuild` bundles server code to `dist/index.js`
3. **Asset Handling**: Static assets served from built client directory

### Environment Configuration
- **Development**: Uses NODE_ENV=development with Vite dev server
- **Production**: NODE_ENV=production with built static files
- **Database**: DATABASE_URL environment variable required

### File Structure
```
├── client/          # React frontend application
├── server/          # Express backend application  
├── shared/          # Shared types and schemas
├── dist/            # Built application output
└── migrations/      # Database migration files
```

### Database Requirements
- PostgreSQL database with DATABASE_URL configured
- Drizzle migrations applied via `npm run db:push`
- Session storage table automatically created by connect-pg-simple

The application is designed to run on platforms like Replit with integrated database provisioning and includes specific optimizations for development environments.