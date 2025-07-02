<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="container">
        <div class="legal-page">
          <h1 class="page-title">Privacy Policy</h1>
          
          <div class="content">
            <div class="last-updated">
              <p><strong>Last Updated:</strong> December 2024</p>
            </div>

            <section class="section">
              <h2>1. Introduction</h2>
              <p>Welcome to Merge Rot! We take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information.</p>
              <p>By using our website and services, you agree to the collection and use of information as described in this Privacy Policy.</p>
            </section>

            <section class="section">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Automatically Collected Information</h3>
              <ul>
                <li>Device information (device type, operating system, browser type)</li>
                <li>Usage data (game time, click data, game progress)</li>
                <li>Technical information (IP address, cookie data, local storage)</li>
              </ul>
              
              <h3>2.2 Information You Provide</h3>
              <ul>
                <li>Contact form information (name, email, messages)</li>
                <li>User feedback and comments</li>
                <li>Social media interaction information</li>
              </ul>
            </section>

            <section class="section">
              <h2>3. How We Use Your Information</h2>
              <ul>
                <li><strong>Game Experience Improvement:</strong> Analyze game data to optimize game balance and user experience</li>
                <li><strong>Technical Support:</strong> Resolve technical issues and provide customer service</li>
                <li><strong>Content Personalization:</strong> Recommend relevant games and content based on your preferences</li>
                <li><strong>Website Analytics:</strong> Understand website usage to improve our services</li>
                <li><strong>Security Protection:</strong> Detect and prevent fraud, abuse, and security threats</li>
              </ul>
            </section>

            <section class="section">
              <h2>4. Information Sharing</h2>
              <p>We do not sell, trade, or transfer your personal information to third parties, except:</p>
              <ul>
                <li>With your explicit consent</li>
                <li>As required by law or court order</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who agree to protect your information</li>
              </ul>
            </section>

            <section class="section">
              <h2>5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
              <ul>
                <li>HTTPS encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Restricted employee access to personal data</li>
                <li>Secure data storage and backup</li>
              </ul>
            </section>

            <section class="section">
              <h2>6. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Save your game progress and preference settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p>You can manage cookie preferences through your browser settings.</p>
            </section>

            <section class="section">
              <h2>7. Children's Privacy</h2>
              <p>Our services are intended for users 13 years and older. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and discover your child has provided us with personal information, please contact us.</p>
            </section>

            <section class="section">
              <h2>8. Your Rights</h2>
              <p>Under applicable data protection laws, you have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request to view information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information in certain circumstances</li>
                <li><strong>Restriction:</strong> Restrict our processing of your personal information</li>
                <li><strong>Data Portability:</strong> Obtain your data in a structured format</li>
              </ul>
            </section>

            <section class="section">
              <h2>9. International Data Transfers</h2>
              <p>Your information may be transferred to servers outside your country/region. We ensure all data transfers comply with applicable data protection laws and implement appropriate safeguards.</p>
            </section>

            <section class="section">
              <h2>10. Privacy Policy Updates</h2>
              <p>We may update this Privacy Policy from time to time. For significant changes, we will notify you through our website. We recommend regularly reviewing this page for the latest information.</p>
            </section>

            <section class="section">
              <h2>11. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> delldremo9898@gmail.com</li>
                <li><strong>Contact Page:</strong> <RouterLink to="/contact-us">Contact Us</RouterLink></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.legal-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  color: #333;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.last-updated {
  background: #f5f5f5;
  border-left: 4px solid #666;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0 8px 8px 0;
}

.content {
  line-height: 1.8;
  color: #333;
  background: white;
}

.section {
  margin-bottom: 2.5rem;
}

.section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.5rem;
}

.section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1.5rem 0 0.8rem 0;
  color: #555;
}

.section p {
  margin-bottom: 1rem;
  color: #333;
}

.section ul, .section ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

.section li {
  margin-bottom: 0.5rem;
  color: #333;
}

.section li strong {
  color: #333;
}

.section a {
  color: #0066cc;
  text-decoration: underline;
}

.section a:hover {
  color: #0052a3;
}

@media (max-width: 768px) {
  .legal-page {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .section h2 {
    font-size: 1.5rem;
  }
  
  .section h3 {
    font-size: 1.2rem;
  }
  
  .section ul, .section ol {
    padding-left: 1.5rem;
  }
}
</style> 