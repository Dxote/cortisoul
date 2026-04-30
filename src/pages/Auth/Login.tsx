import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <header className={styles.header}>
          <h1>ACCESS <span>GATEWAY</span></h1>
          <p>Provide credentials to establish connection.</p>
        </header>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. user"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="e.g. password"
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            AUTHENTICATE
          </button>
        </form>

        <footer className={styles.footer}>
          <p>Protocol v2.5.0 // Encrypted Session</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
