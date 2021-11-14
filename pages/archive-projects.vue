<template>
  <div class="pt-10 divide divide-gray-300">
    <!-- Featured project -->
    <nuxt-link to="/project-1">
      <div ref="featuredProject" class="mt-10">
        <p class="font-color-1 opacity-80 font-bold text-lg">
          🌟 Featured project
        </p>
        <p class="font-color-1 font-bold text-2xl hover:underline">
          Building a knowledge-sharing platform for 60.000 students
        </p>
        <!-- <div class="flex flex-row space-x-3 my-2">
          <p
            class="border-color-1 font-color-1 font-bold px-3 py-1 rounded-full"
          >
            Webdesign
          </p>
          <p
            class="border-color-1 font-color-1 font-bold px-3 py-1 rounded-full"
          >
            Entrepreneurship
          </p>
          <p
            class="border-color-1 font-color-1 font-bold px-3 py-1 rounded-full"
          >
            Non-profit
          </p>
        </div> -->
        <img
          class="
            w-2/3
            py-4
            mx-auto
            png-drop-shadow
            transform
            ease-in
            duration-75
            hover:scale-105
          "
          src="/assets/studium.png"
          alt="project-snapshot"
        />
        <p class="text-lg text-gray-900 pt-2">
          Read how I took initiative to build a much needed knowledge-sharing
          platform for all the students at my university.
        </p>
      </div>
    </nuxt-link>
    <hr ref="line1" class="my-10" />
    <!-- Current focus -->
    <div ref="currentFocus">
      <p class="font-color-1 opacity-80 font-bold text-lg">🎯 Current focus</p>
      <p class="font-color-1 font-bold text-2xl hover:underline">
        Working on my own website
      </p>
      <!-- <div class="flex flex-row space-x-3 my-2">
        <p class="border-color-1 font-color-1 font-bold px-3 py-1 rounded-full">
          Webdesign
        </p>
      </div> -->
      <p class="text-lg text-gray-900 pt-2">
        I enjoy building beautiful things. Read about my long journey into web
        development.
      </p>
    </div>
    <!-- Past Projects -->
    <!-- <hr ref="line2" class="my-10" />
    <div ref="pastProjects" class="pb-10">
      <p class="font-color-1 opacity-80 font-bold text-lg">Past projects</p>
      <p class="font-color-1 font-bold text-3xl">
        MSc Thesis: Multilingual Coreference Resolution
      </p>
      <div class="flex flex-row space-x-3 my-2">
        <p class="bg-gray-300 font-color-1 font-bold px-3 py-1 rounded-full">
          Machine Learning
        </p>
        <p class="bg-gray-300 font-color-1 font-bold px-3 py-1 rounded-full">
          NLP
        </p>
      </div>
      <p class="text-lg text-gray-900 pt-2 md:text-xl">Placeholder text.</p>
    </div> -->
    <!-- Past Projects list -->
    <hr ref="line2" class="my-10" />
    <div ref="pastProjects" class="pb-10">
      <p class="font-color-1 opacity-80 font-bold text-lg pb-2">
        <span class="text-green-700 text-xl">✔</span> Past projects
      </p>
      <ul class="list-disc font-color-1 font-bold text-xl space-y-3 pl-6">
        <li class="hover:underline">
          MSc Thesis: Multilingual Coreference Resolution
        </li>
        <li class="hover:underline">
          Sign Language Translation: Sign Language Recognition and Translation
          using Frozen Pretrained Transformers
        </li>
        <li class="hover:underline">
          Image Processing: Traffic Sign Recognition using Deep Learning
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

let timeline = gsap.timeline({
  paused: true,
});

export default {
  mounted() {
    const { featuredProject, currentFocus, pastProjects, line1, line2 } =
      this.$refs;

    timeline.from(
      featuredProject,
      1,
      { y: -50, opacity: 0.0, ease: "power2.out" },
      "+=0.5"
    );
    timeline.from(
      line1,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.25"
    );
    timeline.from(
      currentFocus,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.25"
    );
    timeline.from(
      line2,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.25"
    );
    timeline.from(
      pastProjects,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.25"
    );
    // timeline.from(nameContact, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
    // timeline.from(emailContact, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
    // timeline.from(subjectContact, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
    // timeline.from(messageContact, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
    // timeline.from(sendButton, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
    // timeline.from(callEmoji, 1, { x: 50, y:5, rotation: 90, opacity: 0.0, ease:"power2.out"},'-=0.5')
    // timeline.from(mailEmoji, 1, { x: -50, y:-5, rotation: -90, opacity: 0.0, ease:"power2.out"},'<')
    // timeline.to(callEmoji, 1, { y:-3, x:3, ease:"sine.out", yoyo:true, repeat:-1},)
    // timeline.to(mailEmoji, 1, { y:-3, rotation: 3, ease:"sine.out", yoyo:true, repeat:-1},)

    timeline.play();
  },
};
</script>

<style scoped>
</style>
