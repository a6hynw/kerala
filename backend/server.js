import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Data storage (in production, use a database)
let contacts = [];
let teamMembers = [
  {
    id: '1',
    name: 'Dr. Raj Kumar',
    role: 'Director',
    bio: 'Visionary leader with 20+ years in AI research and innovation',
    image: '🧑‍💼',
    socials: { github: '#', linkedin: '#', twitter: '#' }
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'AI Research Lead',
    bio: 'PhD in Machine Learning, pioneering AI solutions for social good',
    image: '👩‍💻',
    socials: { github: '#', linkedin: '#', twitter: '#' }
  },
  {
    id: '3',
    name: 'Arjun Nair',
    role: 'Ecosystem Manager',
    bio: 'Building connections between startups, enterprises, and institutions',
    image: '🧑‍💼',
    socials: { github: '#', linkedin: '#', twitter: '#' }
  }
];

let programs = [
  {
    id: '1',
    name: 'AI Research Excellence',
    description: 'World-class research centers collaborating with global institutions to advance AI technology',
    icon: 'brain'
  },
  {
    id: '2',
    name: 'Talent Development',
    description: 'Comprehensive training programs to create 100,000 AI-ready professionals by 2030',
    icon: 'users'
  },
  {
    id: '3',
    name: 'Startup Ecosystem',
    description: 'Incubation support, funding, and mentorship for AI-driven entrepreneurship',
    icon: 'rocket'
  }
];

let initiatives = [
  {
    id: '1',
    title: 'Healthcare AI',
    category: 'vision',
    description: 'AI solutions for disease diagnosis and treatment'
  },
  {
    id: '2',
    title: 'Smart Agriculture',
    category: 'vision',
    description: 'Precision farming using AI and IoT technologies'
  },
  {
    id: '3',
    title: 'Digital Education',
    category: 'vision',
    description: 'AI-powered personalized learning systems'
  },
  {
    id: '4',
    title: 'Climate Tech',
    category: 'vision',
    description: 'Environmental monitoring and prediction using AI'
  }
];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running!', timestamp: new Date().toISOString() });
});

// Get all team members
app.get('/api/team', (req, res) => {
  res.json(teamMembers);
});

// Get single team member
app.get('/api/team/:id', (req, res) => {
  const member = teamMembers.find(m => m.id === req.params.id);
  if (member) {
    res.json(member);
  } else {
    res.status(404).json({ error: 'Team member not found' });
  }
});

// Create/Add team member
app.post('/api/team', (req, res) => {
  const { name, role, bio, image } = req.body;
  if (!name || !role) {
    return res.status(400).json({ error: 'Name and role are required' });
  }
  
  const newMember = {
    id: uuidv4(),
    name,
    role,
    bio: bio || '',
    image: image || '🧑‍💼',
    socials: { github: '#', linkedin: '#', twitter: '#' }
  };
  
  teamMembers.push(newMember);
  res.status(201).json(newMember);
});

// Get all programs
app.get('/api/programs', (req, res) => {
  res.json(programs);
});

// Get all initiatives
app.get('/api/initiatives', (req, res) => {
  const category = req.query.category;
  if (category) {
    const filtered = initiatives.filter(i => i.category === category);
    return res.json(filtered);
  }
  res.json(initiatives);
});

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, interest, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const contact = {
    id: uuidv4(),
    name,
    email,
    interest: interest || 'general',
    message,
    createdAt: new Date().toISOString()
  };

  contacts.push(contact);

  // Log to file (optional - in production use database)
  const logPath = path.join(__dirname, 'contacts.log');
  fs.appendFileSync(logPath, JSON.stringify(contact) + '\n');

  res.status(201).json({
    success: true,
    message: 'Contact form submitted successfully',
    contactId: contact.id
  });
});

// Get all contacts (admin only - add authentication in production)
app.get('/api/admin/contacts', (req, res) => {
  res.json({
    total: contacts.length,
    contacts: contacts
  });
});

// Delete contact
app.delete('/api/admin/contacts/:id', (req, res) => {
  const index = contacts.findIndex(c => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Contact not found' });
  }

  const deleted = contacts.splice(index, 1);
  res.json({ success: true, deleted: deleted[0] });
});

// Get statistics
app.get('/api/stats', (req, res) => {
  res.json({
    totalContacts: contacts.length,
    totalTeamMembers: teamMembers.length,
    totalPrograms: programs.length,
    totalInitiatives: initiatives.length,
    contactsByInterest: contacts.reduce((acc, c) => {
      acc[c.interest] = (acc[c.interest] || 0) + 1;
      return acc;
    }, {})
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    path: req.path
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Kerala AI Backend running on http://localhost:${PORT}`);
  console.log(`📊 API Endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log(`   GET  http://localhost:${PORT}/api/team`);
  console.log(`   GET  http://localhost:${PORT}/api/programs`);
  console.log(`   GET  http://localhost:${PORT}/api/initiatives`);
  console.log(`   POST http://localhost:${PORT}/api/contact`);
  console.log(`   GET  http://localhost:${PORT}/api/admin/contacts`);
  console.log(`   GET  http://localhost:${PORT}/api/stats`);
});

export default app;
