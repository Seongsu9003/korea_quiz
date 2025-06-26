# Korean Life Adaptation Quiz Application

## Overview

This is a full-stack web application that helps foreigners test their adaptation to Korean life through an interactive quiz. The application provides personalized results based on user responses across different categories like daily life, social customs, food culture, transportation, and technology. The quiz supports multiple languages and offers a modern, responsive user interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Korean cultural color scheme
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: React hooks with TanStack Query for server state
- **Internationalization**: Custom translation system supporting English, Vietnamese, Japanese, and Chinese

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Development**: Hot module replacement with Vite integration
- **Session Management**: Ready for connect-pg-simple integration
- **Storage Layer**: Modular storage interface with in-memory implementation (ready for database upgrade)

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Two main tables - users and quiz_results
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Quiz System
- **Question Management**: Randomized question delivery from categorized question pool
- **Progress Tracking**: Real-time progress indicators and question navigation
- **Answer Validation**: Client-side validation with user feedback
- **Results Calculation**: Persona-based scoring system with category breakdowns

### UI/UX Features
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Toast Notifications**: User feedback for actions and validation errors
- **Loading States**: Smooth transitions between quiz states
- **Cultural Theming**: Korean-inspired color palette and design elements

### Language Support
- **Multi-language Quiz Content**: Questions and options in multiple languages
- **Dynamic Translation**: Runtime language switching without page reload
- **Locale-aware Formatting**: Date and number formatting per locale
- **RTL Support Ready**: Architecture supports right-to-left languages

## Data Flow

1. **Quiz Initialization**: User selects language, questions are randomized and loaded
2. **Question Flow**: Sequential question presentation with progress tracking
3. **Answer Collection**: Answers stored in local state with validation
4. **Results Processing**: Score calculation based on correct answers and category analysis
5. **Persona Assignment**: Algorithm assigns Korean life persona based on performance
6. **Results Display**: Comprehensive results with category breakdowns and recommendations

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Router alternative)
- Vite build tooling with TypeScript support
- TanStack Query for server state management

### UI/UX Libraries
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Class Variance Authority for component variants

### Database & Validation
- Drizzle ORM with Neon Database serverless driver
- Zod for runtime type validation
- Date-fns for date manipulation

### Development Tools
- ESBuild for production bundling
- TSX for TypeScript execution
- Replit integration plugins

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite dev server with HMR
- **Type Checking**: Real-time TypeScript validation
- **Database**: PostgreSQL via Replit's database service
- **Port Configuration**: Frontend on 5000, proxied to port 80

### Production Build
- **Frontend**: Vite build with asset optimization
- **Backend**: ESBuild bundling for Node.js deployment
- **Static Assets**: Served from dist/public directory
- **Database Migrations**: Automated via Drizzle Kit

### Scaling Considerations
- **Autoscale Deployment**: Configured for Replit's autoscale infrastructure
- **Session Storage**: PostgreSQL session store for multi-instance support
- **Static Asset CDN**: Ready for CDN integration
- **Database Connection Pooling**: Neon serverless handles connection management

## Changelog

Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Fixed button visibility issues and radio button state management

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Fixes

- Fixed button color visibility by changing background from pure white to light gray and adding borders
- Fixed radio button state persistence by properly handling undefined values and clearing selections between questions
- Improved button contrast and disabled states for better user experience