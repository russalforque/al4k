<template>
  <div class="bg-black min-h-screen text-white">
    <!-- Chat Button -->
    <div class="fixed bottom-4 right-4 z-[9999] mb-11 md:bottom-6 md:right-6 fade-in" style="animation-delay: 2s;">
      <button 
        @click="toggleChat" 
        class="flex items-center justify-center bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
          />
        </svg>
      </button>
    </div>

    <!-- Chat Modal -->
    <ChatModal v-if="showChat" @close="toggleChat" />

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div class="max-w-8xl mx-auto">
        <!-- Profile Section -->
        <div class="mb-8 sm:mb-8 fade-in">
          <img src="@/assets/images/Rhazel.jpg" alt="Profile" class="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 sm:mb-6 profile-image">
          <div class="space-y-1 sm:space-y-2">
            <h2 class="text-xl sm:text-base text-gray-400 slide-up">I'm Russ Alforque 👋</h2>
            <p class="text-gray-400 text-sm sm:text-base slide-up" style="animation-delay: 0.2s">UI/UX & Web Developer.</p>
          </div>
        </div>

        <!-- Hero Text -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8 sm:mb-12 max-w-4xl slide-up" style="animation-delay: 0.4s">
          Designing and developing innovative solutions for visionary brands and projects.
        </h1>

        <!-- CTA Button -->
        <router-link to="/works" class="block sm:inline-block slide-up" style="animation-delay: 0.6s">
          <button class="w-full sm:w-auto group flex items-center justify-center sm:inline-flex bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300">
            Explore My Works
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </router-link>

        <!-- Portfolio Grid -->
        <div class="mt-12 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div v-for="(project, index) in portfolioProjects" 
               :key="index" 
               :style="{ animationDelay: `${0.8 + index * 0.2}s` }"
               class="relative aspect-[4/3] overflow-hidden rounded-lg fade-in-up">
            <img :src="project.image" :alt="project.title" 
                 class="w-full h-full object-cover transition-all duration-500 hover:scale-110">
          </div>
        </div>

        <!-- Bottom Stats -->
        <div class="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 border-t border-gray-800 pt-8 sm:pt-12">
          <div v-for="(_, index) in 1" 
               :key="index"
               :style="{ animationDelay: `${1.6 + index * 0.2}s` }"
               class="flex items-center space-x-3 sm:space-x-4 fade-in-left">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p class="text-sm sm:text-base">Product Designer @russ_al4k</p>
          </div>
          <div class="flex items-center space-x-3 sm:space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm sm:text-base">1 Year of Designing Experties</p>
          </div>
          <div class="flex items-center space-x-3 sm:space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm sm:text-base">2% Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from './Footer.vue'
import ChatModal from './ChatModal.vue'

export default {
  name: 'HeroSection',
  components: {
    Footer,
    ChatModal
  },

  data() {
    return {
      showChat: false,
      portfolioProjects: [
        {
          title: 'MacBook Pro Mockup',
          image: require('@/assets/images/smartphoneUI.jpg')
        },
        {
          title: 'Mac Design',
          image: require('@/assets/images/UserInterfaceOne.png')
        },
        {
          title: 'Laptop Display',
          image: require('@/assets/images/psd.jpg')
        },
        {
          title: 'High Resolution',
          image: require('@/assets/images/lina.jpg')
        }
      ]
    }
  },

  methods: {
    toggleChat() {
      this.showChat = !this.showChat
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.container {
  max-width: 1400px;
  width: 100%;
}

h1, h2, p {
  font-family: 'Inter', sans-serif;
}

h1 {
  letter-spacing: -0.02em;
}

/* Responsive text adjustments */
@media (max-width: 640px) {
  h1 {
    letter-spacing: -0.01em;
  }
  
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

.slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.profile-image {
  animation: profileImageAppear 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform: scale(0.8);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes profileImageAppear {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Enhanced Transitions */
.group {
  transition: all 0.3s ease-in-out;
}

.group:hover {
  transform: translateY(-2px);
}

img, button, a {
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>

<style>
#app {
  position: relative;
}

.fixed {
  position: fixed !important;
}
</style> 