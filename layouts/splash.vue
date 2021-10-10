<template>
  <transition name="fade">
  <div v-if="show" class="splash" />
  </transition>
</template>

<script>

export default {
    data() {
        return {
            show: true
        }
    },
    mounted() {
        // If the splash screen should be shown.

        if (process.client) {
            setTimeout(() => {this.show = false}, 500)
        }

    }
}
</script>

<style scoped>
.splash {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff7ed;
  z-index: 10000;
}
</style>