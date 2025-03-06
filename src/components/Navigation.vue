<template>
  <nav :class="[
    'fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300',
    isMobile ? 'bottom-0' : 'bottom-2 xxs:bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8',
    isMobile ? 'w-full' : 'w-full xxs:w-[98%] xs:w-[95%] sm:w-[51%] md:w-[57%] lg:w-auto max-w-screen-lg'
  ]">
    <!-- Mobile Navigation -->
    <div v-if="isMobile" class="bg-black/90 backdrop-blur-lg border-t border-white/10">
      <ul class="flex items-center justify-around px-2 py-4">
        <li v-for="(item, index) in menuItems" 
            :key="index" 
            class="relative">
          <router-link 
            :to="item.path" 
            class="flex flex-col items-center group"
            :class="{ 'text-white': $route.path === item.path }">
            <!-- Active Indicator -->
            <div v-if="$route.path === item.path" 
                 class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
            
            <!-- Icon with Touch Ripple Effect -->
            <div class="relative">
              <component 
                :is="item.icon" 
                class="w-6 h-6 mb-1"
                :class="[
                  'transition-all duration-300',
                  $route.path === item.path ? 'text-white scale-110' : 'text-white/60'
                ]" />
              <div v-if="$route.path === item.path" 
                   class="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
            </div>
            
            <!-- Label -->
            <span class="text-xs"
                  :class="$route.path === item.path ? 'text-white font-medium' : 'text-white/60'">
              {{ item.name }}
            </span>
          </router-link>
        </li>
      </ul>

      <!-- Home Indicator Area (iOS) -->
      <div class="h-[env(safe-area-inset-bottom)] bg-black/90"></div>
    </div>

    <!-- Desktop Navigation -->
    <div v-else :class="[
      'bg-white/10 backdrop-blur-lg border border-white/10 transition-all duration-300',
      'px-1.5 xxs:px-2 xs:px-3 sm:px-6 md:px-8',
      'py-2 xxs:py-2.5 xs:py-3 sm:py-3.5 md:py-4',
      'rounded-2xl xxs:rounded-3xl sm:rounded-full'
    ]">
      <ul class="flex items-center justify-between sm:justify-start sm:space-x-4 md:space-x-6 lg:space-x-8">
        <li v-for="(item, index) in menuItems" 
            :key="index" 
            class="flex-1 sm:flex-none">
          <router-link 
            :to="item.path" 
            :class="[
              'flex flex-col sm:flex-row items-center justify-center group transition-all duration-300',
              'sm:space-x-2 text-white/60 hover:text-white',
              'px-1 xxs:px-1.5 xs:px-2 sm:px-2 md:px-3',
              { 'text-white scale-105': $route.path === item.path }
            ]">
            <component 
              :is="item.icon" 
              :class="[
                'transition-all duration-300 group-hover:scale-110',
                'w-4 h-4 xxs:w-4.5 xxs:h-4.5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6',
                'mb-0.5 xxs:mb-1 xs:mb-1 sm:mb-0',
                { 'text-primary-500': $route.path === item.path }
              ]" />
            <span :class="[
              'font-medium whitespace-nowrap transition-all duration-300',
              'text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs md:text-sm',
              { 'font-semibold': $route.path === item.path }
            ]">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {
  HomeIcon,
  BriefcaseIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  CurrencyDollarIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'SiteNavigation',
  data() {
    return {
      menuItems: [
        { name: '', path: '/', icon: HomeIcon },
        { name: '', path: '/works', icon: BriefcaseIcon },
        { name: '', path: '/about', icon: UserIcon },
        { name: '', path: '/service', icon: WrenchScrewdriverIcon },
        { name: '', path: '/contact', icon: EnvelopeIcon },
      ],
      isMobile: false
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 640 // Adjust breakpoint as needed
    }
  },
  components: {
    HomeIcon,
    BriefcaseIcon,
    UserIcon,
    WrenchScrewdriverIcon,
    EnvelopeIcon,
    CurrencyDollarIcon
  }
}
</script>

<style scoped>
/* Base transitions */
nav {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile-specific styles */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.1;
  }
}

/* Touch feedback animation */
@keyframes touch-ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* iOS safe area support */
@supports (padding: env(safe-area-inset-bottom)) {
  .mobile-nav {
    padding-bottom: env(safe-area-inset-bottom);
  }
}

/* Active state animations */
.router-link-active {
  position: relative;
}

/* Touch device optimizations */
@media (hover: none) {
  .router-link-active::after {
    width: 6px;
    height: 6px;
  }
}

/* Dark mode optimization */
@media (prefers-color-scheme: dark) {
  .mobile-nav {
    --tw-bg-opacity: 0.95;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  }
}
</style> 