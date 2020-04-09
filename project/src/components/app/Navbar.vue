<template>
  <nav class="navbar">
    <div class="user-name">
      <a class="black-text" href="#">{{name}} {{family}}</a>
    </div>
    <div class="navbar-menu">
      <div class="menu-item">
        <router-link to="/" class="black-text">
          Profile
          <!-- Профиль -->
        </router-link>
      </div>
      <div class="menu-item">
        <a href="#" class="black-text" @click.prevent="logout">
          <!-- <i class="material-icons">assignment_return</i> -->
          Выйти
        </a>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    family() {
      return this.$store.getters.info.family;
    }
  },
  mounted() {}
};
</script>
