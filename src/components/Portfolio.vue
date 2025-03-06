<template>
  <section id="portfolio" class="py-20 relative overflow-hidden bg-black text-white">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-full blur-3xl opacity-30"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-lg font-medium text-blue-500 
                  transform hover:scale-105 transition-all duration-300 inline-block" 
           data-aos="fade-up">
          My Projects
        </p>
        <h2 class="text-4xl md:text-7xl font-bold mt-4 leading-tight" data-aos="fade-up">
          Featured Work
        </h2>
        <p class="text-gray-400 mt-4 text-lg" data-aos="fade-up">
          Showcasing some of my best work and projects
        </p>
      </div>

      <!-- Project Filter -->
      <div class="flex justify-center space-x-4 mb-12" data-aos="fade-up">
        <button v-for="category in categories" 
                :key="category"
                @click="currentCategory = category"
                class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
                :class="currentCategory === category ? 
                        'bg-blue-600 text-white shadow-lg transform scale-105' : 
                        'bg-gray-800 text-gray-300 hover:bg-gray-700'">
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <template v-for="(project, index) in filteredProjects" :key="index">
          <div class="group relative" 
               :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'"
               :data-aos-delay="index * 100">
            <!-- Card Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl 
                        transform group-hover:scale-105 transition-all duration-500 blur-xl opacity-0 
                        group-hover:opacity-70"></div>
            
            <!-- Project Card -->
            <div class="bg-gray-900 rounded-3xl shadow-lg overflow-hidden group-hover:shadow-2xl 
                        transform group-hover:-translate-y-2 transition-all duration-500 relative
                        border border-gray-800">
              <!-- Project Image/Video Container -->
              <div class="relative overflow-hidden h-64">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 
                            group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <template v-if="project.type === 'video'">
                  <video autoplay loop muted playsinline class="w-full h-full object-cover transform 
                                                               group-hover:scale-110 transition-transform duration-500">
                    <source :src="project.media" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </template>
                <template v-else>
                  <img :src="project.media" 
                       :alt="project.title"
                       class="w-full h-full object-cover transform group-hover:scale-110 
                              transition-transform duration-500">
                </template>
              </div>

              <div class="p-8">
                <!-- Project Category Badge -->
                <span class="inline-block px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm 
                            font-medium mb-4">
                  {{ project.category }}
                </span>

                <h3 class="text-2xl font-bold mb-4 group-hover:text-transparent 
                           group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                           group-hover:from-blue-400 group-hover:to-purple-400 
                           transition-all duration-300">
                  {{ project.title }}
                </h3>

                <p class="text-gray-400 mb-6 leading-relaxed">
                  {{ project.description }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="(tech, techIndex) in project.techStack" 
                        :key="techIndex"
                        class="px-2 py-1 bg-gray-800 rounded-full text-xs font-medium 
                               text-gray-300 hover:bg-blue-600 hover:text-white 
                               transition-all duration-300">
                    {{ tech }}
                  </span>
                </div>

                <!-- Project Link -->
                <a :href="project.link" 
                   target="_blank"
                   class="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white 
                          rounded-full transform hover:scale-105 hover:bg-blue-700 
                          transition-all duration-300 active:scale-95">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioSection',
  data() {
    return {
      currentCategory: 'All',
      categories: ['All', 'UI/UX', 'Web Development', 'Full Stack'],
      projects: [
        {
          title: 'Vino Heaven Mobile UI',
          description: 'A premium wine shop mobile app UI design focusing on elegant user experience and seamless wine exploration.',
          media: '/images/portfolioprofile.png',
          category: 'UI/UX',
          type: 'image',
          link: 'https://www.figma.com/proto/CCcEyy6M9UREEkp708GFar/Untitled?node-id=0-1&t=PXrr8Qsf06fQMaQz-1',
          techStack: ['Figma', 'UI Design', 'Prototyping', 'Mobile Design']
        },
        {
          title: 'WEBWORKS',
          description: 'A responsive website showcasing modern web development practices and clean design principles.',
          media: '/images/webworkss.png',
          category: 'Web Development',
          type: 'image',
          link: 'https://russ152002.github.io/latina/ww.html',
          techStack: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Design']
        },
        {
          title: 'OJT Timesheet System',
          description: 'A full-stack application for managing trainee timesheets with comprehensive reporting features.',
          media: '/videos/TimesheetOptimization.mp4',
          category: 'Full Stack',
          type: 'video',
          link: '#',
          techStack: ['ASP.NET', 'C#', 'Bootstrap', 'SQL Server']
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.currentCategory === 'All') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.currentCategory)
    }
  }
}
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:-translate-y-2 {
  transform: translateY(-0.5rem);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style> 