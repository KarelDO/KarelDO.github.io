<template>
  <div>
    <!-- Above the fold  -->
    <div class="
        pt-10
        mt-12
        flex flex-col
        justify-around
        items-center
        sm:flex-row sm:h-1/3 sm:justify-start
      ">
      <!-- Avatar -->
      <div class="sm:mt-0">
        <div>
          <div ref="avatarImg" class="
              avatar-img
              h-52
              w-52
              sm:h-60 sm:w-60
              rounded-full
            " alt="profile-picture"></div>
        </div>
      </div>

      <!-- Bio  -->
      <div ref="bio" class="text-lg font-color-1 sm:ml-8 mt-8 sm:mt-0">
        <p>
          <span class="font-bold">Hello there!</span> I’m a Ph.D. student in
          <span class="font-bold">NLP</span> at Ghent University. I'm passionate
          about <span class="font-bold">Machine Learning</span> and
          <span class="font-bold">Explainable AI</span>. Currently, I'm a visiting researcher at the <span
            class="font-bold">Stanford NLP Group</span>.
        </p>
        <p class="mt-4 text-gray-500">Contact: karel[dot]doosterlinck[at]ugent[dot]be</p>
        <!-- <p class="mt-4">
          <img src="/assets/location.svg" alt="location-icon" class="opacity-30 inline mb-1" />
          <span class="opacity-80">
            Ghent, Belgium / Stanford, U.S.A.
          </span>
        </p> -->
        <div class="flex mt-5 flex-row justify-around sm:justify-start">
          <nuxt-link to="/research">
            <button class="
                bg-color-1
                w-40
                h-10
                rounded-xl
                text-white text-lg
                focus:outline-none
                transform
                ease-in
                duration-75
                hover:scale-110
              ">
              View research
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div id="about" ref="about" class="flex flex-col text-left ">
      <div ref="update">
        <div ref="topBanner" class="
            border-color-1
            bg-color-2
            border-3
            rounded-xl
            px-6
            py-4
            mt-10
            text-lg
          ">
          <p class="font-color-1 opacity-80 font-bold text-lg">Updates</p>
          <table class="table-auto">
            <tbody>
              <!-- <tr>
                <td class="whitespace-nowrap align-top text-gray-500 pr-4"></td>
                <td></td>
              </tr> -->
              <tr>
                <td class="whitespace-nowrap align-top text-gray-500 pr-4"> Sep. '22</td>
                <td><a href="https://arxiv.org/abs/2209.14279" class="underline">
                    New paper on arXiv!</a>
                  Causal Proxy Models for Concept-Based Model Explanations</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap align-top text-gray-500 pr-4">Sep. '22</td>
                <td>Paper (CEBaB) got accepted to NeurIPS 2022!</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap align-top text-gray-500 pr-4"> July '22</td>
                <td>Gave a talk about CEBaB at the Stanford NLP Group.
                  <a href="/assets/cebab-nlp-lunch-Karel.pdf" download="cebab-nlp-lunch-Karel" class="underline">
                    Slides available here.</a>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap align-top text-gray-500 pr-4"> May '22 </td>
                <td> <a href="https://arxiv.org/abs/2205.14140" class="underline">
                    New paper on arXiv!</a>
                  CEBaB: Estimating the Causal Effects of Real-World Concepts on NLP
                  Model Behavior.</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap align-top text-gray-500 pr-4"> Jan. '22</td>
                <td> I'm currently at the
                  <a class="underline" href="https://nlp.stanford.edu/">
                    Stanford NLP group</a>
                  for one year under guidance of
                  <a href="https://web.stanford.edu/~cgpotts/" class="underline">
                    prof. Christopher Potts</a>.
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap align-top text-gray-500 pr-4">Nov. '21</td>
                <td> Started my Ph.D. at Ghent University.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div ref="text1" class="mt-8">
        <p class="text-lg font-color-1 font-semibold">Short bio</p>
        <p class="text-lg font-color-1">
          Hi! I’m a first-year PhD student passionate about Machine Learning,
          Natural Language Processing and explainable/causal AI. I work at the
          <a class="underline" href="https://ugentt2k.github.io">
            Text to Knowledge</a>
          research group at Ghent University under supervision of
          <a class="underline" href="http://users.atlantis.ugent.be/cdvelder/">
            prof. Chris Develder</a>
          and
          <a class="underline" href="https://tdmeeste.github.io/publications.html">
            prof. Thomas Demeester</a>. I'm currently at the
          <a class="underline" href="https://nlp.stanford.edu/">
            Stanford NLP group</a>
          for one year under guidance of
          <a href="https://web.stanford.edu/~cgpotts/" class="underline">
            prof. Christopher Potts</a>.
        </p>
        <!-- <nuxt-link to="/resume">
          <p
            class="text-left mt-2 font-color-1 opacity-80 text-lg font-bold hover:underline"
          >
            View resume
            <img
              src="/static/assets/left-arrow.png"
              alt="right-arrow"
              class="inline-block transform rotate-180 h-5 w-5"
            />
          </p>
        </nuxt-link> -->
      </div>

      <div ref="text2" class="mt-8">
        <p class="text-lg font-color-1 font-semibold">Research</p>
        <p class="text-lg font-color-1">
          Currently, my research focusses on explainable, causally-motivated AI. Applying ideas from causal inference to
          machine learning, I aim to develop more interpretable and robust models. My overall goal is to build
          techniques that allow for intuitive inspection and editing of model behavior.


          At the Stanford NLP group, I've been working on a causally-motivated benchmark for interpretability
          techniques. Currently, we are using this new resource to guide the development of new state-of-the-art model
          explanation techniques.
          <nuxt-link to="/research" class="underline">
            View my initial work</nuxt-link>.
        </p>
        <!-- <nuxt-link to="/research">
          <p
            class="text-left mt-2 font-color-1 opacity-80 text-lg font-bold hover:underline"
          >
            View research
            <img
              src="/static/assets/left-arrow.png"
              alt="right-arrow"
              class="inline-block transform rotate-180 h-5 w-5"
            />
          </p>
        </nuxt-link> -->
      </div>

      <!-- <div ref="text3" class="mt-8">
        <p class="text-lg font-color-1 font-semibold">Projects</p>
        <p class="text-lg font-color-1">
          I'm a hobbyist web-developer (full stack). I enjoy casually working on small projects to learn additional skills or just
          because I think they are fun. You can view some projects
          <nuxt-link class="underline" to="/projects">here</nuxt-link>.
        </p>
      </div> -->

      <!-- <div ref="text3" class="my-4">
        <p class="text-lg font-color-1 font-semibold">Projects</p>
        <p class="text-lg font-color-1">
          I enjoy working on small projects to learn additional skills or just
          because I think they are fun. In the near future, I will invest some time in
          polishing them and will feature them here.<br />
          <br />

          For now, discover how some friends and I designed and coded a
          <a class="underline" href="/project-1">
            knowledge-sharing application</a
          >
          for our university's 40.000+ students or read about some of my
          university projects.
        </p>
        <nuxt-link to="/projects">
          <p
            class="text-right font-color-1 opacity-80 font-bold hover:underline"
          >
            View projects
            <img
              src="/static/assets/left-arrow.png"
              alt="right-arrow"
              class="inline-block transform rotate-180 h-5 w-5"
            />
          </p>
        </nuxt-link>
      </div> -->

      <div ref="text4" class="mt-8">
        <p class="text-lg font-color-1 font-semibold">Hobbies</p>
        <p class="text-lg font-color-1">
          Some other hobbies include cooking, camping and occasionally skiing. Some recent books I enjoyed include
          <span class="italic">The Worldly Philosophers</span>,
          <span class="italic">Factfulness</span>,
          <span class="italic">21 lessons for the 21st century</span>,
          <span class="italic">Sapiens</span>, and
          <span class="italic">Educated</span>
          Previously, I spent a lot of my time practicing music. I play
          classical guitar and I sung in a choir, which gave me the opportunity
          to visit Mexico, Japan, Bulgaria, and Rome.
        </p>
      </div>
      <div ref="text5" class="mt-8">
        <p class="text-lg font-color-1 font-semibold">Contact me!</p>
        <p class="text-lg font-color-1">
          Feel free to reach out on
          <a href="https://twitter.com/KarelDoostrlnck" class="underline">Twitter</a>
          or
          <a href="https://www.linkedin.com/in/karel-doosterlinck/" class="underline">LinkedIn</a>. My work email is
          <span class="italic">karel[dot]doosterlinck[at]ugent[dot]be</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { elementScrollIntoView } from "seamless-scroll-polyfill";

