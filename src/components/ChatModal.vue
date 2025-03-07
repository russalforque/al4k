<template>
  <!-- Full-screen modal on mobile, centered on desktop -->
  <div class="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
    <div class="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm" @click="$emit('close')"></div>
    
    <!-- Modal Container -->
    <div class="relative bg-black border border-gray-800 w-full h-2/3 sm:h-[600px] sm:max-w-lg sm:rounded-2xl flex flex-col fade-in">
      <!-- Header -->
      <div class="p-3 sm:p-4 border-b border-gray-800 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="relative">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-black"></div>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-semibold text-white">Russ AI Assistant</h3>
            <p class="text-xs text-gray-400">{{ isTyping ? 'Typing...' : 'Online' }}</p>
          </div>
        </div>
        <!-- Close button - Hidden on mobile, shown as back arrow -->
        <button @click="$emit('close')" class="text-gray-400 hover:text-white transition-colors p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Quick Actions -->
      <div class="p-2 sm:p-4 border-b border-gray-800">
        <div class="flex space-x-2 overflow-x-auto scrollbar-hidden pb-2">
          <button 
            v-for="category in quickActions" 
            :key="category.label"
            @click="askQuestion(category.question)"
            class="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-full border border-gray-800 hover:border-white transition-all whitespace-nowrap text-xs sm:text-sm flex-shrink-0"
          >
            {{ category.label }}
          </button>
        </div>
      </div>

      <!-- Chat Messages -->
      <div class="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4" ref="messageContainer">
        <div v-for="(message, index) in messages" 
             :key="index" 
             :class="['flex', message.isUser ? 'justify-end' : 'justify-start']">
          <div class="flex flex-col" :class="message.isUser ? 'items-end' : 'items-start'">
            <!-- Timestamp -->
            <span class="text-[10px] sm:text-xs text-gray-500 mb-1">{{ message.timestamp }}</span>
            
            <!-- Message Content -->
            <div :class="[
              'max-w-[85%] sm:max-w-[80%] rounded-2xl p-2.5 sm:p-3 slide-up text-sm sm:text-base',
              message.isUser ? 'bg-white text-black' : 'bg-gray-900 text-white border border-gray-800'
            ]"
            :style="{ animationDelay: `${index * 0.1}s` }">
              <div v-if="message.type === 'markdown'" 
                   class="prose prose-sm sm:prose prose-invert" 
                   v-html="markdownToHtml(message.text)">
              </div>
              <div v-else-if="message.type === 'code'" 
                   class="bg-gray-800 p-2 sm:p-3 rounded-lg text-xs sm:text-sm overflow-x-auto">
                <pre><code>{{ message.text }}</code></pre>
              </div>
              <div v-else>{{ message.text }}</div>
            </div>
          </div>
        </div>
        
        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-gray-900 rounded-2xl p-2 sm:p-3 border border-gray-800">
            <div class="flex space-x-1 sm:space-x-2">
              <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
              <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-2 sm:p-4 border-t border-gray-800">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input 
            v-model="newMessage" 
            type="text" 
            placeholder="Ask me anything..."
            class="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gray-800 rounded-full focus:outline-none focus:border-white text-white placeholder-gray-500 transition-all text-sm sm:text-base"
            :disabled="isTyping"
          >
          <button 
            type="submit"
            :disabled="isTyping || !newMessage.trim()"
            :class="[
              'group px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 flex items-center text-sm sm:text-base',
              isTyping || !newMessage.trim() 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-gray-100'
            ]"
          >
            <span class="hidden sm:inline">Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default {
  name: 'ChatModal',
  
  data() {
    return {
      messages: [
        {
          text: "👋 Hi! I'm the Russ AI assistant. I can help you learn more about Russ's work, skills, and experience. Try the quick actions below or ask me anything!",
          isUser: false,
          timestamp: this.getCurrentTime(),
          type: 'text'
        }
      ],
      newMessage: '',
      isTyping: false,
      quickActions: [
        { label: '💼 View Projects', question: 'What projects have you worked on?' },
        { label: '🎯 Skills', question: 'What are your main skills?' },
        { label: '📈 Experience', question: 'Tell me about your experience' },
        { label: '📱 Contact', question: 'How can I contact you?' }
      ]
    }
  },

  methods: {
    getCurrentTime() {
      return new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true 
      })
    },

    markdownToHtml(text) {
      return DOMPurify.sanitize(marked(text))
    },

    async sendMessage() {
      if (!this.newMessage.trim() || this.isTyping) return

      // Add user message
      this.messages.push({
        text: this.newMessage,
        isUser: true,
        timestamp: this.getCurrentTime(),
        type: 'text'
      })

      const userQuestion = this.newMessage
      this.newMessage = ''
      
      // Show typing indicator
      this.isTyping = true
      await this.simulateTyping()

      // Add AI response
      const response = this.getAIResponse(userQuestion)
      this.messages.push({
        ...response,
        isUser: false,
        timestamp: this.getCurrentTime()
      })

      this.isTyping = false
      this.scrollToBottom()
    },

    async simulateTyping() {
      const typingTime = Math.random() * 1000 + 1000 // 1-2 seconds
      await new Promise(resolve => setTimeout(resolve, typingTime))
    },

    async askQuestion(question) {
      this.newMessage = question
      await this.sendMessage()
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messageContainer
        container.scrollTop = container.scrollHeight
      })
    },

    getAIResponse(question) {
      const responses = {
        experience: {
          text: `# Professional Experience 🚀

* **UI/UX Design Lead** - 1 year of expertise
* Specialized in creating intuitive user interfaces
* Worked with various clients across different industries

### Key Achievements:
1. Improved client satisfaction rates
2. Delivered 10+ successful projects
3. Developed innovative design solutions`,
          type: 'markdown'
        },
        projects: {
          text: `# Portfolio Highlights ✨

### Recent Projects:
1. **Mobile UI Design**
   - Smartphone interface optimization
   - User-centric approach
   - Modern design patterns

2. **Web Applications**
   - Responsive layouts
   - Interactive components
   - Performance optimization

3. **Brand Identity**
   - Logo design
   - Visual guidelines
   - Brand consistency`,
          type: 'markdown'
        },
        skills: {
          text: `# Technical Skills 💻

\`\`\`
Frontend Development:
- HTML5, CSS3, JavaScript
- Vue.js, React
- Responsive Design

Design:
- UI/UX Design
- Figma, Adobe XD
- Prototyping

Other:
- Git Version Control
- Agile Methodology
- Team Collaboration
\`\`\``,
          type: 'code'
        },
        contact: {
          text: "You can reach me through:\n\n- Twitter: @russ_al4k\n- Email: russavenido@gmail.com\n- LinkedIn: https://www.linkedin.com/in/rhazel-alforoque-000643295/\n\nI'm always open to discussing new projects and opportunities! 🤝",
          type: 'markdown'
        },
        default: {
          text: "I'd be happy to tell you more about my work and experience. Could you please be more specific with your question?",
          type: 'text'
        }
      }

      question = question.toLowerCase()
      if (question.includes('experience')) return responses.experience
      if (question.includes('project')) return responses.projects
      if (question.includes('skill')) return responses.skills
      if (question.includes('contact')) return responses.contact
      return responses.default
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

.slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

/* Hide scrollbar but keep functionality */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Custom Scrollbar for message container */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #4B5563 #1F2937;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #1F2937;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 20px;
}

/* Markdown Content Styles */
:deep(.prose) {
  max-width: none;
}

:deep(.prose h1) {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  margin-top: 0;
}

:deep(.prose h3) {
  font-size: 1rem;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
}

:deep(.prose ul), :deep(.prose ol) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
}

:deep(.prose li) {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

:deep(.prose code) {
  font-size: 0.875rem;
  padding: 0.2rem 0.4rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25%);
  }
}

/* Mobile-first responsive adjustments */
@media (max-width: 640px) {
  :deep(.prose) {
    font-size: 0.875rem;
  }
  
  :deep(.prose h1) {
    font-size: 1.125rem;
  }
  
  :deep(.prose h3) {
    font-size: 0.875rem;
  }
}
</style>