# Task Manager

A full-stack Task Manager application built using NestJS, Next.js, Prisma ORM, and SQLite.

## Tech Stack

### Backend

- NestJS
- Prisma ORM
- SQLite
- TypeScript
- Node.js

### Frontend

- Next.js
- React
- TypeScript

## Prerequisites

Make sure the following tools are installed:

- Node.js 20 or later
- npm 10 or later
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd task-manager
```

### 2. Backend Setup (NestJS)

Navigate to the backend directory:

```bash
cd api
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

Configure the environment variables in `api/.env`.

#### Environment Variables

| Variable     | Description                |
| ------------ | -------------------------- |
| DATABASE_URL | SQLite database connection |
| PORT         | Backend API port           |

Example:

```env
DATABASE_URL="file:./dev.db"
PORT=3001
```

#### Prisma Setup

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply existing database migrations:

```bash
npx prisma migrate deploy
```

The SQLite database is configured through Prisma using the `DATABASE_URL` environment variable.

If the repository includes the existing `dev.db` file, the application can use that database directly.

#### Start the Backend

Development mode:

```bash
npm run start:dev
```

The backend API will run at:

```text
http://localhost:3001
```

### 3. Frontend Setup (Next.js)

Open a new terminal and navigate to the frontend directory:

```bash
cd web
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env.local
```

Configure the frontend environment variables.

#### Environment Variables

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

#### Start the Frontend

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

## Running the Application

Follow these steps to run the complete application:

1. Clone the repository.
2. Install backend dependencies.
3. Configure backend environment variables.
4. Generate Prisma Client.
5. Apply database migrations.
6. Start the NestJS backend.
7. Install frontend dependencies.
8. Configure frontend environment variables.
9. Start the Next.js frontend.
10. Open http://localhost:3000.

Make sure the backend is running before using the frontend.

## Database

This project uses SQLite with Prisma ORM.

- Database provider: SQLite
- Database file: `api/prisma/dev.db` (if committed)
- Prisma schema: `api/prisma/schema.prisma`
- Migration files: `api/prisma/migrations/`

To generate Prisma Client:

```bash
npx prisma generate
```

To apply existing migrations:

```bash
npx prisma migrate deploy
```

To create a new migration during development:

```bash
npx prisma migrate dev --name migration_name
```

## How I Used AI

I used ChatGPT as an AI development assistant during the development of this project.

AI assistance was used for:

- Understanding implementation approaches and project architecture.
- Troubleshooting errors and debugging.
- Improving code structure and development workflow.
- Reviewing implementation ideas and identifying potential improvements.

I reviewed and modified the AI-generated suggestions to match the project requirements, existing architecture, and coding conventions. I also integrated, tested, and verified the final implementation.

## Notes

- Make sure all required environment variables are configured before starting the application.
- Prisma Client must be generated before running the backend.
- Ensure the database and migration files are available.
- Do not commit sensitive credentials or production secrets.
- The backend and frontend must both be running for the application to work correctly.
