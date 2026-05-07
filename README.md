# Fade Flow

A modern appointment booking system designed for barber shops, built with a focus on seamless user experience and real-time information.

## Project Description

Fade Flow is a full-featured appointment management platform that enables customers to browse available services, check real-time wait times, and book appointments effortlessly. The application provides a sleek, gold-accented interface designed specifically for barber shop operations, combining functionality with an aesthetically polished user experience.

## Tech Stack

Built with the **Vibe Coding** methodology using:

- **Next.js** - Modern React framework for production-ready web applications
- **Supabase** - Open-source Firebase alternative for real-time database and authentication
- **Antigravity** - Enhanced development workflow and optimization tools

## Features

- 📅 **Appointment Booking** - Easy-to-use booking form for scheduling services
- ⏱️ **Real-Time Wait Times** - Live display of current wait times updated every 5 minutes
- 🔐 **User Authentication** - Secure login and account management
- 📱 **Responsive Design** - Mobile-first interface with Tailwind CSS styling
- ✨ **Modern UI Components** - Custom-built components with consistent barber shop branding

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### How to Run

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

Hot module reloading is enabled, so your changes will reflect instantly as you edit files.

## Project Structure

```
src/
├── app/              # Next.js app directory with pages and API routes
│   ├── appointments/ # Appointments page
│   ├── booking/      # Booking interface
│   ├── auth/         # Authentication pages
│   ├── api/          # Backend API endpoints
│   └── page.js       # Home page
├── components/       # Reusable React components
├── lib/              # Utility functions and database connections
└── public/           # Static assets
```

## Environment Setup

Refer to [SUPABASE_SETUP.md](SUPABASE_SETUP.md) for database configuration and authentication setup instructions.

## AI Attribution

Built using **Vibe Coding** methodology - an AI-assisted development approach that combines human creativity with intelligent code generation for rapid, high-quality application development.

## License

This project is open source and available under the MIT License.
