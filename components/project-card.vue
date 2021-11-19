<template>
  <div class="flex flex-col md:flex-row overflow-hidden rounded-xl box-shadow">
    <div class="h-60 md:w-1/2">
      <img class="object-cover object-center h-full w-full" :src="imageLink" />
    </div>
    <div
      class="
        h-52
        p-4
        md:h-60 md:w-1/2
        bg-yellow-100
        flex flex-col
        justify-between
      "
    >
      <div>
        <p class="font-color-1 font-bold text-xl">{{ title }}</p>
        <p class="text-gray-500">{{ category }}</p>
        <p class="mt-2 font-color-1">
          {{ description }}
        </p>
      </div>
      <div>
        <p class="text-gray-500">{{ madeWith }}</p>
        <a class="underline text-gray-500" :href="link" target="_blank"
          >Project link</a
        >
        <a
          v-if="codeLink"
          class="underline text-gray-500 ml-1"
          :href="codeLink"
          target="_blank"
          >Code link</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "category",
    "description",
    "image",
    "link",
    "codeLink",
    "madeWith",
  ],
  computed: {
    imageLink: function () {
      return "../assets/" + this.image;
    },
  },
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
}
</style>