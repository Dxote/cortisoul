import React from 'react';
import { Heart, Share2, MessageSquare, Search, Filter } from 'lucide-react';
import styles from './Community.module.css';
import posts from '../../data/posts.json';

const Community: React.FC = () => {
  // Sort posts: large first, then others
  const featuredPost = posts.find(p => p.size === 'large') || posts[0];
  const standardPosts = posts.filter(p => p.size === 'standard');
  const compactPosts = posts.filter(p => p.size === 'compact');

  return (
    <div className={styles.community}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div>
              <h1 className={styles.title}>COMMUNITY'S <span>FEED</span></h1>
              <p className={styles.subtitle}>Stories, shitposts, and serious discussions from the Cortisoul collective.</p>
            </div>
            <div className={styles.controls}>
              <div className={styles.searchBar}>
                <Search size={18} />
                <input type="text" placeholder="Search discussions..." />
              </div>
              <button className={styles.filterBtn}>
                <Filter size={18} /> Filter
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <div className={styles.feedLayout}>
          {/* Featured Post - Large Area */}
          <section className={styles.featuredSection}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className={styles.badge}>FEATURED</span>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.meta}>
                  <span className={styles.tag}>{featuredPost.tag}</span>
                  <span className={styles.dot}></span>
                  <span className={styles.date}>{new Date(featuredPost.timestamp).toLocaleDateString()}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.description}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.author}>
                    <div className={styles.avatarPlaceholder}></div>
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className={styles.interactions}>
                    <button title="Like"><Heart size={18} /> {featuredPost.likes}</button>
                    <button title="Comment"><MessageSquare size={18} /> 42</button>
                    <button title="Share"><Share2 size={18} /></button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Standard Posts - Grid */}
          <section className={styles.standardGrid}>
            {standardPosts.map(post => (
              <div key={post.id} className={styles.postCard}>
                <div className={styles.postImage}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.tag}>{post.tag}</span>
                </div>
                <div className={styles.postContent}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.date}>{new Date(post.timestamp).toLocaleDateString()}</span>
                    <div className={styles.interactions}>
                      <button><Heart size={16} /> {post.likes}</button>
                      <button><Share2 size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Compact Posts - Aside or Bottom List */}
          <section className={styles.compactList}>
            <h3 className={styles.listTitle}>LATEST SIGNALS</h3>
            {compactPosts.map(post => (
              <div key={post.id} className={styles.compactCard}>
                <div className={styles.compactThumb}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.compactContent}>
                  <h4>{post.title}</h4>
                  <div className={styles.compactMeta}>
                    <span>{post.tag}</span>
                    <span className={styles.dot}></span>
                    <span>{new Date(post.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Community;
