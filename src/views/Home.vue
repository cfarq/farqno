<template>
  <div class="home">
    <div class="fukol">
      <div class="fukol__grid h-centre">
        <div class="main-content">
          <small class="main-content__joke" @click="updateJoke">
            <div class="main-content__joke__content">
              {{ joke }}
              <img v-if="jokeCount < 7" class="flag-img" src="../../public/img/norway-flag.png" alt="">
              <img v-else class="flag-img" src="../../public/img/union-jack.png" alt="">
            </div>
          </small>
          <h1 class="main-content__name">Charles Farquharson</h1>
          <h2 class="main-content__job-title">Front-end Developer</h2>
          <img class="main-content__logo" src="../assets/logo.svg" alt="Charles Farquharson">
          <navbar></navbar>
        </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      joke: 'Farq NO',
      jokeCount: 0
    }
  },
  methods: {
    updateJoke () {
      this.jokeCount++
      if (this.jokeCount > 6) {
        this.joke = 'Farq YES!!'
      }
    }
  }
}
</script>
