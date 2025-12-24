# TinyTales - Frontend Task

## Project Name: tinytales - Clean, descriptive name matching the project

## Version: 0.1.0 

## Project Overview
This is a Next.js 16.1.1 project with complete authentication flow and pixel-perfect UI implementation.
- User Registration (Full Name, Email, Password, Phone, Country Code)
- User Login with JWT authentication
- Account Verification with 6-digit code
- Protected Dashboard with personalized welcome message
- Pixel-perfect UI implementation based on provided mockup

## Live Demo

### Version Requirements
- Next.js 16 requires Node.js 18.17 or higher
- React 19 works with current Next.js 16
- Tailwind CSS v4 requires PostCSS 8+

## Features
### Authentication & Security
User Registration: Comprehensive sign-up with full validation (Full Name, Email, Password, Phone, Country Code)
Secure Login: JWT-based authentication with token management
Email Verification: 6-digit OTP verification flow with resend capability
Protected Routes: Middleware-based route protection for /dashboard
Session Management: Secure token storage in localStorage with cookie fallback
Form Validation: Client-side validation using Yup schemas

###  UI/UX Excellence
Pixel-Perfect Design: Faithful implementation of provided mockups
Responsive Design: Mobile-first approach with full responsiveness across all devices
Modern Interface: Clean, intuitive user interface with smooth transitions
Accessibility: Semantic HTML and ARIA labels for improved accessibility
Real-time Feedback: Interactive form validation with immediate error display
Loading States: Visual feedback during API requests

###  Technical Implementation
Modern Architecture: Next.js App Router with Server/Client Component separation
State Management: React hooks and Formik for form state
API Integration: Axios with centralized configuration and error handling
Code Quality: Type-safe development practices
Environment Configuration: Multi-environment setup ready
Production Optimization: Built-in Next.js optimizations

## Technology Stack
-Core Framework :Next.js 16.1.1 (App Router) - Modern React framework with server-side rendering
-Frontend Libraries :React 18 - UI library with hooks ,Formik - Form state management ,Yup - Schema validation ,Axios - HTTP client

## Styling & UI
Tailwind CSS - Utility-first CSS framework

## Installation
## for creating Project =>npx create-next-app@latest tinytales 
## for installing dependencies => npm install
## for installing libraries => npm install formik yup axios

## Running Project => npm run dev and open http://localhost:3000
## Deploy =>

## Clone Repository =>https://github.com/TaRek-ElSayed02/TinyTales

## Environment Configuration =>NEXT_PUBLIC_API_BASE_URL=https://tinytales.trendline.marketing/api

## Public Routes
/ - Landing page (if exists)
/auth/login - Login page
/auth/register - Registration page
/auth/verify - Email verification page

## Protected Routes
/dashboard - User dashboard (requires authentication) => protected by middleware

## API
Base Configuration
Base URL: https://tinytales.trendline.marketing/api
Headers: Accept: application/json
Error Handling: Comprehensive error catching with user-friendly messages

## Available Endpoints
POST /auth/register - User registration
POST /auth/login - User login
POST /auth/verify-email - Email verification

## Security Features
Token Management
JWT token stored in localStorage 
JWT token stored in cookies
Cookie fallback for middleware protection
Automatic token clearing on logout

## Form Validation
Client-side validation using Yup schemas
Password complexity requirements:
    Minimum 8 characters
    Uppercase & lowercase letters
    Numbers
    Special characters
Real-time validation feedback

## Route Protection
Server-side middleware checks
Automatic redirect to login for unauthenticated users
Protected dashboard route

## Script Breakdown
npm run dev - Development Server
Starts Next.js development server with hot reload
Optimized for local development
Includes error overlays and fast refresh

npm run build - Production Build
Creates optimized production build
Generates static files for deployment
Performs code splitting and optimization

npm start - Production Server
Runs the built application in production mode
Uses optimized files from next build

