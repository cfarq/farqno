<template>
  <div class="lab-item">
    <div v-show="item.tags.wip" class="lab-item__wip-tag"><span class="lab-item__wip-tag__label">WIP</span></div>
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