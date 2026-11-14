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
git clone https://github.com/ilhamifham/nolooptech-assignment.git
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

#### Prisma Setup

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply existing database migrations:

```bash
npx prisma migrate deploy
```

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
cp .env.example .env
```

#### Start the Frontend

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

## How I Used AI

I used ChatGPT as an AI development assistant during the development of this project.

AI assistance was used for:

- Understanding implementation approaches and project architecture.
- Troubleshooting errors and debugging.
- Improving code structure and development workflow.
- Reviewing implementation ideas and identifying potential improvements.

I reviewed and modified the AI-generated suggestions to match the project requirements, existing architecture, and coding conventions. I also integrated, tested, and verified the final implementation.
