# urCV.ai

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC)](https://tailwindcss.com/)

> AI-Powered Resume Builder with Intelligent Analysis, Extraction, and Export

**urCV.ai** is a modern, feature-rich resume builder built with React and TypeScript that leverages artificial intelligence to help you create, analyze, and perfect your resume. With live previews, professional templates, AI-driven insights, and multiple export formats, it streamlines the resume creation process from start to finish.

## ✨ Features

### 🛠️ Interactive Resume Builder
- **Step-by-step Form** – Guided resume creation with intuitive form sections
- **Live Preview** – Real-time WYSIWYG preview that updates as you type
- **Professional Templates** – Multiple ATS-friendly templates to choose from
- **Drag-and-Drop** – Reorder sections and content with intuitive drag interfaces

### 🤖 AI-Powered Features
- **Resume Analysis** – Get instant scoring and detailed feedback on your resume
- **Content Enhancement** – AI suggestions for improving wording and impact
- **Chat Assistant** – Interactive AI assistant for career guidance and resume tips
- **ATS Optimization** – Ensure your resume passes through Applicant Tracking Systems

### 📄 File Handling
- **Resume Extraction** – Upload and parse existing resumes (PDF, DOCX, TXT)
- **Smart Parsing** – Extract structured data from unstructured documents
- **Batch Import** – Import multiple resumes for comparison and consolidation

### 📤 Export & Sharing
- **Multiple Formats** – Export to PDF, Word (.docx), and PNG/JPEG images
- **Shareable Links** – Generate unique URLs to share your resume
- **Cloud Backup** – Optional cloud storage for your resumes
- **Print-Ready** – Optimized for professional printing

### 🎨 Customization
- **Theme Customization** – Custom color schemes and typography
- **Layout Control** – Adjust margins, spacing, and section ordering
- **Multi-language** – Support for multiple languages and locales
- **Accessibility** – Built with WCAG standards in mind

## 🖥️ Demo / Screenshots

| Home Dashboard | Resume Builder | AI Analysis | Export Options |
|----------------|----------------|-------------|----------------|
| ![Home Dashboard](docs/screenshots/home.png) | ![Resume Builder](docs/screenshots/builder.png) | ![AI Analysis](docs/screenshots/analysis.png) | ![Export Options](docs/screenshots/export.png) |

## 🛠️ Tech Stack

**Frontend Framework**
- **React 19** – Component-based UI library
- **TypeScript** – Type-safe JavaScript development
- **Vite** – Next-generation frontend tooling

**UI & Styling**
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – Re-usable component library
- **Framer Motion** – Smooth animations and transitions

**Document Processing**
- **docx** – Word document generation
- **jsPDF + html2canvas** – PDF and image generation
- **Mammoth.js** – DOCX parsing and conversion

**AI Integration**
- **Groq SDK** – High-performance AI inference
- **OpenAI-compatible API** – For GPT-based models

**Utilities**
- **Zod** – Schema validation
- **React Hook Form** – Form state management
- **React Router** – Client-side routing

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm
- Groq API key (for AI features)

### Installation

1. **Clone the repository**
git clone https://github.com/yourusername/urcv.ai.git
cd urcv.ai

## Project structure
- src/pages — page entry points (Home, Builder, Templates).
- src/components — UI and feature components (resume forms, preview, chatbot).
- src/services — document generation, file parsing, and AI/groq integrations.

## Important notes
- The repository includes client-side AI integration code. Review and secure any API keys before deployment.
- File parsing uses basic PDF/text extraction; consider stronger PDF parsers for production.

## Contributing
Fork, create a feature branch, and open a pull request.
Run linters and tests before submitting.

## License
MIT LICENSE
