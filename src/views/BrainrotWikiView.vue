<template>
  <div class="page-main">
    <Header />
    <main>
      <div class="page-wrapper container">
        <h1 class="page-title">Brainrot Wiki</h1>
        <div class="wiki-layout">
          <!-- Right Panel: Static Content -->
          <section class="info-card">
            <h2>Italian Brainrot: The Viral Chaos Your Kids Are Laughing At</h2>
            <p>
              There's a new kind of nonsense taking over the internet — and your child's screen time
              — and it goes by the name of <strong>Italian Brainrot</strong>. If you've heard the
              phrase "Tung Tung Sahur" yelled from your living room or seen a crocodile with
              airplane engines for wings, welcome. You've officially entered the uncanny valley of
              modern meme culture.
            </p>

            <p>
              <strong>Italian Brainrot</strong> is not a genre. It's not even a style. It's an
              internet energy — absurd, AI-fueled, and completely detached from logic or
              explanation. And that's exactly why it's so appealing to teens and tweens.
            </p>

            <h2>What Exactly Is Italian Brainrot?</h2>
            <p>
              Born on platforms like YouTube and TikTok, <strong>Italian Brainrot</strong> is a wave
              of surrealist short videos starring bizarre AI-generated characters. They are usually
              given melodic names, vaguely European vibes, and an overload of digital weirdness.
              Most videos feature heavily edited visuals and absurdist narration in broken or
              sing-songy Italian — or something that sounds like it. If that sounds strange, good.
              It's supposed to be.
            </p>

            <p>
              The genre exploded in early 2025 and has been mutating ever since, with new
              characters, remixes, and formats being created every day. Here's a taste of the
              madness that's going viral across the globe.
            </p>

            <article>
              <h3>Bombardino Crocodilo</h3>
              <p>
                Imagine a WWII bomber plane. Now replace its cockpit with a crocodile head. Give it
                a neon-purple funk aesthetic and blast EDM in the background. Congratulations —
                you've met <strong>Bombardino Crocodilo</strong>. This airborne reptile is the face
                of one of the most popular <strong>Italian Brainrot</strong> videos to date.
              </p>
              <p>
                The song is catchy, repetitive, and probably worming its way into your brain as you
                read this. It's completely ridiculous. That's the point.
              </p>
              <div class="video-wrapper">
                <div v-if="!video1Loaded" class="video-mask" @click="loadVideo('video1')">
                  <img src="https://picsum.photos/800/450?1" alt="Video thumbnail" class="video-thumbnail" />
                  <div class="play-button">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="rgba(255, 255, 255, 0.9)" />
                      <polygon points="10,8 16,12 10,16" fill="#ff4757" />
                    </svg>
                  </div>
                </div>
                <iframe
                  v-if="video1Loaded"
                  class="yt-video"
                  src="https://www.youtube.com/embed/Iep-8lR9H0U"
                  title="Bombardino Crocodilo Funk"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </article>

            <article>
              <h3>Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur</h3>
              <p>
                This bat-wielding club man has absolutely no business going as hard as he does.
                <strong>Tung Tung Sahur</strong> is a humanoid block of wood with giant eyes and a
                calm but ominous presence, lurking at a rustic bus stop in the middle of nowhere.
                With over 4.5 million views, he's one of the definitive mascots of the
                <strong>Italian Brainrot</strong> movement.
              </p>
              <p>
                Is he a threat? A prophet? A sentient cricket bat? We don't know. No one knows. And
                once again: don't overthink it.
              </p>
              <div class="video-wrapper">
                <div v-if="!video2Loaded" class="video-mask" @click="loadVideo('video2')">
                  <img src="https://picsum.photos/800/450?2" alt="Video thumbnail" class="video-thumbnail" />
                  <div class="play-button">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="rgba(255, 255, 255, 0.9)" />
                      <polygon points="10,8 16,12 10,16" fill="#ff4757" />
                    </svg>
                  </div>
                </div>
                <iframe
                  v-if="video2Loaded"
                  class="yt-video"
                  src="https://www.youtube.com/embed/Vu6ooxSe5M8"
                  title="Tung Tung Sahur Meme"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </article>

            <article>
              <h3>Lirilì Larilà</h3>
              <p>
                If an elephant merged with a cactus and slipped on a pair of Birkenstocks in the
                middle of a dreamscape desert, you'd get <strong>Lirilì Larilà</strong>. Equal parts
                cute, unsettling, and oddly fashionable, this character feels like it came out of a
                surrealist painting curated by the algorithm.
              </p>
              <p>
                Floating alarm clocks? Of course. Sand dunes and succulents? Naturally.
                <strong>Italian Brainrot</strong> doesn't need to make sense. It just needs to make
                you laugh — or feel weird. Preferably both.
              </p>
              <div class="video-wrapper">
                <div v-if="!video3Loaded" class="video-mask" @click="loadVideo('video3')">
                  <img src="https://picsum.photos/800/450?3" alt="Video thumbnail" class="video-thumbnail" />
                  <div class="play-button">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="rgba(255, 255, 255, 0.9)" />
                      <polygon points="10,8 16,12 10,16" fill="#ff4757" />
                    </svg>
                  </div>
                </div>
                <iframe
                  v-if="video3Loaded"
                  class="yt-video"
                  src="https://www.youtube.com/embed/FHpjW6AD-Vk"
                  title="Lirilì Larilà Italian Brainrot"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </article>

            <h2>Why Is Italian Brainrot So Popular?</h2>
            <p>
              At its core, <strong>Italian Brainrot</strong> is about play. It's meme culture
              unchained from reality, narrative, or logic. It's post-ironic, post-meme, post-sanity.
              For kids growing up in the digital age, it's a low-stakes way to explore absurdity,
              creativity, and collective humor. It's shareable, remixable, and doesn't require
              "getting it" — because there's nothing to get.
            </p>

            <p>
              Much like previous generations had <em>Badger Badger</em>,
              <em>Charlie the Unicorn</em>, or <em>Shoop Da Whoop</em>, the younger crowd now has
              <strong>Italian Brainrot</strong>. It's just weirder, faster, and AI-generated.
            </p>

            <h2>Final Word: Embrace the Absurd</h2>
            <p>
              If your child is quoting strange words, drawing crocodile planes, or remixing memes
              with surreal soundtracks, don't panic. This is their version of fun. Let them enjoy
              their <strong>Italian Brainrot</strong> moment. No, it doesn't make sense. No, you
              don't have to understand it. And yes — we'll say it again — do not overthink it.
            </p>

            <p>
              Because sometimes, the best response to a crocodile bomber or a baseball-bat-wielding
              cartoon is to just laugh and say: "Tung Tung."
            </p>

            <p>
              <strong>Keywords:</strong> Italian Brainrot, Bombardino Crocodilo, Tung Tung Sahur,
              Lirilì Larilà, viral meme, surreal characters, AI meme culture, teen internet trends
            </p>
          </section>

          <!-- Left Panel: List of Wiki Entries -->
          <aside class="left-panel">
            <h2 class="left-panel-title">Wiki Entries</h2>
            <div class="entry-list-panel">
              <RouterLink
                v-for="entry in wikiData.entries"
                :key="entry.id"
                :to="`/brainrot-wiki/${entry.addressBar}`"
                class="post-card"
              >
                <img :src="entry.imageUrl" :alt="entry.imageAlt" class="post-image" />
                <div class="post-content">
                  <h3 class="post-title">{{ entry.title }}</h3>
                </div>
              </RouterLink>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { brainrotWikiData as wikiData } from '@/data/brainrotWiki.js'

