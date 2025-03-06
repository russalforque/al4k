<template>
  <div class="min-h-screen bg-black text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4">
    <transition
      name="fade-up"
      appear
      mode="out-in"
      @enter="onEnter"
    >
      <div class="container mx-auto max-w-6xl">
        <!-- Header -->
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 md:mt-10">
          Contact me and Let's build<br class="hidden sm:block" />
          something incredible
        </h2>

        <!-- Social Links -->
        <div class="flex flex-wrap gap-4 sm:gap-8 mb-10 sm:mb-16">
          <a href="https://www.instagram.com/ru.uss/" class="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/in/rhazel-alforoque-000643295/" class="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.facebook.com/rhazel.alforque" class="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Facebook</a>
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
                  required
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
                  required
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
                required
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
                required
              ></textarea>
            </div>

            <div class="flex justify-end">
              <button 
                @click="handleSubmit"
                :disabled="isLoading"
                class="bg-black mb-20 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-gray-800 hover:border-gray-600 transition-all duration-300 text-sm sm:text-base hover:bg-gray-900 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isLoading ? 'Sending...' : 'Submit Now' }}
              </button>
            </div>

            <!-- Success/Error Messages -->
            <transition name="fade">
              <div v-if="message" 
                   :class="[
                     'fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-sm',
                     messageType === 'success' 
                       ? 'bg-green-500 text-white' 
                       : 'bg-red-500 text-white'
                   ]"
                   @click="message = ''"
                   style="cursor: pointer;">
                <div class="flex items-center gap-3">
                  <svg v-if="messageType === 'success'" 
                       class="w-5 h-5" 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24">
                    <path stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="M5 13l4 4L19 7"/>
                  </svg>
                  <svg v-else 
                       class="w-5 h-5" 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24">
                    <path stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <p class="text-sm sm:text-base">{{ message }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

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
      },
      isLoading: false,
      message: '',
      messageType: 'success'
    }
  },
  methods: {
    onEnter(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 50)
    },
    async handleSubmit() {
      // Basic validation
      if (!this.form.firstName || !this.form.email || !this.form.service || !this.form.message) {
        this.message = 'Please fill in all required fields'
        this.messageType = 'error'
        return
      }

      this.isLoading = true
      this.message = ''

      try {
        await emailjs.send(
          'service_iu0ceiv',
          'template_xzoafws',
          {
            from_name: `${this.form.firstName} ${this.form.lastName}`,
            from_email: this.form.email,
            phone: this.form.phone,
            service: this.form.service,
            budget: this.form.budget,
            message: this.form.message
          },
          '4P_HirMwAlUKzb3DP'
        )

        this.message = 'Message sent successfully! I will get back to you soon.'
        this.messageType = 'success'
        
        // Reset form
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        }

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          this.message = ''
        }, 5000)
      } catch (error) {
        console.error('Error sending email:', error)
        this.message = 'Failed to send message. Please try again later.'
        this.messageType = 'error'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
/* Fade up transition */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
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
  position: relative;
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

/* Message transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style> 