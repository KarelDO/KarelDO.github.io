<template>
  <div class="pt-10 divide divide-gray-300">
    <!-- Information banner  -->
    <div
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
      <p class="font-color-1 opacity-80 font-bold">
        Want a pdf version of my resume?
      </p>
      <p class="font-color-1">
        Send me a message on
        <a
          class="underline"
          href="https://www.linkedin.com/in/karel-doosterlinck/"
          >LinkedIn</a
        >
        and I will provide you with one!
      </p>
    </div>
    <!-- Education  -->
    <div class="mt-10" ref="education">
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">🎓 Education</p>
      <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
        <div class="col-span-5">
          <p class="font-color-1 font-bold text-2xl">
            BSc/MSc in Computer Science Engineering: Major Artificial
            Intelligence
          </p>
        </div>
        <div class="flex flex-col col-span-2 justify-end">
          <p class="text-left md:text-right text-gray-500">2016 - 2021</p>
        </div>
      </div>
      <p class="text-gray-500">Ghent University, Belgium</p>
      <p class="text-lg pt-2 text-gray-900">
        Both degrees obtained
        <span class="font-bold">Summa Cum Laude</span> (with Greatest Honors)
      </p>
    </div>

    <!-- Awards  -->
    <hr class="my-10" ref="line0" />
    <div class="mt-10" ref="awards">
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">
        🏆 Awards, honors &#38; nominations
      </p>
      <div>
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              TomTom 2021 Best Machine Learning Thesis Award
            </p>
          </div>
          <!-- <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">2021</p>
          </div> -->
        </div>
        <!-- <p class="text-gray-500">Ghent University, Belgium</p> -->
        <p class="text-lg pt-2 text-gray-900">
          Obtained for my master thesis work on 'Design and Analysis of Domain
          Adaptation Systems for Joint Multilingual Coreference Resolution' at
          Ghent University.
        </p>
      </div>
      <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              Ghent Student of the Year 2020 - 2021 Finalist
            </p>
          </div>
          <!-- <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">2021</p>
          </div> -->
        </div>
        <!-- <p class="text-gray-500">Ghent University, Belgium</p> -->
        <p class="text-lg pt-2 text-gray-900">
          One of 9 finalists for the student of the year award hosted by the city of Ghent for my non-profit student voluntueering.
        </p>
      </div>
      <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              Huawei 2018 Seed For The Future
            </p>
          </div>
          <!-- <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">2021</p>
          </div> -->
        </div>
        <!-- <p class="text-gray-500">Ghent University, Belgium</p> -->
        <p class="text-lg pt-2 text-gray-900">
          Awarded an all-expenses-paid-for trip to China (Beijing and Shenzhen) and Hong Kong for two weeks as one of 10 selected Belgian Computer Science students.
        </p>
      </div>
    </div>

    <!-- Skills (old)  -->
    <!-- <hr class="my-10" />
    <div>
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">Skills</p>
      <div
        class="
          border-4 border-color-1
          rounded-xl
          p-8
          mb-4
          grid grid-rows-4
          gap-4
        "
      >
        <div class="row-span-1 flex flex-col justify-center">
          <p class="font-color-1 text-2xl font-bold text-center">
            General Computer Science
          </p>
        </div>
        <p class="text-gray-900 text-lg text-left row-span-1">
          I majored summa cum laude in Artificial Intelligence and sucessfully
          pursued two AI-related internships. Currently, I am working as a PhD
          candidate in the field of Natural Language Processing.
        </p>
        <div class="row-span-1 flex flex-col justify-center">
          <p class="font-bold font-color-1 text-xl text-center">
            What i'm familiar with
          </p>
        </div>
        <p class="text-gray-900 text-lg">
          Tensorflow, PyTorch, CUDA, Natural Language Processing, Transformers,
          Computer Vision, ldqzijdlqij, ldqzijdlqij, ldqzijdlqij
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div
          class="
            col-span-1
            border-4 border-color-1
            rounded-xl
            p-8
            mb-4
            grid grid-rows-5
            gap-5
          "
        >
          <div class="row-span-1 flex flex-col justify-center">
            <p class="font-color-1 text-2xl font-bold text-center">
              Machine Learning &amp; Deep learning
            </p>
          </div>
          <div class="row-span-2">
            <p class="text-gray-900 text-lg text-left">
              I majored summa cum laude in Artificial Intelligence and
              sucessfully pursued two AI-related internships. Currently, I am
              working as a PhD candidate in the field of Natural Language
              Processing.
            </p>
          </div>
          <div class="row-span-1 flex flex-col justify-center">
            <p class="font-bold font-color-1 text-xl text-center">
              What i'm familiar with
            </p>
          </div>
          <div class="row-span-2">
            <p class="text-gray-900 text-lg">
              Tensorflow, PyTorch, CUDA, Natural Language Processing,
              Transformers, Computer Vision, ldqzijdlqij, ldqzijdlqij,
              ldqzijdlqij
            </p>
          </div>
        </div>
        <div
          class="
            col-span-1
            border-4 border-color-1
            rounded-xl
            p-8
            mb-4
            grid grid-rows-5
            gap-5
          "
        >
          <div class="row-span-1 flex flex-col justify-center">
            <p class="font-color-1 text-2xl font-bold text-center">
              Web development
            </p>
          </div>
          <div class="row-span-2">
            <p class="text-gray-900 text-lg text-left">
              I majored summa cum laude in Artificial Intelligence and
              sucessfully pursued two AI-related internships. Currently, I am
              working as a PhD candidate in the field of Natural Language
              Processing.
            </p>
          </div>
          <div class="row-span-1 flex flex-col justify-center">
            <p class="font-bold font-color-1 text-xl text-center">
              What i'm familiar with
            </p>
          </div>
          <div class="row-span-2">
            <p class="text-gray-900 text-lg">
              Tensorflow, PyTorch, CUDA, Natural Language Processing,
              Transformers, Computer Vision, ldqzijdlqij
            </p>
          </div>
        </div>
        <div
          class="
            col-span-1
            border-4 border-color-1
            rounded-xl
            p-8
            mb-4
            grid grid-rows-5
            gap-5
          "
        >
          <div class="row-span-1 flex flex-col justify-center">
            <p class="font-color-1 text-2xl font-bold text-center">
              Organisation
            </p>
          </div>
          <div class="row-span-2">
            <p class="text-gray-900 text-lg text-left">
              I majored summa cum laude in Artificial Intelligence and
              sucessfully pursued two AI-related internships. Currently, I am
              working as a PhD candidate in the field of Natural Language
              Processing.
            </p>
          </div>
          <div class="row-span-1 flex flex-col justify-center">
            <p class="font-bold font-color-1 text-xl text-center">
              What i'm familiar with
            </p>
          </div>
          <div class="row-span-2">
            <p class="text-gray-900 text-lg">
              Tensorflow, PyTorch, CUDA, Natural Language Processing,
              Transformers, Computer Vision, ldqzijdlqij
            </p>
          </div>
        </div>
        <div
          class="
            border-4 border-color-1
            rounded-xl
            p-8
            mb-4
            grid grid-rows-5
            gap-4
          "
        >
          <div class="row-span-1 flex flex-col justify-center">
            <p class="font-color-1 text-2xl font-bold text-center">Languages</p>
          </div>
          <p class="text-gray-900 text-lg text-left row-span-1">
            I majored summa cum laude in Artificial Intelligence and sucessfully
            pursued two AI-related internships. Currently, I am working as a PhD
            candidate in the field of Natural Language Processing.
          </p>
        </div>
      </div>
    </div> -->

    <!-- Experiences  -->
    <hr class="my-10" ref="line1" />
    <div ref="experiences">
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">
        💼 Experiences
      </p>
      <div>
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">Co-creator of Studium</p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">
              Aug 2020 - present
            </p>
          </div>
        </div>
        <p class="text-gray-500">Ghent University, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          Together with 2 friends, I created Studium — a knowledge-sharing
          application for the students at Ghent University.
          <br /><br />
          As co-creator, I was responsible for designing the application,
          securing funding, hiring two computer science engineers for a summer
          internship, setting priorities for the development team, and helping
          develop the application.
          <br /><br />
          Studium will beta-launch September 2021 and will be released to all
          UGhent students February 2022.
        </p>
      </div>
      <!-- <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              MSc Thesis on Natural Language Processing
            </p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">2020 - 2021</p>
          </div>
        </div>
        <p class="text-gray-500">Ghent University, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          Researching cross-lingual contextual word embedding mappings. Worked
          with large Transformer models.
        </p>
      </div> -->
      <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              NLP Research Internship
            </p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">
              Jul 2021 - present
            </p>
          </div>
        </div>
        <p class="text-gray-500">Waylay, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          I designed and built a machine learning-based semantic parser which
          allows the user to interface with the Waylay system over natural
          language.
          <br /><br />
          This problem was particularly challenging because of the extremely low
          amount of data available. I solved this by leveraging large
          pre-trained language models (specifically,
          <span class="italic">GPT3</span>) together with
          <span class="italic">prompt engineering</span> to build an extremely
          data-efficient semantic parser to translate natural language inputs
          into a format digestable by the Waylay system.
        </p>
      </div>
      <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              Serverless Cloud Engineering Internship
            </p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">Aug - sept 2020</p>
          </div>
        </div>
        <p class="text-gray-500">Waylay, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          I was tasked with migrating a core piece of software to a serverless
          solution (for this, we used <span class="italic">openFaaS</span> ). I
          worked in a large codebase, devised a migration plan, and created
          proofs of concepts to validate my approach. The migration was
          successful and is currently running in production. <br /><br />
          Additionally, I gained experience working in an agile startup.
        </p>
      </div>
      <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              Vice-President &amp; Board-Member
            </p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">2019 - 2020</p>
          </div>
        </div>
        <p class="text-gray-500">VTK Ghent non-profit, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          VTK Ghent non-profit is the student association for all engineering
          students at Ghent University.
          <br /><br />
          As vice-president, I was responsible for the management and wellbeing
          of 35 active volunteers and 200 regular volunteers. We organized
          sport, culture and job-related events for 2000+ students.
          <br /><br />
          I am particularly proud of my initiative to set up a collaboration
          with the University to help integrate international students at the
          engineering faculty. Additionally, I played a vital role in a
          construction project ment to secure the future of the organization
          (currently still ongoing). For this, I had to regularly correspond
          with the top-level of Ghent University as well as several major
          Belgian companies.
        </p>
      </div>
      <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              Data-Science Engineering Internship
            </p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">Aug 2019</p>
          </div>
        </div>
        <p class="text-gray-500">OMP, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          At OMP, I researched different machine learning approaches for
          statistical forecasting of timeseries. To achieve this, I also
          implemented and benchmarked a deep residual neural network.
        </p>
      </div>
      <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">IT Manager</p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">2018 - 2019</p>
          </div>
        </div>
        <p class="text-gray-500">VTK Ghent non-profit, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          I helped maintain our IT infrastructure. I gained experience with full
          stack web-development.
        </p>
      </div>
    </div>

    <!-- Skills (new)  -->
    <hr class="my-10" ref="line1dot5"/>
    <div ref="skills">
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">💻 Skills</p>
      <p class="font-color-1 font-bold text-2xl">
        General Computer Science Skills
      </p>
      <p class="text-gray-900 text-lg text-left">
        Python, C, C++, JavaScript, HTML, CSS, SQL, Linux, Docker
      </p>
      <p class="font-color-1 mt-10 font-bold text-2xl">
        Artificial Intelligence
      </p>
      <p class="text-gray-900 text-lg text-left">
        Tensorflow, PyTorch, Scikit-learn, Huggingface Transformers
      </p>
      <p class="font-color-1 mt-10 font-bold text-2xl">Full Stack Web Development</p>
      <p class="text-gray-900 text-lg text-left">
        Vue.js, Nuxt.js, Vuetify, tailwind.css, Django, Flask, Firebase
      </p>
    </div>
    

    <!-- Languages  -->
    <hr class="my-10" ref="line2" />
    <div ref="languages">
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">💬 Languages</p>
      <div class="grid grid-cols-2">
        <div>
          <p class="font-color-1 font-bold text-2xl">Dutch 🇳🇱</p>
          <p class="text-gray-500">Native</p>
        </div>
        <div>
          <p class="font-color-1 font-bold text-2xl">English 🇬🇧</p>
          <p class="text-gray-500">(C2) Proficient</p>
        </div>
        <div>
          <p class="font-color-1 mt-5 font-bold text-2xl">French 🇫🇷</p>
          <p class="text-gray-500">(B1) Intermediate</p>
        </div>
        <div>
          <p class="font-color-1 mt-5 font-bold text-2xl">German 🇩🇪</p>
          <p class="text-gray-500">(B1) Intermediate</p>
        </div>
      </div>
    </div>

    <!-- International  -->
    <!-- <hr class="my-10" />
    <div class="mb-10">
      <p class="font-color-1 opacity-80 font-bold text-lg mb-2">
        ✈️ International
      </p>
      <img src="/assets/worldmap.png" />
      <div>
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              Serverless Cloud Engineering Internship
            </p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">Aug - Sept 2020</p>
          </div>
        </div>
        <p class="text-gray-500">Waylay, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          Explored and integrated serverless solutions. Worked with a team in an
          Agile setting.
        </p>
      </div>
      <div class="mt-10">
        <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4">
          <div class="col-span-5">
            <p class="font-color-1 font-bold text-2xl">
              Serverless Cloud Engineering Internship
            </p>
          </div>
          <div class="flex flex-col col-span-2 justify-end">
            <p class="text-left md:text-right text-gray-500">Aug - Sept 2020</p>
          </div>
        </div>
        <p class="text-gray-500">Waylay, Belgium</p>
        <p class="text-lg pt-2 text-gray-900">
          Explored and integrated serverless solutions. Worked with a team in an
          Agile setting.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { gsap } from "gsap";

let timeline = gsap.timeline({
  paused: true,
});

export default {
  mounted() {
    const { topBanner, education, awards, experiences, skills, languages, line0, line1, line1dot5, line2 } =
      this.$refs;

    timeline.from(
      topBanner,
      1,
      { y: -50, opacity: 0.0, ease: "power2.out" },
      "+=0.25"
    );
    timeline.from(
      education,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );
    timeline.from(
      line0,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );
    timeline.from(
      awards,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );
    timeline.from(
      line1,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );
    timeline.from(
      experiences,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );
    timeline.from(
      line1dot5,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );
    timeline.from(
      skills,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );
    timeline.from(
      line2,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );
    timeline.from(
      languages,
      1,
      { x: -50, opacity: 0.0, ease: "power2.out" },
      "<0.10"
    );

    timeline.play();
  },
};
</script>

<style scoped></style>
