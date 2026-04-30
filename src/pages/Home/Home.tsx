import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, HeartHandshake, Coffee, Lightbulb, Users, Camera, Hash, Tv, Gamepad2 } from 'lucide-react';
import styles from './Home.module.css';
import posts from '../../data/posts.json';
import social from '../../data/social.json';

const Home: React.FC = () => {
  const communityPreview = posts.slice(0, 3);

  return (
    <div className={styles.home}>
      {/* Hero Section - Left Aligned */}
      <section className={styles.hero}>
        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>Cortisoul</span>
            <h1 className={styles.heroTitle}>
              COMMUNITY.<br />
              <span>DESC.</span>
            </h1>
            <p className={styles.heroSub}>
              Desc.
            </p>
            <div className={styles.heroActions}>
              <Link to="/community" className={styles.primaryBtn}>
                Explore Community <ChevronRight size={18} />
              </Link>
              <a href="#about" className={styles.secondaryBtn}>
                Who We Are
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
        <img src="/assets/images/hero_bg.jpg" alt="Hero Background" className={styles.heroBg} />
      </section>

      {/* Feature Blocks - Horizontal Emphasis */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>OUR CORE VALUES</h2>
            <div className={styles.titleLine}></div>
          </div>

          <div className={styles.featureGrid}>
            <div className={styles.featureBlock}>
              <HeartHandshake className={styles.featureIcon} />
              <h3>Bounding</h3>
              <p>Desc.</p>
            </div>
            <div className={styles.featureBlock}>
              <Coffee className={styles.featureIcon} />
              <h3>Healthy Space</h3>
              <p>Desc.</p>
            </div>
            <div className={styles.featureBlock}>
              <Lightbulb className={styles.featureIcon} />
              <h3>Shared Vision</h3>
              <p>Desc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Preview - Feed Style */}
      <section className={styles.communityPreview}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>LATEST FROM THE COMMUNITY</h2>
            <Link to="/community" className={styles.viewAll}>
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className={styles.previewGrid}>
            {communityPreview.map(post => (
              <div key={post.id} className={styles.previewCard}>
                <div className={styles.cardImage}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.cardTag}>{post.tag}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>
                      {new Date(post.timestamp).toLocaleDateString()}
                    </span>
                    <Link to={`/community/${post.id}`} className={styles.cardLink}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Follow Us Section */}
      <section className={styles.followUs}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>CONNECT WITH US</h2>
            <p className={styles.sectionSubtitle}>Join the community across our digital outposts.</p>
          </div>

          <div className={styles.socialGrid}>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <Camera size={40} className={styles.socialIcon} />
              <span>Instagram</span>
            </a>
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <Hash size={40} className={styles.socialIcon} />
              <span>X (Twitter)</span>
            </a>
            <a href={social.discord} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <Gamepad2 size={40} className={styles.socialIcon} />
              <span>Discord</span>
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <Tv size={40} className={styles.socialIcon} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={`${styles.aboutContainer} container`}>
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <Users size={80} />
            </div>
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>WHO WE ARE</h2>
            <p>
              Desc 1st pharagraph.
            </p>
            <p>
              Desc 2nd pharagraph.
            </p>
            {/* <button className={styles.outlineBtn}>Join the Initiative</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
