<template>
  <div class="mt-20">
    <p class="font-color-1 opacity-80 font-bold text-lg mb-2">🔧 Projects</p>
    <div class="flex flex-col space-y-8">
      <project-card
        title="Subscription visualizer"
        category="Web development"
        image="subscriptions-screenshot.png"
        description="Beautifully visualize your subscriptions."
        madeWith="Made with Vue.js, Tailwind.css and Firebase."
        link="https://creditviz-b5a8d.web.app/authenticate"
      >
      </project-card>
      <project-card
        title="Studium"
        category="Web development"
        image="studium-cropped.png"
        description="Note-sharing platform for 40.000+ university students."
        madeWith="Made with Vue.js, Vuetify and Django."
        link="https://next.studium.gent/"
      >
      </project-card>
    </div>
  </div>
</template>
