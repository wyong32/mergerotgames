<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="container">
        <div class="legal-page">
          <h1 class="page-title">Terms of Use</h1>
          
          <div class="content">
            <div class="last-updated">
              <p><strong>Last Updated:</strong> July 2025</p>
            </div>

            <section class="section">
              <h2>1. Acceptance of Terms</h2>
              <p>Welcome to Merge Rot! By accessing and using our website and game services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.</p>
              <p>We reserve the right to modify these terms at any time. Modified terms will take effect immediately upon posting.</p>
            </section>

            <section class="section">
              <h2>2. Service Description</h2>
              <p>Merge Rot is a platform providing online merge-style games, including but not limited to:</p>
              <ul>
                <li>Merge Rot main game and its various themed variants</li>
                <li>Brainrot series games</li>
                <li>Italian Brainrot Games collection</li>
                <li>Merge Fellas and related character content</li>
                <li>Community Wiki and blog content</li>
              </ul>
            </section>

            <section class="section">
              <h2>3. User Accounts and Behavior</h2>
              <h3>3.1 Account Responsibility</h3>
              <ul>
                <li>You are responsible for maintaining the accuracy and security of your account information</li>
                <li>You must be 13 years or older to use our services</li>
                <li>One person may only register one account</li>
                <li>You may not share account information with others</li>
              </ul>
              
              <h3>3.2 Prohibited Behavior</h3>
              <p>When using our services, you may not:</p>
              <ul>
                <li>Post illegal, harmful, threatening, abusive, or defamatory content</li>
                <li>Use automated programs or bots to operate games</li>
                <li>Attempt to hack, reverse engineer, or modify our games</li>
                <li>Interfere with or disrupt servers and network connections</li>
                <li>Impersonate others or make false representations about identity</li>
                <li>Collect personal information of other users</li>
              </ul>
            </section>

            <section class="section">
              <h2>4. Intellectual Property</h2>
              <h3>4.1 Our Rights</h3>
              <p>Merge Rot website, games, content, trademarks, logos, and service marks are the property of us or our licensors. You may not copy, modify, distribute, or commercially use this content without explicit written permission.</p>
              
              <h3>4.2 User Generated Content</h3>
              <p>You retain ownership of content you create, but by uploading content, you grant us a non-exclusive license to use, modify, display, and distribute that content.</p>
            </section>

            <section class="section">
              <h2>5. Game Rules and Fair Play</h2>
              <ul>
                <li><strong>Fair Gaming:</strong> All players should follow game rules and not use cheats or hacking programs</li>
                <li><strong>Respect Others:</strong> Maintain politeness and respect in community interactions</li>
                <li><strong>Technical Limitations:</strong> Do not attempt to bypass game technical limitations or security measures</li>
                <li><strong>Leaderboard Integrity:</strong> Scores obtained through cheating will be deleted</li>
              </ul>
            </section>

            <section class="section">
              <h2>6. Privacy and Data Use</h2>
              <p>Our data collection and use practices are detailed in our <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>. By using our services, you agree to our processing of your information according to the Privacy Policy.</p>
            </section>

            <section class="section">
              <h2>7. Third-Party Content and Links</h2>
              <p>Our services may contain links to third-party websites or embedded third-party content. We are not responsible for the content, privacy policies, or practices of these third parties. You access third-party websites at your own risk.</p>
            </section>

            <section class="section">
              <h2>8. Service Availability</h2>
              <ul>
                <li>We strive to maintain service availability but do not guarantee uninterrupted service</li>
                <li>We may perform regular maintenance and updates</li>
                <li>In emergency situations, we may temporarily suspend services</li>
                <li>We reserve the right to modify or terminate services at any time</li>
              </ul>
            </section>

            <section class="section">
              <h2>9. Disclaimer</h2>
              <p>Our services are provided "as is" without any express or implied warranties. We do not guarantee that:</p>
              <ul>
                <li>Services will meet your specific needs</li>
                <li>Services will be uninterrupted or error-free</li>
                <li>Information obtained through services is accurate</li>
                <li>Defects in services will be corrected</li>
              </ul>
            </section>

            <section class="section">
              <h2>10. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our services.</p>
            </section>

            <section class="section">
              <h2>11. Violation Handling</h2>
              <p>If you violate these terms, we may:</p>
              <ul>
                <li>Issue warnings</li>
                <li>Temporarily or permanently suspend your account</li>
                <li>Delete violating content</li>
                <li>Terminate your service access rights</li>
                <li>Take legal action</li>
              </ul>
            </section>

            <section class="section">
              <h2>12. Governing Law</h2>
              <p>These terms are governed by applicable law. Any disputes should be resolved through friendly negotiation, and if negotiation fails, should be submitted to a court of competent jurisdiction.</p>
            </section>

            <section class="section">
              <h2>13. Contact Us</h2>
              <p>If you have any questions about these Terms of Use, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> jennifermontai77@gmail.com</li>
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
  font-size: 3rem;
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