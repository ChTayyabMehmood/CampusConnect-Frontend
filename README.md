# CampusConnect Frontend

> The all-in-one platform for college students to find hackathons, internships, and collaborative projects.

## About

CampusConnect helps students discover opportunities, connect with talented peers, showcase their work, and collaborate on projects — all in one platform. Trusted by students from NUST, LUMS, FAST, IBA, GIKI, Comsats, and 200+ universities.

## Features

- **Opportunity Discovery** — Find hackathons, internships, competitions, scholarships, and workshops from universities across Pakistan.
- **Smart Team Matching** — Find teammates based on skills, interests, and project experience.
- **Student Portfolio** — Showcase your skills, projects, GitHub, LinkedIn, certifications, and achievements.
- **College Communities** — Join university clubs and student communities to collaborate and learn.
- **Verified Student Network** — Connect with verified university students for trusted collaboration.
- **Smart Notifications** — Personalized alerts for opportunities, deadlines, and invitations.
- **Saved Opportunities** — Bookmark hackathons, internships, and competitions.
- **Team Chat** — Real-time messaging, resource sharing, and discussions with teammates.
- **Achievements** — Highlight hackathon wins, certifications, awards, and placements.

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — Build tool
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) — Icon library

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
git clone https://github.com/ChTayyabMehmood/CampusConnect-Frontend.git
cd CampusConnect-Frontend
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── common/        # Shared components (Button, StatCard, etc.)
│   ├── Navbar.jsx
│   ├── HeroComponent.jsx
│   ├── FeatureComponent.jsx
│   └── HowDoesItWork.jsx
├── pages/             # Page components
│   └── Landing.jsx
├── assets/            # Static assets (images, icons)
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "feat: add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
