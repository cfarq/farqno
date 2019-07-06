<template>
  <div class="nav" :class="{ 'full-width': fullWidth }">
    <router-link
            v-for="(link, index) in links"
            :to="link.path"
    >
      {{ link.name }}</router-link>
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
    }
  }
</script>