<template>
  <div
    class="flex flex-col md:flex-row overflow-hidden rounded-xl drop-shadows"
  >
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "category", "description", "image", "link", "madeWith"],
  computed: {
    imageLink: function () {
      return "../assets/" + this.image;
    },
  },
};
</script>