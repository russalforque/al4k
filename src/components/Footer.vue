<template>
  <footer class="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
    <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Main Content -->
      <div class="mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-10 lg:mb-12">
          Contact me and Let's build<br class="hidden sm:block" />
          something incredible
        </h2>

        <!-- Contact Button -->
        <div class="mb-12 sm:mb-16 lg:mb-20">
          <a href="#contact" class="inline-block bg-white text-black px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full hover:bg-gray-100 transition-colors">
            <router-link to="/contact">Contact Me</router-link>
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-base sm:text-lg">Instagram</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-base sm:text-lg">LinkedIn</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-base sm:text-lg">Facebook</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-base sm:text-lg">Dribbble</a>
        </div>

        <!-- Contact Info -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h3 class="text-gray-400 text-sm sm:text-base mb-2 sm:mb-3">Address</h3>
            <p class="text-base sm:text-lg">Alumnos Basak San Nicolas<br />Cebu City, 6000</p>
          </div>

          <div>
            <h3 class="text-gray-400 text-sm sm:text-base mb-2 sm:mb-3">Email</h3>
            <div class="space-y-1 sm:space-y-2">
              <p class="text-base sm:text-lg break-words">russavenido@gmail.com</p>
              <p class="text-base sm:text-lg break-words">alforqueRhazel@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 class="text-gray-400 text-sm sm:text-base mb-2 sm:mb-3">Phone</h3>
            <p class="text-base sm:text-lg">+63 968 702 3329</p>
          </div>
        </div>
      </div>

      <!-- Bottom Navigation -->
      <div class="flex justify-center mb-6 sm:mb-8 lg:mb-10">
        <a href="#" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
          <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-800 flex items-center justify-center">
            <svg class="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 19V5M5 12L12 5L19 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span>Back to Top</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style> 