<template>
  <div class="min-h-screen bg-black text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4" v-show="isVisible" ref="sectionRef">
    <div class="container mx-auto max-w-6xl">
      <div class="mb-12 sm:mb-16 md:mb-20">
        <div class="transition-all duration-500" 
             :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
             :style="{ transitionDelay: '200ms' }">
          <p class="text-gray-400 mb-2 tracking-wide text-sm sm:text-base">I'M RHAZEL</p>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8">About Me</h1>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div class="space-y-4 sm:space-y-6 transition-all duration-500"
               :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
               :style="{ transitionDelay: '400ms' }">
            <p class="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm Rhazel, a recently graduated BSIT student with a passion for web development and UI design. Throughout my academic journey, I have developed a strong foundation in front-end and back-end technologies, allowing me to build functional and visually appealing applications.
            </p>
            
            <p class="text-gray-300 text-base sm:text-lg leading-relaxed">
              My approach focuses on problem-solving, efficiency, and leveraging modern tools to create seamless user experiences. I thrive on learning new technologies, refining my skills, and staying updated with industry trends.
            </p>
            
            <p class="text-gray-300 text-base sm:text-lg leading-relaxed">
              I am eager to take on new challenges, collaborate with like-minded individuals, and contribute to innovative projects that make an impact. Whether it's designing interactive user interfaces or developing efficient web solutions, I'm excited to turn ideas into reality.
            </p>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a href="mailto:russavenido@gmail.com" 
                 class="px-4 sm:px-6 py-2 bg-black border border-gray-700 rounded-full text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-300 text-sm sm:text-base text-center sm:text-left hover:-translate-y-0.5">
                russavenido@gmail.com
              </a>
              <a href="tel:+1234567890" 
                 class="px-4 sm:px-6 py-2 bg-black border border-gray-700 rounded-full text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-300 text-sm sm:text-base text-center sm:text-left hover:-translate-y-0.5">
                09178903212
              </a>
            </div>

            <div class="mt-8 sm:mt-12">
              <h3 class="text-base sm:text-lg mb-3 sm:mb-4">My Development Essentials</h3>
              <div class="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base">
                <span class="hover:text-white transition-colors duration-300">Vue.js</span>
                <span class="text-gray-600">/</span>
                <span class="hover:text-white transition-colors duration-300">Node.js</span>
                <span class="text-gray-600">/</span>
                <span class="hover:text-white transition-colors duration-300">React</span>
                <span class="text-gray-600">/</span>
                <span class="hover:text-white transition-colors duration-300">TypeScript</span>
                <span class="text-gray-600">/</span>
                <span class="hover:text-white transition-colors duration-300">MongoDB</span>
              </div>
            </div>
          </div>

          <div class="relative mt-8 md:mt-0 transition-all duration-500"
               :class="{ 'translate-x-0 opacity-100': isVisible, 'translate-x-10 opacity-0': !isVisible }"
               :style="{ transitionDelay: '600ms' }">
            <img 
              src="@/assets/images/Rhazel.jpg" 
              alt="Profile" 
              class="w-full md:w-3/4 h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            >
          </div>
        </div>
      </div>

      <!-- Component Footer -->
      <div class="mt-16 sm:mt-24 md:mt-32 pt-8 sm:pt-12 md:pt-16 border-t border-gray-800 transition-all duration-500"
           :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
           :style="{ transitionDelay: '800ms' }">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg class="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"/>
            </svg>
            <span class="text-gray-400 text-sm sm:text-base">ABOUT</span>
          </div>
          <a href="#portfolio" 
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
    
    <!-- Main Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AboutSection',
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
          if (!window.location.pathname.includes('/about')) {
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
  }
}
</script>

<style scoped>
.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
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

.translate-x-0 {
  transform: translateX(0);
}

.translate-x-10 {
  transform: translateX(40px);
}

/* Opacity transitions */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

/* Hover effects */
@media (min-width: 768px) {
  .hover\:-translate-y-0\.5:hover {
    transform: translateY(-2px);
  }
  
  a:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style> 