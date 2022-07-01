<template>
  <div class="mt-20">
    <p class="font-color-1 opacity-80 font-bold text-lg mb-2">🔧 Projects</p>
    <div class="flex flex-col space-y-8">
      <project-card
        title="Studium"
        category="Web development"
        image="studium-cropped.png"
        description="Note-sharing platform made for 40.000+ university students. Featured multiple times in local news."
        madeWith="Made with Vue.js, Vuetify and Django."
        link="https://next.studium.gent/"
        codeLink="https://gitlab.com/vtkgent/studium"
      >
      </project-card>
      <project-card
        title="Subscription visualizer"
        category="Web development"
        image="subscriptions-screenshot.png"
        description="Beautifully visualize your subscriptions."
        madeWith="Made with Vue.js, Tailwind.css and Firebase."
        link="https://creditviz-b5a8d.web.app/authenticate"
        codeLink="https://github.com/KarelDO/subscription-visualizer"
      >
      </project-card>
      <project-card
        title="Awesome codex"
        category="Machine Learning"
        image="awesome-codex.png"
        description="List gathering demos of OpenAI's codex model."
        madeWith=""
        link="https://github.com/KarelDO/awesome-codex/"
      >
      </project-card>
      <project-card
        title="My personal website"
        category="Web development"
        image="personal-screenshot.jpg"
        description="Featuring my portfolio on my portfolio site? Meta."
        madeWith="Made with Vue.js and Tailwind."
        link="https://kareldoosterlinck.com/"
      >
      </project-card>
    </div>
  </div>
</template>
