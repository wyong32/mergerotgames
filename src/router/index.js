import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        seo: {
          title: 'Merge Rot - Meme Merge Puzzle Game with Italian Brainrot',
          description: 'Merge Rot is a free, browser-based merge puzzle game full of chaotic humor, meme-style items, and evolving madness across themes like Italian Brainrot and more.',
          keywords: 'merge rot, meme merge game, italian brainrot, merge puzzle, funny merge, gravity merge, browser game'
        }
      }
    },
    {
      path: '/merge-fellas',
      name: 'merge-fellas',
      component: () => import('../views/MergeFellasView.vue'),
      meta: {
        seo: {
          title: 'Merge Fellas - Funny Meme Merge Puzzle Game Online',
          description: 'Play Merge Fellas, the funniest browser-based merge puzzle game! Combine meme-inspired characters, unlock crazy evolutions, and enjoy chaotic fun for free.',
          keywords: 'merge fellas, merge game online, funny puzzle game, meme merge game, browser puzzle, free merge game'
        }
      }
    },
    {
      path: '/merge-games',
      name: 'merge-games',
      component: () => import('../views/MergeGamesView.vue'),
      meta: {
        seo: {
          title: 'Merge Games - Play the Best Free Merge Puzzle Games Online',
          description: 'Discover the top free merge games online! Play Merge Fruit, Merge Fellas, Merge Rot, and more. Fun, addictive puzzle games that anyone can enjoy.',
          keywords: 'merge games, free merge puzzle, online merge games, merge fruit, merge fellas, merge rot'
        }
      }
    },
    {
      path: '/:category(merge-games|italian-brainrot-games)/:addressBar',
      name: 'game-detail',
      component: () => import('../views/GameDetailView.vue'),
    },
    {
      path: '/italian-brainrot-games',
      name: 'italian-brainrot-games',
      component: () => import('../views/ItalianBrainrotGamesView.vue'),
      meta: {
        seo: {
          title: 'Italian Brainrot Games - Play Chaotic Puzzle & Merge Games',
          description: 'Dive into Italian Brainrot games — a wild collection of chaotic merge and puzzle games full of memes, madness, and unfiltered fun. Play online for free!',
          keywords: 'italian brainrot games, merge games, chaotic puzzle, meme games, brainrot merge, free online puzzle'
        }
      }
    },
    {
      path: '/italian-brainrot-wiki',
      name: 'italian-brainrot-wiki',
      component: () => import('../views/BrainrotWikiView.vue'),
      meta: {
        seo: {
          title: 'Brainrot Wiki - Explore the World of Meme Games & Italian',
          description: 'Brainrot Wiki covers the chaotic world of brainrot games, Italian meme culture, and viral merge games. Learn about characters, trends, and game mechanics.',
          keywords: 'brainrot wiki, italian brainrot, brainrot games, meme games, merge brainrot, brainrot culture'
        }
      }
    },
    {
      path: '/italian-brainrot-wiki/:slug',
      name: 'wiki-detail',
      component: () => import('../views/WikiDetailView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        seo: {
          title: 'The Merge-Rot Blog - Updates, Memes & Chaos from the Merge',
          description: 'Welcome to The Merge-Rot Blog! Get the latest updates, strategy guides, and meme-fueled chaos from Merge Rot and other brainrot-style merge games.',
          keywords: 'merge rot blog, merge rot updates, brainrot games, meme merge blog, merge puzzle news, chaotic games'
        }
      }
    },
    {
      path: '/blog/:slug',
      name: 'blog-detail',
      component: () => import('../views/BlogDetailView.vue')
    },
    // Legal Pages
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
      meta: {
        seo: {
          title: 'Privacy Policy - Merge Rot',
          description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
          keywords: 'privacy policy, data protection, merge rot, privacy'
        }
      }
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: () => import('../views/TermsOfUseView.vue'),
      meta: {
        seo: {
          title: 'Terms of Use - Merge Rot',
          description: 'Read our terms of use and service agreement for using Merge Rot games and website.',
          keywords: 'terms of use, terms of service, merge rot, legal'
        }
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('../views/CopyrightView.vue'),
      meta: {
        seo: {
          title: 'Copyright Information - Merge Rot',
          description: 'Copyright information and intellectual property rights for Merge Rot games and content.',
          keywords: 'copyright, intellectual property, merge rot, legal'
        }
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue'),
      meta: {
        seo: {
          title: 'About Us - Merge Rot',
          description: 'Learn about the Merge Rot team, our mission, and the story behind the ultimate merging game experience.',
          keywords: 'about us, merge rot team, company, mission'
        }
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUsView.vue'),
      meta: {
        seo: {
          title: 'Contact Us - Merge Rot',
          description: 'Get in touch with the Merge Rot team. Find our contact information and support resources.',
          keywords: 'contact us, support, merge rot, help'
        }
      }
    }
  ],
})

export default router
