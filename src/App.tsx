import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Auth/Login';
import './index.css';

const ProtectedRoute = ({ children, adminOnly = false }: { children: React.ReactNode, adminOnly?: boolean }) => {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== 'Admin') return <Navigate to="/" />;
  
  return <>{children}</>;
};

const AppContent = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute adminOnly>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
};


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
