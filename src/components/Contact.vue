<template>
  <div class="min-h-screen bg-black text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 md:mt-10">
        Contact me and Let's build<br class="hidden sm:block" />
        something incredible
      </h2>

      <!-- Social Links -->
      <div class="flex flex-wrap gap-4 sm:gap-8 mb-10 sm:mb-16">
        <a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Instagram</a>
        <a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        <a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Facebook</a>
        <a href="#" class="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Dribbble</a>
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <!-- Left Column - Contact Info -->
        <div class="space-y-8 sm:space-y-12">
          <div>
            <h3 class="text-sm sm:text-base text-gray-400 mb-2">Address</h3>
            <p class="text-base sm:text-lg text-gray-300">
              Alumnos Basak San Nicolas<br />
              Cebu City, 6000
            </p>
          </div>

          <div>
            <h3 class="text-sm sm:text-base text-gray-400 mb-2">Email</h3>
            <p class="text-base sm:text-lg text-gray-300">russavenido@gmail.com</p>
            <p class="text-base sm:text-lg text-gray-300">alforqueRhazel@gmail.com</p>
          </div>

          <div>
            <h3 class="text-sm sm:text-base text-gray-400 mb-2">Phone</h3>
            <p class="text-base sm:text-lg text-gray-300">+63 968 702 3329</p>
          </div>
        </div>

        <!-- Right Column - Contact Form -->
        <div class="space-y-6 sm:space-y-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <input 
                type="text" 
                v-model="form.firstName"
                placeholder="First Name*"
                class="w-full bg-transparent border-b border-gray-800 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-gray-400 transition-colors outline-none"
              >
            </div>
            <div>
              <input 
                type="text" 
                v-model="form.lastName"
                placeholder="Last Name"
                class="w-full bg-transparent border-b border-gray-800 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-gray-400 transition-colors outline-none"
              >
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <input 
                type="email" 
                v-model="form.email"
                placeholder="Email*"
                class="w-full bg-transparent border-b border-gray-800 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-gray-400 transition-colors outline-none"
              >
            </div>
            <div>
              <input 
                type="tel" 
                v-model="form.phone"
                placeholder="Phone"
                class="w-full bg-transparent border-b border-gray-800 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-gray-400 transition-colors outline-none"
              >
            </div>
          </div>

          <div>
            <select 
              v-model="form.service"
              class="w-full bg-transparent border-b border-gray-800 py-2.5 text-sm sm:text-base text-gray-500 focus:border-gray-400 transition-colors outline-none"
            >
              <option value="" disabled selected>What services are interested in?</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="design">UI/UX Design</option>
            </select>
          </div>

          <div>
            <input 
              type="text" 
              v-model="form.budget"
              placeholder="Do you have a budget in mind?"
              class="w-full bg-transparent border-b border-gray-800 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-gray-400 transition-colors outline-none"
            >
          </div>

          <div>
            <textarea 
              v-model="form.message"
              placeholder="Write a Message*"
              rows="4"
              class="w-full bg-transparent border-b border-gray-800 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-gray-400 transition-colors outline-none resize-none"
            ></textarea>
          </div>

          <button 
            @click="handleSubmit"
            class="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-gray-800 hover:border-gray-600 transition-all duration-300 text-sm sm:text-base hover:bg-gray-900 hover:-translate-y-0.5"
          >
            Submit Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
      // Reset form after submission
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      }
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

/* Form styles */
select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1em;
}

select option {
  background-color: #000;
  color: white;
  padding: 0.5rem;
}

::placeholder {
  color: #6B7280;
  opacity: 1;
}

/* Input focus effects */
input:focus,
select:focus,
textarea:focus {
  border-color: #6B7280;
  outline: none;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  select {
    background-position: right 0.25rem center;
  }
}

/* Smooth transitions */
input,
select,
textarea,
button {
  transition: all 0.3s ease;
}

/* Button hover effect */
@media (min-width: 768px) {
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

@media (max-width: 480px) {
  br {
    display: none;
  }
}
</style> 