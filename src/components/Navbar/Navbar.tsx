import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <Link to="/" className={styles.logo}>
          CORTI<span>SOUL</span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <div className={styles.userSection}>
              {user.role === 'Admin' && (
                <Link to="/admin" className={styles.adminIcon} title="Admin Dashboard">
                  <LayoutDashboard size={20} />
                </Link>
              )}
              <div className={styles.userProfile}>
                <img src={user.avatar} alt={user.name} className={styles.avatar} />
                <div className={styles.userDropdown}>
                  <p className={styles.userName}>{user.name}</p>
                  <p className={styles.userRole}>{user.role}</p>
                  <button onClick={logout} className={styles.logoutBtn}>
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className={styles.loginBtn}>
              <User size={18} /> Sign In
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <>
              {user.role === 'Admin' && (
                <Link to="/admin" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Link>
              )}
              <button onClick={logout} className={styles.mobileLogout}>
                Logout ({user.name})
              </button>
            </>
          ) : (
            <Link to="/login" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
