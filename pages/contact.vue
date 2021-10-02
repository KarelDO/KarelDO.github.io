<template>
  <div class="pt-10">
    <div class="pt-10">
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">📬 Contact</p>
      <div class="grid grid-cols-2">
        <div>
          <p class="font-color-1 mt-5 font-bold text-2xl">Dutch 🇳🇱</p>
        </div>
        <div>
          <p class="font-color-1 mt-5 font-bold text-2xl">English 🇬🇧</p>
        </div>
        <div>
          <p class="font-color-1 mt-5 font-bold text-2xl">French 🇫🇷</p>
        </div>
        <div>
          <p class="font-color-1 mt-5 font-bold text-2xl">German 🇩🇪</p>
        </div>
      </div>
      ·
    </div>
  </div>
  <!-- <div class="pt-10 flex flex-col justify-start">
    <div class="flex flex-row items-end justify-between md:mt-12 md:mb-6">
      <p
        ref="messageMe"
        class="mx-3 my-10 md:my-2 text-xl font-color-1 md:text-2xl"
      >
        Message me on
        <a class="underline" href="https://twitter.com/KarelDoostrlnck"
          >Twitter</a
        >,
        <a
          class="underline"
          href="https://www.linkedin.com/in/karel-doosterlinck/"
          >LinkedIn</a
        >
        or send me an email!
      </p>
      <img
        ref="callEmoji"
        src="/assets/call-me-hand_1f919.png"
        alt="call-me-hand"
        class="flip-horizontally hidden md:flex h-20 w-20 mx-5 md:mr-10 lg:mr-20 transform rotate-12 md:h-24 md:w-24 png-drop-shadow"
      />
    </div>
    <div ref="contactForm" class="md:mt-5">
      <div ref="nameContact" class="flex flex-col">
        <label class="ml-3 font-color-1" for="contact-name">Name</label>
        <input
          id="contact-name"
          class="px-5 h-10 border-color-1 rounded-full focus:outline-none focus:ring-2"
          type="text"
        />
      </div>
      <div ref="emailContact" class="flex flex-col mt-2">
        <label class="ml-3 font-color-1" for="contact-email">Email adres</label>
        <input
          id="contact-email"
          class="px-5 h-10 border-color-1 rounded-full focus:outline-none focus:ring-2"
          type="text"
        />
      </div>
      <div ref="subjectContact" class="flex flex-col mt-2">
        <label class="ml-3 font-color-1" for="contact-subject">Subject</label>
        <input
          id="contact-subject"
          class="px-5 h-10 border-color-1 rounded-full focus:outline-none focus:ring-2"
          type="text"
        />
      </div>
      <div ref="messageContact" class="flex flex-col mt-2">
        <label class="ml-3 font-color-1" for="contact-message">Message</label>
        <textarea
          id="contact-message"
          class="px-5 py-2 h-48 border-color-1 rounded-3xl focus:outline-none focus:ring-2"
          type="text"
        />
      </div>

      <div class="flex justify-between my-4">
        <img
          ref="mailEmoji"
          src="/assets/envelope_2709.png"
          alt="waving-hand"
          class="h-20 w-20 ml-5 -mt-10 transform rotate-12 md:h-24 md:w-24 png-drop-shadow"
        />
        <button
          ref="sendButton"
          class="bg-color-1 w-20 h-10 rounded-full text-white text-md drop-shadows focus:outline-none "
        >
          Send
        </button>
      </div>
    </div>
  </div> -->
</template>

<script>
// import { gsap } from "gsap";

// let timeline = gsap.timeline({
// paused: true,
// });

// export default {
// mounted() {
// const {messageMe, callEmoji, nameContact, emailContact, subjectContact, messageContact, mailEmoji, sendButton } = this.$refs
// const { messageMe, callEmoji, mailEmoji, sendButton, contactForm } =
// this.$refs;

// timeline.from(
//   messageMe,
//   1,
//   { y: -50, opacity: 0.0, ease: "power2.out" },
//   "+=0.5"
// );
// timeline.from(nameContact, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
// timeline.from(emailContact, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
// timeline.from(subjectContact, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
// timeline.from(messageContact, 1, { x:-50, opacity:0.0, ease:"power2.out"},'<0.25')
//   timeline.from(
//     contactForm,
//     1,
//     { x: -50, opacity: 0.0, ease: "power2.out" },
//     "<0.25"
//   );
//   timeline.from(
//     sendButton,
//     1,
//     { x: -50, opacity: 0.0, ease: "power2.out" },
//     "<0.25"
//   );
//   timeline.from(
//     callEmoji,
//     1,
//     { x: 50, y: 5, rotation: 90, opacity: 0.0, ease: "power2.out" },
//     "-=0.5"
//   );
//   timeline.from(
//     mailEmoji,
//     1,
//     { x: -50, y: -5, rotation: -90, opacity: 0.0, ease: "power2.out" },
//     "<"
//   );
//   timeline.to(callEmoji, 1, {
//     y: -3,
//     x: 3,
//     ease: "sine.out",
//     yoyo: true,
//     repeat: -1,
//   });
//   timeline.to(mailEmoji, 1, {
//     y: -3,
//     rotation: 3,
//     ease: "sine.out",
//     yoyo: true,
//     repeat: -1,
//   });

//   timeline.play();
// },
// };
</script>

<style scoped>
input,
textarea {
  background-color: #fff7ed;
}
.flip-horizontally {
  transform: scaleX(-1);
}
</style>
