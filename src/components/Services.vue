<template>
  <section id="services" class="py-12 sm:py-16 md:py-24 bg-black" v-show="isVisible" ref="sectionRef">
    <div class="container mx-auto px-3 sm:px-4 max-w-6xl">
      <!-- Header Section -->
      <div class="mb-12 sm:mb-16 md:mb-20 transition-transform" 
           :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
           :style="{ transitionDelay: '200ms' }">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-white">
          Services I Offer
        </h2>
        <p class="text-gray-400 text-base sm:text-lg max-w-2xl">
          Transforming ideas into reality through cutting-edge technology and creative solutions
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        <div v-for="(service, index) in services" 
             :key="service.title"
             class="group transition-all duration-500"
             :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
             :style="{ transitionDelay: `${300 + (index * 100)}ms` }">
          <!-- Service Card -->
          <div class="bg-black border border-gray-800 p-6 sm:p-8 rounded-lg hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <!-- Service Icon -->
            <div class="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
              <img :src="service.image" :alt="service.title" 
                   class="h-full w-full object-contain">
            </div>

            <!-- Service Title -->
            <h3 class="text-lg sm:text-xl font-light text-white mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-gray-200">
              {{ service.title }}
            </h3>

            <!-- Service Description -->
            <p class="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-gray-300" v-html="service.description"></p>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-1.5 sm:gap-2">
              <span v-for="(tech, techIndex) in service.techStack" 
                    :key="techIndex"
                    class="px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-gray-400 rounded-full border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:text-gray-300">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Navigation -->
      <div class="mt-16 sm:mt-24 md:mt-32 pt-8 sm:pt-12 md:pt-16 border-t border-gray-800 transition-all duration-500"
           :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
           :style="{ transitionDelay: '800ms' }">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg class="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"/>
            </svg>
            <span class="text-gray-400 text-sm sm:text-base">SERVICES</span>
          </div>
          <a href="#contact" 
             class="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
            <span>Next</span>
            <svg class="w-3.5 sm:w-4 h-3.5 sm:h-4 transform group-hover:translate-x-1 transition-transform" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import PragramImg from '@/assets/images/Pragram.png'
import WebImg from '@/assets/images/Web.png'
import DatabaseImg from '@/assets/images/database-management.png'
import GithubImg from '@/assets/images/github.png'
import VueImg from '@/assets/images/Vue.png'
import TailwindImg from '@/assets/images/Tailwindcss.png'
import FigmaImg from '@/assets/images/Figmaa.png'
import PhotoshopImg from '@/assets/images/Photoshopp.png'
import Footer from './Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ServicesSection',
  components: {
    Footer
  },
  setup() {
    const isVisible = ref(true)
    const sectionRef = ref(null)
    let observer = null
    
    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          if (!window.location.pathname.includes('/service')) {
            isVisible.value = entry.isIntersecting
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      )

      if (sectionRef.value) {
        observer.observe(sectionRef.value)
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      isVisible,
      sectionRef
    }
  },
  data() {
    return {
      services: [
        {
          title: 'C# and ASP.NET Development',
          description: 'Building robust and scalable web applications with modern .NET ecosystem',
          image: PragramImg,
          techStack: ['C#', 'ASP.NET Core', 'Entity Framework', 'REST APIs']
        },
        {
          title: 'Web Development',
          description: 'Crafting responsive and performant web experiences',
          image: WebImg,
          techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
        },
        {
          title: 'Database Management',
          description: 'Architecting efficient and scalable database solutions',
          image: DatabaseImg,
          techStack: ['SQL Server', 'MongoDB', 'PostgreSQL']
        },
        {
          title: 'Version Control',
          description: 'Managing code collaboration and deployment workflows',
          image: GithubImg,
          techStack: ['Git', 'GitHub', 'GitLab', 'CI/CD']
        },
        {
          title: 'Vue.js Development',
          description: 'Creating dynamic and reactive user interfaces',
          image: VueImg,
          techStack: ['Vue.js', 'Vuex', 'Vue Router', 'Composition API']
        },
        {
          title: 'Tailwind CSS',
          description: 'Implementing modern and responsive designs',
          image: TailwindImg,
          techStack: ['Tailwind CSS', 'PostCSS', 'Responsive Design']
        },
        {
          title: 'UI/UX Design',
          description: 'Designing intuitive and delightful user experiences',
          image: FigmaImg,
          techStack: ['Figma', 'Wireframing', 'Prototyping', 'User Research']
        },
        {
          title: 'Graphics Design',
          description: 'Creating impactful visual assets and branding',
          image: PhotoshopImg,
          techStack: ['Photoshop', 'Illustrator', 'Web Graphics']
        }
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

/* Base transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

/* Transform transitions */
.translate-y-0 {
  transform: translateY(0);
}

.translate-y-10 {
  transform: translateY(40px);
}

/* Opacity transitions */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

/* Card hover effects */
.transform {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects only on desktop */
@media (min-width: 768px) {
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  
  .hover\:-translate-y-1:hover {
    transform: translateY(-4px);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Card shadow */
.hover\:shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style> 