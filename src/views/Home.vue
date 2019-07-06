<template>
  <div class="home">
    <div class="fukol">
      <div class="fukol__grid h-centre">
        <div class="main-content">
          <small class="main-content__joke">Farq yes!</small>
          <h1 class="main-content__name">Charles Farquharson</h1>
          <span class="main-content__job-title">Front-end Developer</span>

          <div class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/labs">Labs</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  },
  data() {
    return {

    }
  }
}
</script>
