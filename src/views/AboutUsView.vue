<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="container">
        <div class="about-page">
          <h1 class="page-title">About Us</h1>
          
          <div class="content">
            <section class="section intro">
              <h2>Our Story</h2>
              <p>Welcome to Merge Rot - the ultimate destination for merge games and brainrot entertainment! We are a passionate team dedicated to creating innovative, engaging, and entertaining gaming experiences that push the boundaries of creativity and fun.</p>
              <p>Born from a love for merge mechanics and internet culture, Merge Rot started as a simple idea: what if we could combine the addictive nature of merge games with the absurd humor and viral phenomena of modern meme culture? The result is a unique gaming platform that celebrates both strategic gameplay and entertaining chaos.</p>
            </section>

            <section class="section mission">
              <h2>Our Mission</h2>
              <p>Our mission is simple yet ambitious: to create a gaming ecosystem where creativity meets entertainment, where players can escape into worlds that are both familiar and surprisingly unexpected. We believe games should be:</p>
              <ul>
                <li><strong>Accessible:</strong> Easy to learn, difficult to master, and enjoyable for everyone</li>
                <li><strong>Creative:</strong> Pushing boundaries and exploring new concepts</li>
                <li><strong>Community-driven:</strong> Built with and for our players</li>
                <li><strong>Entertaining:</strong> Never taking ourselves too seriously while delivering quality experiences</li>
              </ul>
            </section>

            <section class="section vision">
              <h2>Our Vision</h2>
              <p>We envision a world where gaming transcends traditional boundaries, where meme culture and strategic gameplay coexist harmoniously, and where every player can find something that resonates with their sense of humor and gaming preferences.</p>
              <p>Through Merge Rot, we aim to build a community that celebrates both the absurd and the strategic, creating lasting memories and shared experiences that bring people together through laughter and competition.</p>
            </section>

            <section class="section team">
              <h2>Our Team</h2>
              <p>We are a diverse group of developers, designers, artists, and gaming enthusiasts who share a common passion for creating extraordinary digital experiences. Our team combines years of industry experience with a fresh perspective on what makes games truly memorable.</p>
              
              <div class="team-values">
                <h3>What Drives Us</h3>
                <ul>
                  <li><strong>Innovation:</strong> Constantly exploring new gameplay mechanics and creative concepts</li>
                  <li><strong>Quality:</strong> Ensuring every release meets our high standards for performance and enjoyment</li>
                  <li><strong>Community:</strong> Listening to our players and building games they actually want to play</li>
                  <li><strong>Fun:</strong> Remembering that games are meant to entertain and bring joy</li>
                </ul>
              </div>
            </section>

            <section class="section values">
              <h2>Our Values</h2>
              <div class="values-grid">
                <div class="value-item">
                  <h3>Player-First Approach</h3>
                  <p>Every decision we make puts our players' experience and enjoyment at the center. We design for fun, not just metrics.</p>
                </div>
                
                <div class="value-item">
                  <h3>Transparency</h3>
                  <p>We believe in open communication with our community, sharing our development process, and being honest about our successes and challenges.</p>
                </div>
                
                <div class="value-item">
                  <h3>Continuous Improvement</h3>
                  <p>We're never satisfied with "good enough." Every update, every game, every interaction is an opportunity to do better.</p>
                </div>
                
                <div class="value-item">
                  <h3>Creative Freedom</h3>
                  <p>We embrace the weird, the wonderful, and the unexpected. Creativity thrives when there are no limits on imagination.</p>
                </div>
              </div>
            </section>

            <section class="section future">
              <h2>Looking Forward</h2>
              <p>The future of Merge Rot is as exciting as it is unpredictable. We're constantly working on new games, features, and experiences that will surprise and delight our community. From expanding our current game universe to exploring entirely new genres and concepts, we're committed to staying at the forefront of creative gaming.</p>
              
              <p>We're also investing in community features, social integrations, and platform improvements that will make Merge Rot not just a gaming platform, but a destination where players can connect, share, and create together.</p>
              
              <h3>What's Coming Next</h3>
              <ul>
                <li>New game modes and challenges</li>
                <li>Enhanced community features</li>
                <li>Mobile optimization and new platform support</li>
                <li>Expanded character roster and storylines</li>
                <li>User-generated content tools</li>
              </ul>
            </section>

            <section class="section contact">
              <h2>Get in Touch</h2>
              <p>We love hearing from our community! Whether you have feedback, suggestions, questions, or just want to say hello, we're always excited to connect with our players.</p>
              
              <div class="contact-info">
                <ul>
                  <li><strong>General Inquiries:</strong> delldremo9898@gmail.com</li>
                  <li><strong>Support:</strong> delldremo9898@gmail.com</li>
                  <li><strong>Contact Page:</strong> <RouterLink to="/contact-us">Contact Us</RouterLink></li>
                </ul>
              </div>
              
              <p>Thank you for being part of the Merge Rot community. Together, we're building something truly special!</p>
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
.about-page {
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

.content {
  line-height: 1.8;
  color: #333;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.5rem;
}

.section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
  color: #555;
}

.section p {
  margin-bottom: 1.2rem;
  color: #333;
}

.section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.section li {
  margin-bottom: 0.8rem;
  color: #333;
}

.section li strong {
  color: #333;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-item {
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 4px solid #666;
}

.value-item h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
}

.value-item p {
  margin-bottom: 0;
  color: #555;
}

.team-values {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.contact-info ul {
  margin: 1.5rem 0;
  list-style: none;
  padding-left: 0;
}

.contact-info li {
  margin-bottom: 0.8rem;
  padding: 0.5rem;
  background: #f9f9f9;
  border-radius: 4px;
}

.section a {
  color: #0066cc;
  text-decoration: underline;
}

.section a:hover {
  color: #0052a3;
}

@media (max-width: 768px) {
  .about-page {
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
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .value-item {
    padding: 1rem;
  }
}
</style> 