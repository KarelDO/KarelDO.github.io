<template>
  <div>
    <div class="flex flex-col md:flex-row justify-between items-baseline">
      <p class="font-color-1 font-bold text-xl">{{ venue }}</p>
      <p class="text-gray-500">{{ date }}</p>
    </div>
    <p class="text-lg text-blue-500">
      <a :href="link">
        {{ title }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: ["venue", "date", "title", "link"],
};
</script>