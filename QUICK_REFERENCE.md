# 🚀 Kerala AI Website - Quick Reference

## ⚡ Fastest Way to Start

```bash
# Terminal 1: Backend
cd backend
npm install
npm start

# Terminal 2: Frontend  
npm install
npm run dev

# Browser: http://localhost:5173
```

## 📍 Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Entire UI (sections, form, team) |
| `backend/server.js` | All API endpoints |
| `vite.config.js` | Vite + React + Tailwind setup |
| `tailwind.config.js` | Tailwind configuration |

## 🌐 URLs

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health
- **All Contacts:** http://localhost:5000/api/admin/contacts
- **Statistics:** http://localhost:5000/api/stats

## 📋 Available Commands

```bash
# Frontend
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build

# Backend
npm start            # Start server (http://localhost:5000)
npm run dev          # Start with auto-reload (needs nodemon)
```

## 🔌 API Endpoints Quick List

```
GET    /api/health
GET    /api/team
POST   /api/team
GET    /api/programs
GET    /api/initiatives
POST   /api/contact
GET    /api/admin/contacts
DELETE /api/admin/contacts/:id
GET    /api/stats
```

## 📝 Contact Form Test

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "interest": "startup",
  "message": "This is a test message"
}
```

## 🎨 Customize

| What | Where |
|------|-------|
| Colors | `src/App.jsx` (change purple/blue classes) |
| Team | `backend/server.js` (teamMembers array) |
| Contact Info | `src/App.jsx` (Contact Info section) |
| Text/Copy | `src/App.jsx` (change text directly) |

## 🐛 Common Issues

| Problem | Fix |
|---------|-----|
| npm not found | Install Node.js |
| Port in use | Change PORT in .env or use different port |
| CORS error | Make sure backend is running |
| Form not working | Check backend console for errors |
| Blank page | Check browser console (F12) |

## 📚 Full Documentation

- **Setup:** See `SETUP_INSTRUCTIONS.md`
- **Complete Guide:** See `COMPLETE_SUMMARY.md`
- **Project Info:** See `README.md`

## ✨ Features at a Glance

✅ Responsive design (mobile/tablet/desktop)
✅ Dark theme with animations
✅ Contact form with validation
✅ Team profiles
✅ API integration
✅ Statistics display
✅ Multiple sections (Vision, Initiatives, Contact)
✅ Production-ready code

## 🎯 Next Steps

1. Run setup
2. Test both servers
3. Fill contact form
4. Check backend data at `/api/admin/contacts`
5. Deploy to production when ready

---

**Everything is ready to go! Happy coding! 🎉**