// 视频加载状态
const video1Loaded = ref(false)
const video2Loaded = ref(false)
const video3Loaded = ref(false)

// 加载视频函数
const loadVideo = (videoId) => {
  if (videoId === 'video1') {
    video1Loaded.value = true
  } else if (videoId === 'video2') {
    video2Loaded.value = true
  } else if (videoId === 'video3') {
    video3Loaded.value = true
  }
}
</script>

<style scoped>
.wiki-layout {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.left-panel {
  flex: 1;
  order: 1;
  position: sticky;
  top: 1rem;
  align-self: flex-start;

  /* Consistent Card Styling */
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
}

.left-panel-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ff80ab, #ff9e80);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Left Panel: Entry List */
.entry-list-panel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.post-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 128, 171, 0.3);
}

.post-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.post-content {
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-title {
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-heading);
}

.read-more {
  font-weight: bold;
  color: var(--color-primary);
  align-self: flex-end;
  font-size: 0.9rem;
}

/* Right Panel: Content Display */
.info-card h2 {
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), #ff80ab);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.75rem;
  color: var(--color-text);
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed;
  transition: border-color 0.3s;
}

/* Different colors for each h2 in the article */
.info-card h2:nth-of-type(1) {
  background-image: linear-gradient(90deg, #84ffff, #80d8ff); /* Cyan to Light Blue */
}
.info-card h2:nth-of-type(2) {
  background-image: linear-gradient(90deg, #ff80ab, #ff9e80); /* Pink to Orange-Pink */
}
.info-card h2:nth-of-type(3) {
  background-image: linear-gradient(90deg, #4caf50, #aed581); /* Green to Light Green */
}
.info-card h2:nth-of-type(4) {
  background-image: linear-gradient(90deg, #ffc107, #ff9800); /* Amber to Orange */
}

/* Different colors for each h3 in the article */
.info-card article:nth-of-type(1) h3 {
  border-color: #84ffff;
  color: #00bcd4;
}
.info-card article:nth-of-type(2) h3 {
  border-color: #b388ff;
  color: #7e57c2;
}
.info-card article:nth-of-type(3) h3 {
  border-color: #ff80ab;
  color: #f06292;
}

.info-card p {
  line-height: 1.7;
  color: var(--color-text-soft);
  margin-bottom: 1rem;
}

.info-card p strong {
  color: var(--color-text);
  font-weight: 600;
}

/* Video Wrapper Styles */
.video-wrapper {
  display: block;
  max-width: 50%;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.75rem;
  border: 2px solid white;
  margin-bottom: 1rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.2);
  position: relative;
  overflow: hidden;
}

.info-card iframe {
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
}

/* Video Mask Styles */
.video-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.75rem;
  overflow: hidden;
}

.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
}

.play-button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  z-index: 2;
}

.play-button:hover {
  transform: scale(1.1);
}

.play-button svg {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.info-card {
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(255, 128, 171, 0.15);
  flex: 3;
  order: 2;
}


.page-title {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-secondary),
    var(--color-primary)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  background-size: 200% auto;
  animation: text-shine 5s linear infinite;
}

@keyframes text-shine {
  to {
    background-position: 200% center;
  }
}

@media (max-width: 1024px) {
  .wiki-layout {
    flex-direction: column;
    gap: 1rem;
  }
  .left-panel,
  .info-card {
    order: initial; /* Reset order to follow DOM */
  }
  .left-panel {
    position: static;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .info-card {
    padding: 0.5rem;
  }
  .entry-list-panel {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  .info-card h2 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .info-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .info-card p {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  .video-wrapper {
    max-width: 100%;
  }
  
  .play-button svg {
    width: 60px;
    height: 60px;
  }
  .info-card p:last-child {
    font-size: 0.8rem;
  }
}
</style> 