let timeline = gsap.timeline({
  paused: true,
});

if (process.client) {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export default {
  methods: {
    scrollToAbout() {
      const el = this.$refs.about;
      if (el) {
        elementScrollIntoView(el, { behavior: "smooth" });
      }
    },
  },
  mounted() {
    const {
      avatarImg,
      wavingHand,
      bio,
      buttons,
      featured,
      update,
      text1,
      text2,
      text3,
      text4,
      text5,
    } = this.$refs;

    timeline.from(
      avatarImg,
      1,
      { x: -50, y: -50, rotation: -10, opacity: 0.0, ease: "power2.out" },
      "+=0.25"
    );
    timeline.from(
      wavingHand,
      1,
      { x: 50, y: 5, rotation: 90, opacity: 0.0, ease: "power2.out" },
      "-=1.0"
    );
    timeline.to(wavingHand, 1, {
      y: -3,
      rotation: 3,
      ease: "slow(0.7, 0.7, false)",
      yoyo: true,
      repeat: -1,
    });
    timeline.from(bio, 1, { y: 50, opacity: 0.0, ease: "power2.out" }, "-=1.5");
    timeline.from(
      buttons,
      1,
      { y: 50, opacity: 0.0, ease: "power2.out" },
      "-=0.5"
    );
    // timeline.from(
    //   featured,
    //   1,
    //   { x: -50, opacity: 0.0, ease: "power2.out" },
    //   "-=1.0"
    // );
    timeline.from(
      update,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "-=1."
    );
    timeline.from(
      text1,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      // "-=1.5"
      "<0.25"
    );
    timeline.from(
      text2,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.25"
    );
    timeline.from(
      text3,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.25"
    );
    timeline.from(
      text4,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.25"
    );
    timeline.from(
      text5,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.25"
    );

    timeline.play();
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
/* Hack to be able to render inner shadow */
.avatar-img {
  /* background-image: url("/assets/karel_cropped_square-min.jpg"); */
  /* background-image: url("/assets/karel_background-min.jpg"); */
  background-image: url("/assets/karel_background_2-min.png");
  background-size: contain;
  /* border: 8px solid  #FFF7ED; */
  /* border: 4px solid  #6B5B7A; */
}

/* Hack to render proper png shadow */
.png-drop-shadow {
  -webkit-filter: drop-shadow(6px 6px 16px rgba(34, 34, 34, 0.5));
  filter: drop-shadow(6px 6px 16px rgba(34, 34, 34, 0.5));
}

.custom-full-height {
  height: 100vh;
  /* height: calc(var(--vh, 1vh) * 100); */
}
</style>

