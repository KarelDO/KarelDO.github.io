<template>
  <div class="pt-10">
    <!-- Information banner  -->
    <!-- <div
      ref="topBanner"
      class="
        border-color-1
        bg-color-2
        border-4
        rounded-xl
        p-4
        mt-10
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
    <div class="pt-10" ref="research">
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">📜 Research</p>

      <div>
        <p class="font-color-1 font-bold text-2xl">
          CEBaB: Estimating the Causal Effects of Real-World Concepts on NLP Model Behavior
        </p>
        <p class="text-gray-500">
          NeurIPS, 2022
        </p>
        <p class="text-lg pt-2 text-gray-900">
          Abraham, Eldar David and <span class="underline">D'Oosterlinck, Karel</span> and Feder, Amir and Gat, Yair Ori and Geiger, Atticus and Potts, Christopher and Reichart, Roi and Wu, Zhengxuan. All authors equal contribution.
        </p>
        <div class="flex space-x-3 mt-2">
          <a href="https://github.com/CEBaBing/CEBaB" target="_blank">
            <div
              class="
                border-color-1
                bg-color-2
                border-4
                rounded-lg
                p-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <img src="/assets/code-icon.png" class="w-6 inline-block" />
              <span class="col-span-2"> code</span>
            </div>
          </a>
          <a
            href="https://arxiv.org/abs/2205.14140"
            target="_blank"
          >
            <div
              class="
                border-color-1
                bg-color-2
                border-4
                rounded-lg
                p-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <img src="/assets/pdf-icon.png" class="w-6 inline-block" />
              <span class="col-span-2"> pdf</span>
            </div>
          </a>
                    <a
            href="https://cebabing.github.io/CEBaB/"
            target="_blank"
          >
            <div
              class="
                border-color-1
                bg-color-2
                border-4
                rounded-lg
                p-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <span class="col-span-2"> website</span>
            </div>
          </a>
        </div>
      </div>

      <div>
        <p class="font-color-1 font-bold text-2xl mt-10">
          Frozen Pretrained Transformers for Neural Sign Language Translation
        </p>
        <p class="text-gray-500">
          1st International Workshop on Automatic Translation for Signed and
          Spoken Languages (AT4SSL), 2021
        </p>
        <p class="text-lg pt-2 text-gray-900">
          Mathieu De Coster, <span class="underline">Karel D'Oosterlinck</span>,
          Marija Pizurica, Paloma Rabaey, Severine Verlinden, Mieke Van
          Herreweghe, Joni Dambre
        </p>
        <div class="flex space-x-3 mt-2">
          <a href="https://github.com/m-decoster/fpt4slt" target="_blank">
            <div
              class="
                border-color-1
                bg-color-2
                border-4
                rounded-lg
                p-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <img src="/assets/code-icon.png" class="w-6 inline-block" />
              <span class="col-span-2"> code</span>
            </div>
          </a>
          <a
            href="https://aclanthology.org/2021.mtsummit-at4ssl.10.pdf"
            target="_blank"
          >
            <div
              class="
                border-color-1
                bg-color-2
                border-4
                rounded-lg
                p-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <img src="/assets/pdf-icon.png" class="w-6 inline-block" />
              <span class="col-span-2"> pdf</span>
            </div>
          </a>
        </div>
      </div>

      <div>
        <p class="font-color-1 font-bold text-2xl mt-10">
          Design and analysis of domain adaptation systems for joint
          multilingual coreference resolution
        </p>
        <p class="text-gray-500">MSc Thesis, 2021</p>
        <p class="text-gray-500">
          Awarded the 2021 TomTom Prize for Best Engineering Thesis
        </p>
        <p class="text-lg pt-2 text-gray-900">
          <span class="underline">Karel D'Oosterlinck</span>, Semere Kiros
          Bitew, Johannes Deleu, Thomas Demeester, Chris Develder
        </p>
        <div class="flex space-x-3 mt-2">
          <a
            href="/assets/Thesis_Karel_DOosterlinck.pdf"
            download="Thesis_Karel_DOosterlinck.pdf"
          >
            <div
              class="
                border-color-1
                bg-color-2
                border-4
                rounded-lg
                p-2
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              <img src="/assets/pdf-icon.png" class="w-6 inline-block" />
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