# Kerala AI Website - Complete Solution

A modern, full-stack web application showcasing Kerala's AI Initiative with a beautiful React frontend and a Node.js/Express backend API.

## 🎨 Features

### Frontend
- ✨ Modern, responsive design with Tailwind CSS
- 🎯 Hero section with call-to-action
- 📊 Statistics showcase
- 🚀 Key initiatives with tabbed interface
- 👥 Team member profiles
- 📝 Contact form with validation
- 🌙 Dark theme with gradient backgrounds
- 💫 Smooth animations and transitions

### Backend
- 🔌 RESTful API with Express.js
- 📨 Contact form submission & storage
- 👥 Team management endpoints
- 📋 Programs and initiatives data
- 📊 Statistics and analytics
- 🛡️ CORS enabled for frontend integration
- 📝 Contact logging to file

## 📁 Project Structure

```
kerala-ai-website/
├── src/                    # Frontend (React)
│   ├── App.jsx            # Main component with all sections
│   ├── App.css            # Component styles
│   ├── index.css          # Global styles (Tailwind directives)
│   ├── main.jsx           # React entry point
│   └── assets/            # Images and assets
├── backend/               # Backend (Node.js/Express)
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env               # Environment variables
├── public/                # Static assets
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Frontend dependencies
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

#### 1. Frontend Setup
```bash
# Navigate to project root
cd kerala-ai-website

# Install frontend dependencies
npm install

# Start the dev server (Vite)
npm run dev
```

The frontend will be available at `http://localhost:5173`

#### 2. Backend Setup
```bash
# Navigate to backend folder
cd backend

# Install backend dependencies
npm install

# Start the backend server
npm start

# Or for development with auto-reload:
npm run dev
```

The backend will be available at `http://localhost:5000`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and timestamp.

### Team Management
```
GET /api/team                    # Get all team members
GET /api/team/:id               # Get specific team member
POST /api/team                  # Add new team member
```

### Programs & Initiatives
```
GET /api/programs               # Get all programs
GET /api/initiatives            # Get all initiatives
GET /api/initiatives?category=vision  # Filter by category
```

### Contact Form
```
POST /api/contact               # Submit contact form
```
**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "interest": "startup",
  "message": "I want to join the initiative"
}
```

### Admin Features
```
GET /api/admin/contacts         # Get all submitted contacts
DELETE /api/admin/contacts/:id  # Delete a contact
GET /api/stats                  # Get platform statistics
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Backend
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **UUID** - Unique ID generation
- **Node.js** - Runtime environment

## 📝 Environment Variables

### Frontend
- Uses `http://localhost:5000` as the default API endpoint

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

## 🎯 How to Use

1. **Start both servers** (frontend and backend)
2. **Browse to frontend** at `http://localhost:5173`
3. **Fill out the contact form** to test API integration
4. **Check the backend** at `http://localhost:5000/api/stats` to see submitted data

## 📦 Build for Production

### Frontend
```bash
npm run build        # Creates optimized build in dist/
npm run preview      # Preview production build locally
```

### Backend
```bash
# Set NODE_ENV=production in .env
# Deploy to a hosting service (Heroku, Railway, Render, etc.)
```

## 🔧 Customization

### Change API Endpoint
Edit `src/App.jsx` line with `API_URL`:
```javascript
const API_URL = 'https://your-backend-url/api';
```

### Modify Team Members
Edit the initial team data in `backend/server.js` or use the API POST endpoint.

### Adjust Styling
- **Colors**: Edit Tailwind classes in `src/App.jsx` and `tailwind.config.js`
- **Fonts**: Update `tailwind.config.js` theme section
- **Responsive**: Modify breakpoints in Tailwind classes (sm:, md:, lg:)

## 🤝 Contributing

This project is part of the Kerala AI Initiative. Feel free to submit issues and pull requests.

## 📄 License

MIT License - Feel free to use this template for your projects.

## 🚀 Next Steps

- [ ] Deploy frontend to Vercel, Netlify, or similar
- [ ] Deploy backend to Heroku, Railway, or similar
- [ ] Connect to a database (MongoDB, PostgreSQL)
- [ ] Add authentication/authorization
- [ ] Implement email notifications for contact forms
- [ ] Add admin dashboard
- [ ] Set up CI/CD pipeline
- [ ] Add dark/light theme toggle
- [ ] Implement search and filtering

## 📧 Support

For support, issues, or questions:
- Email: contact@keralaai.com
- Phone: +91 484 2836 8000
- Location: Kochi, Kerala, India

---

Built with ❤️ for Kerala's AI Initiative
