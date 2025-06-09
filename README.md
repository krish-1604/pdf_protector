# 🔐 PDF Protector

A simple web tool to **password-protect PDF files** using an Express.js backend and Python (PyPDF2) for encryption.

---

## 📁 Project Structure
```
pdf_protector/
├── backend/
│ ├── server.js # Express backend
│ ├── encrypt.py # Python script to encrypt PDFs
│ ├── uploads/ # Temporary uploaded files (gitignored)
│ ├── package.json # Node.js dependencies and scripts
├── test.html # Basic frontend upload form
└── README.md # You're reading this 😉
```

---

## ⚙️ Setup Instructions

### 1. Clone the project and go to the backend folder

```bash
cd backend
npm install
pip install PyPDF2
npm run dev
```

## Open the frontend
Open the test.html file in your browser manually (e.g., double-click or drag into browser window).
