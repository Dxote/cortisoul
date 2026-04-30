import React, { createContext, useContext, useState } from 'react';
import usersData from '../data/users.json';

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  role: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password?: string) => boolean | void;
  logout: () => void;
  users: User[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('cortisoul_auth');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (username: string, password?: string) => {
    // Only accept login if password is 'admin123' to simulate real login
    if (password !== 'admin123') {
      alert('Invalid credentials');
      return false;
    }
    
    const foundUser = usersData.find(u => u.username === username);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('cortisoul_auth', JSON.stringify(foundUser));
      return true;
    }
    alert('User not found');
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cortisoul_auth');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, users: usersData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
