<template>
  <div class="lab-item" @mouseover="showTitle = true" @mouseleave="showTitle = null">
    <div v-show="item.tags.wip" class="lab-item__wip-tag">
      <img class="lab-item__wip-tag__label" src="../assets/wip-tag.svg" alt="WIP" />
    </div>
    <div class="lab-item__img">
      <div class="lab-item__img__title-container" :class="{ 'animate-up': showTitle }">
        <h2 class="lab-item__name">{{ item.name }}</h2>
        <div class="lab-item__info">
          {{ item.description }}
        </div>
      </div>
      <img :src="item.image" :alt="item.name" />
    </div>

  </div>
</template>

<script>
  export default {
    name: 'LabItem',
    data () {
      return {
        showTitle: null
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