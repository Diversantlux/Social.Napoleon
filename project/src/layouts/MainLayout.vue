 <template>
  <div>
    <Loader v-if="loading" />
    <div class="app-main-layout" v-else>
      
      <Navbar @click="isOpen = !isOpen" />

      <Sidebar v-model="isOpen" />
      
      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view />
        </div>
      </main>

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'


export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }

    this.loading = false
  },
  components: {
    Navbar
  }
}
</script>
