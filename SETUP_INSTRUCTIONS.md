# Kerala AI Website - Setup Instructions

## 🎯 Quick Start

This guide will help you set up and run the complete Kerala AI website (frontend + backend).

## ✅ Prerequisites

Before starting, ensure you have:
- **Node.js** (v16 or higher) - Download from https://nodejs.org/
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)
- Two terminal windows or tabs

## 🚀 Setup Option 1: Automatic Setup (Windows)

### Step 1: Run the Setup Script
1. Navigate to the project folder: `c:\Users\LENOVO\OneDrive\Desktop\ai intern\kerala-ai-website`
2. Double-click `setup.bat`
3. Wait for the script to finish installing dependencies

### Step 2: Start the Application
After setup completes:

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```

---

## 🔧 Setup Option 2: Manual Setup

### Step 1: Install Frontend Dependencies

```bash
# Navigate to project root
cd "c:\Users\LENOVO\OneDrive\Desktop\ai intern\kerala-ai-website"

# Install frontend dependencies
npm install
```

### Step 2: Install Backend Dependencies

```bash
# Navigate to backend folder
cd backend

# Install backend dependencies
npm install

# Return to project root
cd ..
```

### Step 3: Start the Backend Server

Open a new terminal and run:

```bash
cd backend
npm start
```

You should see output like:
```
🚀 Kerala AI Backend running on http://localhost:5000
📊 API Endpoints:
   GET  http://localhost:5000/api/health
   GET  http://localhost:5000/api/team
   ...
```

### Step 4: Start the Frontend Development Server

In another terminal, run:

```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 5: Open in Browser

Go to `http://localhost:5173` in your web browser.

---

## 🔧 If PowerShell Gives Permission Error

If you see: *"npm.ps1 cannot be loaded because running scripts is disabled"*

Use **Command Prompt (cmd.exe)** instead:

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to the project folder:
   ```
   cd C:\Users\LENOVO\OneDrive\Desktop\ai intern\kerala-ai-website
   ```
4. Run commands as shown above

Or use **Git Bash** or **Windows Terminal** (these don't have the same restrictions).

---

## 📡 Testing the Connection

### Test Backend is Running

Open a browser and go to: `http://localhost:5000/api/health`

You should see:
```json
{
  "status": "Backend is running!",
  "timestamp": "2025-01-xx..."
}
```

### Test Frontend is Running

Open a browser and go to: `http://localhost:5173`

You should see the Kerala AI website with:
- Purple gradient background
- Hero section with "Kerala's AI Revolution"
- Navigation menu
- Statistics cards
- Vision, Initiatives, Team sections
- Contact form

### Test Contact Form

1. Fill out the contact form on the website
2. Click "Send Message"
3. You should see a success message
4. Check backend console for confirmation

---

## 📊 View Backend Data

Once both servers are running, you can view:

**All Team Members:**
```
http://localhost:5000/api/team
```

**All Contacts Submitted:**
```
http://localhost:5000/api/admin/contacts
```

**Platform Statistics:**
```
http://localhost:5000/api/stats
```

---

## 🛑 Stopping the Servers

- **Backend**: Press `Ctrl + C` in the backend terminal
- **Frontend**: Press `Ctrl + C` in the frontend terminal

---

## 🐛 Troubleshooting

### Issue: "npm command not found"
**Solution:** Node.js is not installed or not in PATH
- Download and install from https://nodejs.org/
- Restart your terminal after installation
- Run `node -v` to verify

### Issue: Port 5000 already in use
**Solution:** Another app is using port 5000
- Close other applications using that port
- Or edit `.env` in backend folder and change `PORT=5001`

### Issue: Port 5173 already in use
**Solution:** Another Vite app is running
- Use a different port by running: `npm run dev -- --port 5174`

### Issue: "Cannot GET /api/contact"
**Solution:** Backend is not running
- Make sure you started the backend with `npm start` in the backend folder
- Check that it's running on http://localhost:5000

### Issue: Contact form not submitting
**Solution:** Frontend can't reach backend
- Check both servers are running
- Check browser console (F12) for error messages
- Verify API_URL in `src/App.jsx` is `http://localhost:5000/api`

### Issue: CORS Error
**Solution:** Backend CORS is not allowing frontend
- Backend has CORS enabled, but check if it's running
- Try accessing backend directly: http://localhost:5000/api/health

---

## 📁 Project Files Overview

### Frontend Files
- `src/App.jsx` - Main React component (contains entire UI)
- `src/main.jsx` - React entry point
- `src/index.css` - Global Tailwind directives
- `src/App.css` - Component styles
- `vite.config.js` - Vite configuration (React + Tailwind plugins)
- `tailwind.config.js` - Tailwind CSS configuration
- `index.html` - HTML template
- `package.json` - Frontend dependencies

### Backend Files
- `backend/server.js` - Express server with all API endpoints
- `backend/package.json` - Backend dependencies
- `backend/.env` - Environment variables (PORT, etc.)

---

## 📝 Making Changes

### Edit Frontend
- Edit files in `src/` folder
- Changes will auto-refresh in browser (hot reload)

### Edit Backend
- Edit `backend/server.js`
- Must restart backend server after changes (`Ctrl + C`, then `npm start`)

### Add New Sections
- Edit `src/App.jsx` to add new sections
- Add styles using Tailwind classes (no need for CSS files)

### Change Colors/Theme
- Edit `tailwind.config.js` for global theme changes
- Edit Tailwind classes in `src/App.jsx` for specific components

---

## 🚀 Production Build

### Build Frontend
```bash
npm run build
```
Creates optimized files in `dist/` folder

### Deploy
- **Frontend**: Deploy `dist/` folder to Vercel, Netlify, GitHub Pages, etc.
- **Backend**: Deploy to Heroku, Railway, Render, or any Node.js hosting

---

## 📞 Support

For issues or questions:
- Check this guide
- Check README.md
- Check backend console for errors (`Ctrl + Shift + K` in VS Code)
- Check browser console (F12)

---

## ✨ What's Included

✅ Complete responsive frontend with React + Tailwind
✅ Full-featured backend API with Express.js
✅ Contact form with validation and storage
✅ Team management endpoints
✅ Statistics and analytics
✅ Dark theme with animations
✅ Mobile responsive design
✅ Hot reload for development
✅ Production-ready structure

---

**Ready to start? Follow the Quick Start section above!**

Built with ❤️ for Kerala's AI Initiative
