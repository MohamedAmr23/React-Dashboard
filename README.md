# ⚡ React Admin Dashboard

A modern, fully responsive admin dashboard built with **React**, **Vite**, and **Material UI** — featuring data tables, interactive charts, a calendar, form validation, and more.

🔗 **Live Demo:** [react-dashboard-delta-peach.vercel.app](https://react-dashboard-delta-peach.vercel.app)

---

## 📸 Features

- 👥 **Team** — Manage and view team members in a data grid
- 📋 **Contacts** — Browse and search contacts with MUI DataGrid
- 🧾 **Invoices** — View invoice records in a structured table
- 📝 **Form** — React Hook Form with full validation
- 📅 **Calendar** — Interactive calendar with event management (FullCalendar)
- 🪗 **Accordion** — Material UI collapsible FAQ/info sections
- 📊 **Bar Chart** — Visualize data with Nivo bar charts
- 🥧 **Pie Chart** — Breakdown views using Nivo pie charts
- 📈 **Line Chart** — Trend analysis with Nivo line charts
- 🌍 **Geography Chart** — World map data visualization with Nivo Geo

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Material UI v5](https://mui.com/) | Component library & theming |
| [MUI X Data Grid](https://mui.com/x/react-data-grid/) | Tables & data grids |
| [Nivo](https://nivo.rocks/) | Charts (Bar, Pie, Line, Geo) |
| [FullCalendar](https://fullcalendar.io/) | Calendar component |
| [React Hook Form](https://react-hook-form.com/) | Form handling & validation |
| [React Router v6](https://reactrouter.com/) | Client-side routing |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/MohamedAmr23/React-Dashboard.git

# 2. Navigate to the project directory
cd React-Dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 📁 Project Structure

```
React-Dashboard/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components (Team, Contacts, Charts, etc.)
│   ├── data/           # Mock data
│   └── main.jsx        # App entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

```bash
npm run build
```

Then upload the `dist/` folder to any static hosting provider (Vercel, Netlify, Firebase Hosting, etc.).

> Firebase config files (`.firebaserc`, `firebase.json`) are also included for Firebase Hosting deployment.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Mohamed Amr**
[GitHub @MohamedAmr23](https://github.com/MohamedAmr23)
