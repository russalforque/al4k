<template>
  <nav class="fixed w-full z-50 transition-all duration-300">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
      

        <!-- Mobile Contact Button -->
        <a href="#contact" class="lg:hidden px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95">
          Contact
        </a>

    
        <!-- Mobile Menu -->
        <div class="lg:hidden fixed inset-0 bg-white/80 backdrop-blur-lg transition-all duration-300 z-40"
             :class="{ 'opacity-0 pointer-events-none': !isMenuOpen, 'opacity-100': isMenuOpen }">
          <div class="container mx-auto px-4 py-20">
            <div class="flex flex-col space-y-8">
              <template v-for="(item, index) in menuItems" :key="index">
                <router-link :to="item.href" 
                   class="text-3xl font-semibold text-gray-800 hover:text-black transition-all duration-300 transform hover:translate-x-2"
                   @click="closeMenu">
                  {{ item.text }}
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarSection',
  data() {
    return {
      isMenuOpen: false,
      scrolled: false,
      scrollProgress: 0,
      menuItems: [
        { text: 'Services', href: '/service' },
        { text: 'About Me', href: '/about' },
        { text: 'Portfolio', href: '/works' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    },
  }
}
</script>

<style scoped>
.backdrop-blur-lg {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style> 