<img width="1904" height="889" alt="image" src="https://github.com/user-attachments/assets/e2490488-0ebf-4f29-a997-118f65ed1446" /># Manhwa Tracker

Manhwa Tracker is a web application for tracking your Manhwa (Korean comics) reading progress. It allows users to keep an organized list of manhwa titles, monitor their current and latest read chapters, and categorize them by status (ongoing, completed, hiatus). The platform is ideal for those who actively follow multiple series and wish to stay updated with their reading streak and statistics.

## Demo

Try the live demo: [https://manhwa-tracker-ry42.vercel.app/](https://manhwa-tracker-ry42.vercel.app/)

## Features

- **Add, update, and remove manhwa series** in your personal tracker.
- **Current reading**, **completed**, and **hiatus** status filters.
- **Track your reading streak** (e.g., 7-Day Reading Streak!).
- **Statistics dashboard** featuring total manhwa tracked, reading status counts, and more.
- Modern, responsive UI made with React + Vite.
- Backend using Node.js, Express, and MongoDB for persistent storage.

!-- Replace with actual image if available -->

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB database (local or remote)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kaiden-A/manhwa-tracker.git
    cd manhwa-tracker
    ```

2. **Install frontend dependencies:**
    ```bash
    cd manhwa
    npm install # or yarn
    ```

3. **Install backend dependencies:**
    ```bash
    cd ../backend
    npm install # or yarn
    ```

4. **Setup environment variables:**
    - In `/backend`, create a `.env` file and add:
      ```
      PORT=5000
      DB_URI=mongodb://localhost:27017/manhwa-db
      FRONTEND_URL=http://localhost:5173
      ```

5. **Run the backend server:**
    ```bash
    npm start
    ```

6. **Run the frontend app:**
    ```bash
    cd ../manhwa
    npm run dev
    ```
    Visit `http://localhost:5173/` in your browser.

## Project Structure

```
manhwa-tracker/
├── backend/        # Express API & MongoDB models
└── manhwa/         # React + Vite frontend
```

## Tech Stack

- **Frontend:** React, Vite, Context API, CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose

## API Endpoints

- `GET /api/manhwa` – Get all manhwa and stats
- `POST /api/manhwa` – Add a new manhwa
- `PUT /api/manhwa/:id` – Update a manhwa
- `DELETE /api/manhwa/:id` – Remove a manhwa

## How it works

- The frontend presents a dashboard where you can manage manhwa titles, filter by status, and track stats.
- Backend uses MongoDB to store manhwa entries. Each entry contains name, cover image, URL, current/latest chapter, and status.

## Credits

Made by [Kaiden-A](https://github.com/kaiden-A)

---

> **Demo again:**  
> [https://manhwa-tracker-ry42.vercel.app/](https://manhwa-tracker-ry42.vercel.app/)
