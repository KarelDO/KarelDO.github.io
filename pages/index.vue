<template>
  <div>
    <!-- Above the fold  -->
    <div
      class="
        pt-10
        flex flex-col
        h-screen
        justify-around
        items-center
        md:flex-row md:h-1/3 md:justify-start md:mt-12
      "
    >
      <!-- Avatar -->
      <div class="mt-6 md:mt-0">
        <div>
          <div
            ref="avatarImg"
            class="
              avatar-img
              h-52
              w-52
              md:h-60 md:w-60
              rounded-full
              drop-and-inner-shadows
            "
            alt="profile-picture"
          ></div>
          <img
            ref="wavingHand"
            src="/assets/waving-hand-sign_1f44b.png"
            alt="waving-hand"
            class="-mt-20 -ml-5 h-20 w-20 md:h-24 md:w-24 png-drop-shadow"
          />
        </div>
      </div>

      <!-- Bio  -->
      <div
        ref="bio"
        class="text-lg font-color-1 text-center md:text-left md:ml-8 md:text-xl"
      >
        <p>
          <span class="font-bold">Hello there!</span> I’m a PhD student in
          <span class="font-bold">NLP</span> at Ghent University. I'm passionate
          about <span class="font-bold">Machine Learning</span>, and
          <span class="font-bold">Web Development</span>.
        </p>
        <p class="text-center md:text-left mt-5 md:mt-4">
          <img
            src="/assets/location.svg"
            alt="location-icon"
            class="opacity-30 inline mb-1"
          />
          <span class="opacity-80">
            <!-- Ghent, Belgium / San Fransisco, U.S.A. -->
            Ghent, Belgium
          </span>
        </p>
        <div class="hidden mt-5 flex-row md:flex">
          <nuxt-link to="/resume">
            <button
              class="
                bg-color-1
                w-40
                h-10
                rounded-full
                text-white text-lg
                drop-shadows
                focus:outline-none
                transform
                ease-in
                duration-75
                hover:scale-110
                md:mr-5
              "
            >
              View resume
            </button>
          </nuxt-link>
          <nuxt-link to="/research">
            <button
              class="
                border-color-1
                w-40
                h-10
                border-2
                rounded-full
                font-color-2
                text-lg
                drop-shadows
                focus:outline-none
                transform
                ease-in
                duration-75
                hover:scale-110
              "
            >
              View research
            </button>
          </nuxt-link>
        </div>
      </div>
      <!-- Call to action -->
      <div
        ref="buttons"
        class="
          flex flex-col
          h-1/3
          justify-around
          items-center
          md:flex-row md:hidden
          pb-16
        "
      >
        <nuxt-link to="/resume">
          <button
            to="/resume"
            class="
              bg-color-1
              w-40
              h-10
              rounded-full
              text-white text-lg
              drop-shadows
              md:mr-5
              transform
              ease-in
              duration-75
              hover:scale-110
            "
          >
            View resume
          </button>
        </nuxt-link>
        <nuxt-link to="/research">
          <button
            class="
              border-color-1
              w-40
              border-2
              h-10
              rounded-full
              font-color-2
              text-lg
              drop-shadows
              transform
              ease-in
              duration-75
              hover:scale-110
            "
          >
            View research
          </button>
        </nuxt-link>
        <button
          @click="scrollToAbout()"
          class="
            w-40
            h-8
            rounded-full
            font-color-2
            text-lg
            transform
            ease-in
            duration-75
            hover:scale-110
          "
        >
          About me
        </button>
      </div>
    </div>
    <!-- </div> -->
    <!-- Below the fold  -->
    <!-- Featured project -->
    <!-- <div ref="featured" class="pt-20 md:pt-14">
      <div
        class="
          border-color-1
          bg-color-2
          border-4
          rounded-xl
          p-4
          drop-shadows
          transform
          ease-in
          duration-75
          hover:scale-105
          md:hover:scale-110
        "
      >
        <p class="font-color-1 opacity-80 font-bold">🌟Featured project</p>
        <p class="font-bold font-color-1 text-xl">
          Designing and Building a knowledge-sharing platform for 40.000+
          students
        </p>
        <nuxt-link to="/project-1">
          <p
            class="font-color-1 text-right opacity-80 font-bold hover:underline"
          >
            Read more
            <img
              src="/static/assets/left-arrow.png"
              alt="right-arrow"
              class="inline transform rotate-180 h-5 w-5"
            />
          </p>
        </nuxt-link>
      </div>
    </div> -->

    <div id="about" ref="about" class="flex flex-col text-left pt-10">
      <div ref="text1" class="mt-4">
        <p class="text-lg md:text-xl font-color-1 font-semibold">Short bio</p>
        <p class="text-lg font-color-1">
          Hi! I’m a computer science engineer (major AI) passionate about
          Machine Learning, Natural Language Processing and Web Design. I
          recently graduated from Ghent University and started as a PhD student at the
          <a class="underline" href="https://ugentt2k.github.io">
            Text to Knowledge</a
          >
          research group at Ghent University under supervision of
          <a class="underline" href="http://users.atlantis.ugent.be/cdvelder/">
            prof. Chris Develder</a
          >
          and
          <a
            class="underline"
            href="https://tdmeeste.github.io/publications.html"
          >
            prof. Thomas Demeester</a
          >. 
          
          <!-- My goal for the foreseeable future is to gain more experience in
          research and academia. Currently, I'm pursuing a 6-week NLP research
          internship at
          <a class="underline" href="https://www.waylay.io">Waylay.io</a> -
          builing no-code/low-code automation software. In parallel, I'm also
          coordinating the development of a knowledge-sharing application which
          will be used by 40.000+ students (more information coming soon).  -->

          Learn more about me by
          <nuxt-link to="/resume" class="underline">
            viewing my resume</nuxt-link
          >
          or continue reading about my projects and hobbies.
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
        <p class="text-lg md:text-xl font-color-1 font-semibold">Research</p>
        <p class="text-lg font-color-1">
          As mentioned in my short bio, I just started as a PhD student. I'm
          intruiged by Machine Learning and Artificial Intelligence, but Natural
          Language Processing specifically captures my interest.
          <nuxt-link to="/research" class="underline">
            View my initial works.
          </nuxt-link>
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

      <div ref="text3" class="mt-8">
        <p class="text-lg md:text-xl font-color-1 font-semibold">Projects</p>
        <p class="text-lg font-color-1">
          I enjoy working on small projects to learn additional skills or just
          because I think they are fun. First featured project coming soon!
        </p>
      </div>

      <!-- <div ref="text3" class="my-4">
        <p class="text-lg md:text-xl font-color-1 font-semibold">Projects</p>
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
        <p class="text-lg md:text-xl font-color-1 font-semibold">Hobbies</p>
        <p class="text-lg font-color-1">
          Cooking and going to the fitness tend to fill up my free time during
          the week. When I have more time on my hands, you can find me hiking,
          camping or skiing. Web design and development is also a hobby I've
          been investing a lot of time into recently. While I am certainly not a
          bookworm, I do enjoy reading.
          <span class="italic">The Worldly Philosophers</span>,
          <span class="italic">Factfulness</span>,
          <span class="italic">21 lessons for the 21st century</span>, and
          <span class="italic">Sapiens</span> were all books I recently enjoyed.
          Previously, I spent a lot of my time practicing music. I play
          classical guitar and I sung in a choir, which gave me the opportunity
          to visit Mexico, Japan, Bulgaria, and Rome.
        </p>
      </div>
      <div ref="text5" class="mt-8">
        <p class="text-lg md:text-xl font-color-1 font-semibold">Contact me!</p>
        <p class="text-lg font-color-1">
          If you have any questions about me or my research feel free to message
          me on
          <a href="https://twitter.com/KarelDoostrlnck" class="underline"
            >Twitter</a
          >
          or
          <a
            href="https://www.linkedin.com/in/karel-doosterlinck/"
            class="underline"
            >LinkedIn</a
          >.
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

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

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
      text1,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "-=1.5"
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
  background-image: url("/assets/karel_background-min.jpg");
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
