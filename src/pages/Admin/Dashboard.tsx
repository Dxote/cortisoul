import React, { useState } from 'react';
import {
  LayoutDashboard,
  Palette,
  Users as UsersIcon,
  Rss,
  Settings,
  ArrowUpRight,
  TrendingUp,
  Activity,
  Plus
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { colors, updateTheme, resetTheme } = useTheme();

  const handleColorChange = (key: keyof typeof colors, value: string) => {
    updateTheme({ [key]: value });
  };

  const sidebarItems = [
    { id: 'overview', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'theme', name: 'Theme Manager', icon: <Palette size={20} /> },
    // { id: 'community', name: 'Community Manager', icon: <UsersIcon size={20} /> },
    // { id: 'updates', name: 'Updates Manager', icon: <Rss size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.brand}>
            <span>CS</span> ADMIN
          </div>
        </div>
        <nav className={styles.sidebarNav}>
          {sidebarItems.map(item => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeTab === item.id ? styles.active : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className={styles.content}>
        <header className={styles.contentHeader}>
          <h1>{sidebarItems.find(i => i.id === activeTab)?.name}</h1>
          {/* <button className={styles.createBtn}><Plus size={18} /> New Entry</button> */}
        </header>

        {activeTab === 'overview' && (
          <div className={styles.overview}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statInfo}>
                  <span>Total Members</span>
                  <h3>12,482</h3>
                  <p className={styles.trend}><TrendingUp size={14} /> +12%</p>
                </div>
                <div className={styles.statIcon}><UsersIcon size={24} /></div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statInfo}>
                  <span>Active Signals</span>
                  <h3>842</h3>
                  <p className={styles.trend}><Activity size={14} /> Stable</p>
                </div>
                <div className={styles.statIcon}><Activity size={24} /></div>
              </div>
              {/* <div className={styles.statCard}>
                <div className={styles.statInfo}>
                  <span>System Uptime</span>
                  <h3>99.9%</h3>
                  <p className={styles.trend}>High Rate</p>
                </div>
                <div className={styles.statIcon}><Zap size={24} /></div>
              </div> */}
            </div>

            {/* <div className={styles.activityFeed}>
              <h3>System Activity</h3>
              <div className={styles.activityList}>
                {[1, 2, 3].map(i => (
                  <div key={i} className={styles.activityItem}>
                    <div className={styles.dot}></div>
                    <div className={styles.activityText}>
                      <p>New firmware update deployed to node <span>#482</span></p>
                      <span>2 hours ago</span>
                    </div>
                    <ArrowUpRight size={16} className={styles.activityArrow} />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        )}

        {activeTab === 'theme' && (
          <div className={styles.themeConfigurator}>
            <div className={styles.configHeader}>
              <h3>Global Identity Config</h3>
              <button onClick={resetTheme} className={styles.resetBtn}>Reset Defaults</button>
            </div>

            <div className={styles.configGrid}>
              <div className={styles.configItem}>
                <label>Background</label>
                <div className={styles.colorInput}>
                  <input
                    type="color"
                    value={colors.bg}
                    onChange={(e) => handleColorChange('bg', e.target.value)}
                  />
                  <span>{colors.bg}</span>
                </div>
              </div>
              <div className={styles.configItem}>
                <label>Surface</label>
                <div className={styles.colorInput}>
                  <input
                    type="color"
                    value={colors.surface}
                    onChange={(e) => handleColorChange('surface', e.target.value)}
                  />
                  <span>{colors.surface}</span>
                </div>
              </div>
              <div className={styles.configItem}>
                <label>Primary Text</label>
                <div className={styles.colorInput}>
                  <input
                    type="color"
                    value={colors.text}
                    onChange={(e) => handleColorChange('text', e.target.value)}
                  />
                  <span>{colors.text}</span>
                </div>
              </div>
              <div className={styles.configItem}>
                <label>Accent</label>
                <div className={styles.colorInput}>
                  <input
                    type="color"
                    value={colors.accent}
                    onChange={(e) => handleColorChange('accent', e.target.value)}
                  />
                  <span>{colors.accent}</span>
                </div>
              </div>
            </div>

            <div className={styles.previewArea}>
              <h4>Transition Preview</h4>
              <p>Change any color.</p>
              <div className={styles.previewCard}>
                <div className={styles.previewAccent}></div>
                <p>Digital Heartbeat // Active</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const Zap = ({ size, className }: { size: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default Dashboard;
