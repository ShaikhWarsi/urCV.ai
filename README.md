# 🚀 urCV.ai – Intelligent Resume Builder

![urCV.ai Hero](docs/images/screenshot1.png)

<div align="center">

**Build ATS-friendly resumes in minutes using AI.**
<br />
Powered by **Groq (Llama 3)** ⚡ + **Google Gemini 2.5** 🧠

</div>

---

## ✨ Overview

**urCV.ai** is a state-of-the-art, AI-powered resume builder designed to help job seekers create **professional, ATS-optimized resumes** effortlessly.

It leverages a **dual-engine AI architecture**:
- ⚡ **Groq (Llama 3)** → Ultra-fast resume analysis & scoring
- 🧠 **Google Gemini 2.5** → Intelligent rewriting & career guidance

Think of urCV.ai as a **virtual career consultant**, not just a resume builder.

## 🚀 Key Features

### 🤖 AI-Powered Resume Intelligence
- Instant resume scoring & keyword analysis
- Actionable improvement suggestions
- Smart bullet-point rewriting

### 🎨 Professional Resume Templates
- 🧩 Modern
- 🧾 Professional
- 🎭 Creative
- 👔 Executive

### 💬 Intelligent Career Assistant
- Context-aware AI chatbot
- Resume optimization tips
- Career & interview guidance

### 📄 Live Resume Preview
- Split-screen editing
- Real-time updates as you type

### 📱 Fully Responsive Design
- Optimized for desktop, tablet & mobile

### ⬇️ Multiple Export Formats
- 📄 High-quality PDF
- 📝 Editable DOCX (Word)
- ✅ ATS-friendly output

---

## 📸 Screenshots

| Application Hero | Intelligent Builder |
|:---:|:---:|
| ![Hero](docs/images/screenshot1.png) | ![Builder](docs/images/screenshot2.png) |

| Template Selection | Executive Design |
|:---:|:---:|
| ![Selection](docs/images/screenshot5.png) | ![Executive](docs/images/screenshot4.png) |

---

## 🛠️ Tech Stack

### 🎨 Frontend
- ⚛️ **React + Vite**
- 🟦 **TypeScript**
- 💨 **Tailwind CSS**
- 🧱 **Shadcn/UI**
- 🎯 **Lucide Icons**

### 🧠 AI & Services
- ⚡ **Groq SDK** (Llama 3)
- 🤖 **Google Generative AI SDK** (Gemini 2.5)
- 📂 **mammoth** – Resume file parsing
- 📄 **PDF / DOCX Export Services**

---

## 🏁 Getting Started

### 🔧 Prerequisites
- Node.js **v18+**
- npm or yarn

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/urCV.ai.git](https://github.com/yourusername/urCV.ai.git)
   cd urCV.ai
Install dependencies

Bash

npm install
Configure environment variables Create a .env file in the root directory:

Code snippet

VITE_GEMINI_API_KEY=your_gemini_api_key_here
# Optional (production)
# VITE_GROQ_API_KEY=your_groq_api_key_here
Run the development server

Bash

npm run dev
Open the App Visit http://localhost:8080 in your browser.

📂 Project Structure
Plaintext

urCV.ai/
├── docs/
│   └── images/                 # Screenshots
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── resume/             # Resume builder logic
│   │   │   ├── forms/          # Education, Experience, Skills
│   │   │   ├── templates/      # Resume templates
│   │   │   ├── ChatBot.tsx     # Gemini AI assistant
│   │   │   ├── ResumeAnalysis.tsx
│   │   │   ├── ResumeGenerator.tsx
│   │   │   ├── ResumePreview.tsx
│   │   │   └── aiprompt.ts
│   │   └── ui/                 # Shadcn UI components
│   ├── hooks/                  # Custom hooks
│   ├── lib/                    # Utilities
│   ├── pages/                  # App routes
│   ├── services/               # AI & document services
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
🤝 Contributing
Contributions are highly welcome and appreciated! Whether it's fixing bugs, improving UI, optimizing AI prompts, or enhancing documentation — every contribution matters 🚀

Fork the repository

Create a new feature branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m "Add YourFeature")

Push to GitHub (git push origin feature/YourFeature)

Open a Pull Request 🚀

📄 License
This project is developed under the AcWoc 2026 Initiative. Copyright © 2026 N-PCs. All rights reserved.

<div align="center"> <p>Maintained by <a href="mailto:neelpandeyofficial@gmail.com">Neel Pandey</a></p> </div>