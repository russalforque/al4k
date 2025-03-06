<template>
  <div class="min-h-screen bg-black text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="mb-8 sm:mb-12 md:mb-16 fade-in-up">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"/>
          </svg>
          <p class="text-gray-400 tracking-wide text-sm sm:text-base">CREATIONS</p>
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-5xl font-light mb-8 sm:mb-12 md:mb-16">My Selected Works</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div v-for="(project, index) in projects" 
               :key="index" 
               :style="{ animationDelay: `${index * 0.2}s` }"
               class="group bg-[#111111] rounded-lg overflow-hidden relative fade-in-up">
            <div class="relative overflow-hidden aspect-video">
              <template v-if="project.type === 'video'">
                <video autoplay loop muted playsinline class="w-full h-full object-cover">
                  <source :src="project.media" type="video/mp4">
                </video>
              </template>
              <template v-else>
                <img :src="project.media" :alt="project.title" class="w-full h-full object-cover">
              </template>
            </div>
            
            <div class="p-4 sm:p-6 md:p-8">
              <div class="flex justify-between items-start mb-3 sm:mb-4">
                <div class="flex-1 pr-4">
                  <h3 class="text-xl sm:text-2xl font-light mb-1 sm:mb-2">{{ project.title }}</h3>
                  <p class="text-gray-400 text-sm sm:text-base">{{ project.description }}</p>
                </div>
                <a :href="project.link" 
                   class="p-1.5 sm:p-2 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
                   target="_blank"
                   aria-label="View project">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
              
              <span class="px-2.5 py-1 text-xs sm:text-sm bg-gray-800 rounded-full inline-block">
                {{ project.category === 'Web Development' ? 'Website' : 'App' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Navigation -->
      <div class="mt-16 sm:mt-24 md:mt-32 pt-8 sm:pt-12 md:pt-16 border-t border-gray-800">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg class="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"/>
            </svg>
            <span class="text-gray-400 text-sm sm:text-base">WORKS</span>
          </div>
          <router-link to="/about">
            <a href="#contact" class="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              <span>Next</span>
              <svg class="w-3.5 sm:w-4 h-3.5 sm:h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'WorksPortfolio',
  components: {
    Footer
  },
  data() {
    return {
      projects: [
        {
          title: 'TaskFlow',
          description: 'A task flow app designed to help users organize and plot their schedules and tasks efficiently.',
          media: '/images/taskflow.png',
          category: 'UI/UX',
          type: 'image',
          link: 'https://www.figma.com/proto/CCcEyy6M9UREEkp708GFar/Untitled?node-id=0-1&t=PXrr8Qsf06fQMaQz-1'
        },
        {
          title: 'VinoHaven',
          description: 'A mobile app designed for a wine shop, offering a seamless browsing and shopping experience for wine enthusiasts',
          media: '/images/VinoHaven.png',
          category: 'Web Development',
          type: 'image',
          link: 'https://russ152002.github.io/latina/ww.html'
        },
        {
          title: 'VinoHaven',
          description: 'A mobile app designed for a wine shop, offering a seamless browsing and shopping experience for wine enthusiasts',
          media: '/images/VinoHaven.png',
          category: 'Web Development',
          type: 'image',
          link: 'https://russ152002.github.io/latina/ww.html'
        },
        {
          title: 'TaskFlow',
          description: 'A task flow app designed to help users organize and plot their schedules and tasks efficiently.',
          media: '/images/taskflow.png',
          category: 'UI/UX',
          type: 'image',
          link: 'https://www.figma.com/proto/CCcEyy6M9UREEkp708GFar/Untitled?node-id=0-1&t=PXrr8Qsf06fQMaQz-1'
        },
   
       
      ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover transitions for project cards */
.group {
  transition: transform 0.3s ease-in-out;
}

@media (min-width: 768px) {
  .group:hover {
    transform: translateY(-5px);
  }
}

/* Smooth transition for all interactive elements */
a, button {
  transition: all 0.3s ease;
}

/* Image/video hover effect */
.relative.overflow-hidden img,
.relative.overflow-hidden video {
  transition: transform 0.5s ease;
}

@media (min-width: 768px) {
  .group:hover img,
  .group:hover video {
    transform: scale(1.05);
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 480px) {
  .grid {
    gap: 1rem;
  }
}
</style> 