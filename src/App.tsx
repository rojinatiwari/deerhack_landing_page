import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ClipboardSync from './pages/ClipboardSync';
import SlideControl from './pages/SlideControl';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';

const navItems = [
  { 
    name: 'Home', 
    path: '/share', 
    description: 'Welcome to LAN Controller'
  },
  { 
    name: 'Clipboard Sync', 
    path: '/share/clipboard', 
    description: 'Sync clipboard across devices'
  },
  { 
    name: 'Slide Control', 
    path: '/share/slide-control', 
    description: 'Present slides and presentations'
  },
];

function Sidebar() {
  const location = useLocation();
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div>
            <div className="text-xl font-bold">LAN Controller</div>
            <div className="text-xs text-gray-400">Device Management</div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => {
          const selected = location.pathname === item.path || (item.path === '/share' && location.pathname === '/share');
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative p-4 rounded-xl transition-all duration-200 ${
                selected
                  ? 'text-blue-500'
                  : 'hover:text-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className={`text-xs ${selected ? 'text-blue-100' : 'text-gray-400'}`}>{item.description}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-center text-xs text-gray-400">
          <div>LAN Controller v1.0</div>
          <div className="mt-1">Cross-device management</div>
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/share/*"
          element={
            <div className="flex h-screen bg-gray-50">
              <Sidebar />
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="" element={<Home />} />
                  <Route path="clipboard" element={<ClipboardSync />} />
                  <Route path="slide-control" element={<SlideControl />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
} 