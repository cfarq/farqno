<template>
  <div class="labs">
    <div class="fukol">
      <div class="fukol__grid">
        <navbar full-width></navbar>
        <div class="labs__content">
          <div class="inner-content">
            <h1>Labs</h1>
            <p class="intro">
              Below you'll find a various selection of completed and work in progress. Some are experiments / exercise to
              learn something new, a few might just be freelance work that I've worked on in the past.
            </p>
            <labs-list></labs-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Labs',
    data() {
      return {

      }
    },
    props: {

    }
  }
</script>
