<template>
  <div class="lab-item">
    <img class="lab-item__img" :src="item.image" alt="" />
    <div class="lab-item__info">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LabItem',
    data() {
      return {

      }
    },
    props: {
      item: {
        type: Object
      },
      index: {
        type: Number
      }
    },
    methods: {

    }
  }
</script>