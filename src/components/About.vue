<template>
  <div class="min-h-screen bg-black text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4">
    <transition
      name="fade-up"
      appear
      mode="out-in"
      @enter="onEnter"
    >
      <div class="container mx-auto max-w-6xl">
        <div class="mb-12 sm:mb-16 md:mb-20">
          <div class="flex gap-2">
            <svg class="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"/>
            </svg>
            <p class="text-gray-400 mb-2 tracking-wide text-sm sm:text-base">I'M RHAZEL</p>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8">About Me</h1>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div class="space-y-4 sm:space-y-6">
            <p class="text-gray-400 text-base sm:text-lg md:text-sm lg:text-lg leading-relaxed">
              I'm Rhazel, a recently graduated BSIT student with a passion for web development and UI design. Throughout my academic journey, I have developed a strong foundation in front-end and back-end technologies, allowing me to build functional and visually appealing applications.
            </p>
            
            <p class="text-gray-400 text-base sm:text-lg md:text-sm lg:text-lg leading-relaxed">
              My approach focuses on problem-solving, efficiency, and leveraging modern tools to create seamless user experiences. I thrive on learning new technologies, refining my skills, and staying updated with industry trends.
            </p>
            
            <p class="text-gray-400 text-base sm:text-lg md:text-sm lg:text-lg leading-relaxed">
              I am eager to take on new challenges, collaborate with like-minded individuals, and contribute to innovative projects that make an impact. Whether it's designing interactive user interfaces or developing efficient web solutions, I'm excited to turn ideas into reality.
            </p>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-2 mt-6 sm:mt-20">
              <a href="mailto:russavenido@gmail.com" 
                 class="px-4 sm:px-6 md:px-4 py-2 bg-black border border-gray-700 rounded-full text-gray-200 hover:border-gray-500 hover:text-white transition-all duration-300 text-sm sm:text-base text-center sm:text-left hover:-translate-y-0.5">
                russavenido@gmail.com
              </a>
              <a href="tel:+1234567890" 
                 class="px-4 sm:px-6 py-2 bg-black border border-gray-700 rounded-full text-gray-200 hover:border-gray-500 hover:text-white transition-all duration-300 text-sm sm:text-base text-center sm:text-left hover:-translate-y-0.5">
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
              </div>
            </div>
          </div>

          <div class="relative mt-8 md:mt-0">
            <img 
              src="@/assets/images/Rhazel.jpg" 
              alt="Profile" 
              class="w-full md:w-full lg:w-full xl:w-3/4 h-[40vh] sm:h-[50vh] md:h-[55vh] object-cover rounded-md shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            >
          </div>
        </div>
      </div>
    </transition>
    
    <!-- Main Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'AboutSection',
  components: {
    Footer
  },
  methods: {
    onEnter(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 50)
    }
  }
}
</script>

<style scoped>
/* Fade up transition */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-up-enter-to,
.fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Ensure the container has the correct initial state */
.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  opacity: 1;
  transform: translateY(0);
  will-change: transform, opacity;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
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