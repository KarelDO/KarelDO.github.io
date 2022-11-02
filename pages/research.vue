<template>
  <div class="pt-10">
    <!-- Information banner  -->
    <!-- <div
      ref="topBanner"
      class="
        bg-color-2
        border-4
        rounded-xl
        p-4
        
        drop-shadows
      "
    >
      <p class="font-color-1 opacity-80 font-bold">Research interests</p>
      <p class="font-color-1">
        I am an incoming PhD student at the
        <a href="https://ugentt2k.github.io" class="underline">
          Text-to-Knowledge group</a>. My research interests are mainly situated in the field of Natural Language Processing: coreference resolution, multilingual NLP, domain adaptation and meta-learning applied to NLP.
      </p>
    </div> -->
    <div class="pt-10 flex flex-col space-y-6" ref="research">
      <div>
        <p class="font-color-1 opacity-80 font-bold text-lg">📜 Research</p>
        <p class=""> * denotes equal contribution.</p>
      </div>
      <div>
        <p class="text-gray-500">
          The Stanford AI Lab Blog, 2022
        </p>
        <p class="font-color-1 font-bold text-lg">
          Faithful, interpretable model explanations via causal abstraction
        </p>
        <p class="text-md text-gray-900">
          Atticus Geiger, Zhengxuan Wu, <span class="underline">Karel D'Oosterlinck</span>, Elisa Kreiss, Noah D. Goodman, Thomas Icard, and Christopher Potts.
        </p>
        <div class="flex space-x-2 mt-1">
          <a href="https://ai.stanford.edu/blog/causal-abstraction/" target="_blank">
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/code-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> blogpost </span>
            </div>
          </a>
        </div>
      </div>
 
      <div>
        <p class="text-gray-500">
          Preprint, 2022
        </p>
        <p class="font-color-1 font-bold text-lg">
          Causal Proxy Models for Concept-Based Model Explanations
        </p>
        <p class="text-md text-gray-900">
          Zhengxuan Wu*, <span class="underline">Karel D'Oosterlinck*</span>, Atticus Geiger*, Amir Zur, Christopher Potts.
        </p>
        <div class="flex space-x-2 mt-1">
          <a href="https://github.com/frankaging/Causal-Proxy-Model" target="_blank">
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/code-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> code</span>
            </div>
          </a>
          <a
            href="https://arxiv.org/abs/2209.14279"
            target="_blank"
          >
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/pdf-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> pdf</span>
            </div>
          </a>
          <a
            href="https://twitter.com/KarelDoostrlnck/status/1575867164581502977"
            target="_blank"
          >
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/twitter.svg" class="w-6 inline-block" /> -->
              <span class="col-span-2"> thread</span>
            </div>
          </a>
        </div>
      </div>

      <div class="">
        <p class="text-gray-500">
          NeurIPS, 2022
        </p>
        <p class="font-color-1 font-bold text-lg">
          CEBaB: Estimating the Causal Effects of Real-World Concepts on NLP Model Behavior
        </p>
        <p class="text-gray-900">
          Eldar David Abraham*, <span class="underline">Karel D'Oosterlinck*</span>, Amir Feder*, Yair Ori Gat*, Atticus Geiger*,  Christopher Potts*, Roi Reichart*, Zhengxuan Wu*.
        </p>
        <div class="flex space-x-2 mt-1">
          <a href="https://github.com/CEBaBing/CEBaB" target="_blank">
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/code-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> code</span>
            </div>
          </a>
          <a
            href="https://arxiv.org/abs/2205.14140"
            target="_blank"
          >
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/pdf-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> pdf</span>
            </div>
          </a>
                    <a
            href="https://cebabing.github.io/CEBaB/"
            target="_blank"
          >
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <span class="col-span-2"> website</span>
            </div>
          </a>
          <a
            href="https://youtu.be/xa5ttoN-Zic"
            target="_blank"
          >
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/pdf-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> video </span>
            </div>
          </a>
        </div>
      </div>

      <div class=" ">
        <p class="text-gray-500">
          1st International Workshop on Automatic Translation for Signed and
          Spoken Languages (AT4SSL), 2021
        </p>
        <p class="font-color-1 font-bold text-lg">
          Frozen Pretrained Transformers for Neural Sign Language Translation
        </p>
        <p class="text-gray-900">
          Mathieu De Coster, <span class="underline">Karel D'Oosterlinck</span>,
          Marija Pizurica, Paloma Rabaey, Severine Verlinden, Mieke Van
          Herreweghe, Joni Dambre
        </p>
        <div class="flex space-x-2 mt-1">
          <a href="https://github.com/m-decoster/fpt4slt" target="_blank">
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/code-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> code</span>
            </div>
          </a>
          <a
            href="https://aclanthology.org/2021.mtsummit-at4ssl.10.pdf"
            target="_blank"
          >
            <div
              class="
                bg-color-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/pdf-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> pdf</span>
            </div>
          </a>
        </div>
      </div>

      <div class=" ">
        <p class="text-gray-500">MSc Thesis, 2021</p>
        <p class="font-color-1 font-bold text-lg">
          Design and analysis of domain adaptation systems for joint
          multilingual coreference resolution
        </p>
        <p class="text-gray-500">
          Awarded the 2021 TomTom Prize for Best Engineering Thesis
        </p>
        <p class="text-gray-900">
          <span class="underline">Karel D'Oosterlinck</span>, Semere Kiros
          Bitew, Johannes Deleu, Thomas Demeester, Chris Develder
        </p>
        <div class="flex space-x-2 mt-1">
          <a
            href="/assets/Thesis_Karel_DOosterlinck.pdf"
            download="Thesis_Karel_DOosterlinck.pdf"
          >
            <div
              class="
                bg-color-2
                border-2
                rounded-lg
                px-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <!-- <img src="/assets/pdf-icon.png" class="w-6 inline-block" /> -->
              <span class="col-span-2"> pdf</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsap } from "gsap";

// let timeline = gsap.timeline({
//   paused: true,
// });

export default {
  mounted() {
    // const { topBanner, research } = this.$refs;

    // timeline.from(
    //   topBanner,
    //   1,
    //   { y: -50, opacity: 0.0, ease: "power2.out" },
    //   "+=0.25"
    // );
    // timeline.from(
    //   research,
    //   1,
    //   { x: -50, opacity: 0.0, ease: "power2.out" },
    //   "<0.25"
    // );

    // timeline.play();
  },
};
</script>