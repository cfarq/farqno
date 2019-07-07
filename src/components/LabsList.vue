<template>
  <div class="fukol-margin">
    <div class="fukol-margin__gird">
      <lab-item
              v-for="(item, index) in list"
              :item="item"
              :index="index"
              :key="index"
      ></lab-item>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'LabsList',
    data() {
      return {
        list: []
      }
    },
    props: {

    },
    mounted() {
      this.getLabs()
    },
    methods: {
      getLabs () {
        this.$router.options.routes[1].children.forEach((route) => {
          this.list.push(route)
        })
      }
    }
  }
</script>