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
          title: 'Merge Rot - Official Site',
          description: 'Welcome to Merge Rot, the ultimate strategic merge game. Join thousands of players, explore game modes, and become a legend.',
          keywords: 'merge rot, merge game, strategy, puzzle, mobile game'
        }
      }
    },
    {
      path: '/merge-fellas',
      name: 'merge-fellas',
      component: () => import('../views/MergeFellasView.vue'),
      meta: {
        seo: {
          title: 'Meet the Merge Fellas - Merge Rot',
          description: 'Discover the legendary pioneers of the Merge Rot world. Learn about the Fellas, their backstories, and unique abilities.',
          keywords: 'merge rot, merge fellas, characters, lore, legends'
        }
      }
    },
    {
      path: '/merge-games',
      name: 'merge-games',
      component: () => import('../views/MergeGamesView.vue'),
      meta: {
        seo: {
          title: 'All Game Modes - Merge Rot',
          description: 'Explore the full collection of Merge Rot game modes, from Classic and Puzzle to high-action Arena and Speed Run.',
          keywords: 'merge rot, game modes, classic, speed run, puzzle, arena'
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
          title: 'Italian Brainrot Games - Merge Rot',
          description: 'A special collection of Italian-themed brainrot games.',
          keywords: 'merge rot, italian games, brainrot'
        }
      }
    },
    {
      path: '/brainrot-wiki',
      name: 'brainrot-wiki',
      component: () => import('../views/BrainrotWikiView.vue'),
      meta: {
        seo: {
          title: 'Brainrot Wiki - Merge Rot',
          description: 'The official community wiki for all things Merge Rot and Brainrot. Find guides, lore, and more.',
          keywords: 'merge rot, wiki, brainrot, guides, lore, community'
        }
      }
    },
    {
      path: '/brainrot-wiki/:slug',
      name: 'wiki-detail',
      component: () => import('../views/WikiDetailView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        seo: {
          title: 'Official Blog - Merge Rot',
          description: 'The latest news, updates, and developer insights from the Merge Rot team.',
          keywords: 'merge rot, blog, news, updates, dev blog'
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
