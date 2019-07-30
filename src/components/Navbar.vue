<template>
  <div v-show="navLength > 1" class="nav" :class="{ 'full-width': fullWidth }">
    <div v-if="fullWidth" class="full-width-logo">
      <img  class="nav__logo" src="../assets/logo.svg" alt="Farq NO">
    </div>
    <div class="nav-items">
      <router-link
              v-for="(link, index) in links"
              :to="link.path"
      >
        {{ link.name }}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        links: []
      }
    },
    props: {
      fullWidth: {
        default: false,
        type: Boolean
      }
    },
    mounted() {
      this.getRoutes()
    },
    methods: {
      getRoutes () {
        this.links = []

        this.$router.options.routes.forEach((route) => {
          this.links.push(route)
        })
      }
    },
    computed: {
      navLength () {
        return this.$router.options.routes.length
      }
    }
  }
</script>