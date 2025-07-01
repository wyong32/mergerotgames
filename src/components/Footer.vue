<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <div class="logo">
            <span class="logo-icon">M</span>
            <span>Merge Rot</span>
          </div>
          <p>
            Revolutionary merge game experience that challenges your strategic thinking and creates
            your own legend in infinite possibilities.
          </p>
          <div class="social-links">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              v-html="social.icon"
            ></a>
          </div>
        </div>

        <div class="foot-right">
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Game Rules</a></li>
              <li><a href="#">Leaderboard</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Game Rules</a></li>
              <li><a href="#">Leaderboard</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Game Rules</a></li>
              <li><a href="#">Leaderboard</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2024 Merge Rot. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const socials = ref([
  {
    name: 'Facebook',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>`,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.561-.666 2.477 0 1.61.82 3.027 2.053 3.858-.764-.025-1.482-.232-2.11-.583v.062c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.2 4.34 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.096 7.14 2.096 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.476 2.323-2.41z"/></svg>`,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>`,
  },
  {
    name: 'Discord',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v19.056c0 1.368-1.104 2.472-2.46 2.472h-15.08c-1.356 0-2.46-1.104-2.46-2.472v-19.056c0-1.368 1.104-2.472 2.46-2.472h15.08zm-2.883 5.052h-2.126c-.244.432-.472.84-.684 1.224-2.4.024-4.788.024-7.188 0-.216-.384-.444-.792-.684-1.224h-2.124v13.92h2.124c.24-.432.468-.84.684-1.224 2.4.024 4.788.024 7.188 0 .216.384.444.792.684 1.224h2.126v-13.92zM8.4 13.98c-1.188 0-2.148-.96-2.148-2.148s.96-2.148 2.148-2.148 2.148.96 2.148 2.148-.96 2.148-2.148 2.148zm7.2 0c-1.188 0-2.148-.96-2.148-2.148s.96-2.148 2.148-2.148 2.148.96 2.148 2.148-.96 2.148-2.148 2.148z"/></svg>`,
  },
])
</script>

<style scoped>
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s ease;
}

.logo-icon {
  background: linear-gradient(45deg, var(--color-secondary), var(--color-primary));
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
}

.footer-container {
  padding: 4rem 0 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-about p {
  color: #9ca3af;
  margin: 1rem 0;
  max-width: 350px;
  line-height: 1.6;
}

.foot-right{
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #9ca3af;
  transition: color 0.3s, transform 0.3s;
}

.social-links a:hover {
  color: var(--color-primary);
  transform: scale(1.2);
}

.social-links :deep(svg) {
  width: 24px;
  height: 24px;
}

.footer-links h4,
.footer-contact h4 {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  font-weight: 600;
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 1rem;
}

.footer-links a {
  color: #9ca3af;
  transition: color 0.3s;
  position: relative;
}
.footer-links a:hover {
  text-decoration: underline;
}

.footer-contact li {
  color: #9ca3af;
}

.footer-copyright {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 1rem 0;
  }

  .footer-about p {
    max-width: 100%;
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  .social-links {
    display: none;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .foot-right{
    gap: 0.5rem;
  }

  .foot-right .footer-links:nth-child(1){
    display: none;
  }

  .footer-copyright {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style> 