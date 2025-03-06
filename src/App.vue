<template>
  <div class="relative">
    <router-view v-slot="{ Component }">
      <component :is="Component" @mounted="handleMount" />
    </router-view>
    <SiteNavigation />
    
   
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import SiteNavigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    SiteNavigation
  },
  setup() {
    const showScrollTop = ref(false)

    const checkScroll = () => {
      showScrollTop.value = window.pageYOffset > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const handleMount = () => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', checkScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll)
    })

    return {
      showScrollTop,
      scrollToTop,
      handleMount
    }
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Global styles */
html {
  scroll-behavior: smooth;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: black;
  overflow-y: overlay;
  min-height: 100%;
}

/* Custom Scrollbar Styles */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.5);
  border-radius: 4px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.8);
}

/* Hide scrollbar for mobile devices */
@media (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 0px;
  }
}

/* Smooth transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
