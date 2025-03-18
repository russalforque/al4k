<template>
  <footer class="bg-black text-white py-16 sm:py-20">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Left Column -->
        <div class="space-y-8">
          <h2 class="text-4xl sm:text-5xl font-light leading-tight">
            Let's Create<br/>
            <span class="bg-gradient-to-r from-gray-400 to-gray-500  bg-clip-text">Something Amazing</span>
          </h2>
          
          <p class="text-gray-400 max-w-lg">
            Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
          </p>

          <router-link 
            to="/contact" 
            class="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 group"
          >
            Contact Me
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>

        <!-- Right Column -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Contact Info -->
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium mb-3">Location</h3>
              <p class="text-gray-400">Alumnos Basak San Nicolas<br/>Cebu City, 6000</p>
            </div>
            <div>
              <h3 class="text-lg font-medium mb-3">Contact</h3>
              <p class="text-gray-400">+63 968 702 3329</p>
            </div>
          </div>

          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium mb-3">Email</h3>
              <a href="mailto:russavenido@gmail.com" class="text-gray-400 hover:text-white transition-colors block">russavenido@gmail.com</a>
              <a href="mailto:alforqueRhazel@gmail.com" class="text-gray-400 hover:text-white transition-colors block mt-1">alforqueRhazel@gmail.com</a>
            </div>
            
            <div>
              <h3 class="text-lg font-medium mb-3">Social</h3>
              <div class="flex space-x-4">
                <a href="https://www.instagram.com/ru.uss/" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/rhazel-alforoque-000643295/" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/rhazel.alforque" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2024 Rhazel Alforoque. All rights reserved.
          </p>
          <a 
            href="#" 
            class="group mb-10 flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
            onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
          >
            <span class="text-sm">Back to Top</span>
            <span class="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition-colors">
              <svg 
                class="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <path d="M12 19V5M5 12L12 5L19 12" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
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

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style> 