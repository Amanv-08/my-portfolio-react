
# My Portfolio 🚀

**Version:** 1.0.0

A personal portfolio website built with React and Vite to showcase my skills, projects, and experience.

## ✨ Features

- Responsive portfolio design
- Home, About, Projects, and Contact pages
- Smooth animations using Framer Motion
- Interactive custom cursor
- Modern icons using React Icons and Lucide React
- Contact form integration with EmailJS
- Resume PDF

## 🛠️ Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Lucide React
- EmailJS

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   ├── images/
│   ├── mylogo.png
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cursor.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Amanv-08/my-portfolio-react
```

Navigate to the project directory:

```bash
cd my-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 📧 EmailJS Configuration

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access these variables in React using `import.meta.env`.

Never upload your `.env` file to GitHub.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code with ESLint |

## 🚀 Deployment

This project can be deployed using:

- Vercel
- Netlify
- GitHub Pages

Build the project before deployment:

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

## 👨‍💻 Author

**Your Name**

- GitHub: [Amanv-08](https://github.com/Amanv-08)
- LinkedIn: [Amanv08](https://www.linkedin.com/in/amanv08/)
- Portfolio: [Live Website](https://your-portfolio-url.com)

## 📄 License

Created for personal portfolio and learning purposes.
