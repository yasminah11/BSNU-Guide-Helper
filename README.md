# 🎓 Grad Guide Helper

**Grad Guide Helper** is a sophisticated, interactive academic planning tool designed for students at the **Faculty of Computing & Artificial Intelligence (FCAI)**. It empowers students to navigate complex course dependencies, visualize prerequisites, and strategically plan their academic journey in specialized tracks like **AI & Data Science** and **Cyber Security**.

![Project Preview](public/content.png) *(Note: Placeholder for your actual project screenshot)*

---

## 🚀 Key Features

-   **🔍 Intelligent Course Search:** Real-time, fuzzy search to instantly locate any course within the faculty's curriculum.
-   **🔗 Dependency Visualizer:** Visualize both prerequisites (what you need before) and dependents (what this course unlocks) for every subject.
-   **🛤️ Program Specialization:** Filter courses by "All Programs", "AI & Data Science", or "Cyber Security" to focus on your specific track.
-   **📊 Detailed Course Analytics:** View credit hours, course categories (University, Core, Elective, Specialization), and course types (Mandatory, Lab, Capstone).
-   **🌓 Seamless Dark Mode:** A modern, accessible UI that respects your system preferences or manual toggle.
-   **✨ Fluid Animations:** Powered by Framer Motion for a premium, interactive user experience.

---

## 🛠️ Tech Stack

-   **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
-   **Testing:** [Vitest](https://vitest.dev/)

---

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (shadcn/ui & custom)
│   ├── ui/           # Base shadcn components
│   ├── CourseDetails # Detailed view for a selected course
│   └── CourseSearch  # Search bar and filtering logic
├── data/             # Static course data and utility functions
│   └── courses.ts    # Centralized curriculum database
├── hooks/            # Custom React hooks (use-mobile, use-toast)
├── lib/              # Utility functions (cn helper)
├── pages/            # Top-level page components
│   └── Index.tsx     # Main application landing page
└── test/             # Vitest configuration and test suites
```

---

## 🚦 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/grad-guide-helper.git
    cd grad-guide-helper
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:5173`

---

## 🧪 Testing & Quality

To ensure the accuracy of the course dependency logic, run the test suite:

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint
```

---

## 📦 Deployment

The application can be easily deployed to [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com).

```bash
# Build for production
npm run build
```

The output will be generated in the `dist/` directory, ready to be served by any static hosting provider.

---

## ✍️ Author

**Designed & Developed by Yasmin**
*Faculty of Computing & AI, Beni Suef National University*

© 2026 All Rights Reserved
