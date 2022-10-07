<template>
  <div>
    <!-- splash to hide while during hydration -->
    <splash />
    <!-- TODO: use semantic html  -->
    <!-- navbar  -->
    <div class="flex flex-col min-h-screen justify-between">
      <nav
        :class="{ scrolled: !view.atTopOfPage }"
        class="fixed top-0 flex w-full h-14 items-center"
      >
        <div class="flex w-11/12 md:w-5/6 xl:w-4/6 2xl:w-3/6 mx-auto">
          <!-- Non-Mobile links -->
          <nuxt-link to="/">
            <p class="text-xl font-color-1 font-semibold">
              Karel D'Oosterlinck
            </p>
          </nuxt-link>
          <div class="hidden sm:flex ml-auto space-x-6">
            <!-- <nuxt-link to="/resume">
              <p class="text-lg font-color-1 hover:underline">Resume</p>
            </nuxt-link> -->
            <nuxt-link to="/research">
              <p class="text-lg font-color-1 hover:underline">Research</p>
            </nuxt-link>
            <nuxt-link to="/projects">
              <p class="text-lg font-color-1 hover:underline">Projects</p>
            </nuxt-link>
            <nuxt-link to="/mentions">
              <p class="text-lg font-color-1 hover:underline">Mentions</p>
            </nuxt-link>
            <a href="https://medium.com/@kareldoosterlinck">
              <p class="text-lg font-color-1 hover:underline">Blog</p>
            </a>
            <!-- <nuxt-link to="/projects">
            <p class="text-lg font-color-1 hover:underline">Projects</p>
          </nuxt-link> -->
            <!-- <nuxt-link to="/contact">
            <p class="text-lg font-color-1 hover:underline">Contact</p>
          </nuxt-link> -->
            <a href="https://twitter.com/KarelDoostrlnck" target="_blank">
              <img
                class="inline-block h-4 opacity-60"
                src="/assets/twitter.svg"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/karel-doosterlinck/"
              target="_blank"
            >
              <img
                class="inline-block h-4 opacity-60"
                src="/assets/linkedin.svg"
              />
            </a>
          </div>
          <!-- Mobile Hamburger menu -->
          <div class="sm:hidden flex ml-auto space-x-6 items-center">
            <button @click="drawerVisible = true">
              <img class="w-6 h-6" src="/assets/menu.png" alt="menu" />
            </button>
          </div>
        </div>
      </nav>
      <!-- content  -->
      <div class="w-11/12 md:w-5/6 xl:w-4/6 2xl:w-3/6 mx-auto">
        <nuxt />
      </div>
      <!-- Footer  -->
      <footer class="w-11/12 md:w-5/6 xl:w-4/6 2xl:w-3/6 mx-auto mt-10 mb-5">
        <div class="flex justify-between">
          <div class="flex flex-col justify-around">
            <p class="text-sm text-gray-500">Designed and coded by me!</p>
            <p class="text-sm text-gray-500">© 2022 Karel D'Oosterlinck</p>
          </div>
          <div class="text-right">
            <a
              href="https://twitter.com/KarelDoostrlnck"
              class="hover:underline"
              target="_blank"
            >
              <span class="text-sm text-gray-500">Twitter</span>
              <img
                class="inline-block pl-1 h-4 opacity-60"
                src="/assets/twitter.svg"
              />
            </a>

            <br />
            <a
              href="https://www.linkedin.com/in/karel-doosterlinck/"
              class="hover:underline"
              target="_blank"
            >
              <span class="text-sm text-gray-500">LinkedIn</span>
              <img
                class="inline-block pl-1 h-4 opacity-60"
                src="/assets/linkedin.svg"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>

    <!-- Mobile side drawer -->
    <div
      class="right-drawer sm:hidden"
      :style="{
        width: drawerVisible ? '40vw' : '0',
        paddingLeft: drawerVisible ? '10px' : '0',
      }"
    >
      <div
        class="
          flex flex-col
          items-end
          mt-4
          mr-7
          space-y-5
          divide divide-gray-500
        "
      >
        <div>
          <button @click="drawerVisible = false">
            <img class="w-6 h-6" src="/assets/cancel.png" alt="close-menu" />
          </button>
        </div>
        <nuxt-link to="/" @click.native="drawerVisible = false">
          <p class="text-lg font-color-1 hover:underline">Home</p>
        </nuxt-link>
        <!-- <nuxt-link to="/resume" @click.native="drawerVisible = false">
          <p class="text-lg font-color-1 hover:underline">Resume</p>
        </nuxt-link> -->
        <nuxt-link to="/research" @click.native="drawerVisible = false">
          <p class="text-lg font-color-1 hover:underline">Research</p>
        </nuxt-link>
        <nuxt-link to="/projects" @click.native="drawerVisible = false">
          <p class="text-lg font-color-1 hover:underline">Projects</p>
        </nuxt-link>
        <nuxt-link to="/mentions" @click.native="drawerVisible = false">
          <p class="text-lg font-color-1 hover:underline">Mentions</p>
        </nuxt-link>
        <a
          href="https://medium.com/@kareldoosterlinck"
          @click.native="drawerVisible = false"
        >
          <p class="text-lg font-color-1 hover:underline">Blog</p>
        </a>
        <!-- <nuxt-link to="/projects" @click="drawerVisible = false">
        <p class="text-lg font-color-1 hover:underline">Projects</p>
      </nuxt-link> -->
        <!-- <nuxt-link to="/contact" @click="drawerVisible = false">
        <p class="text-lg font-color-1 hover:underline">Contact</p>
      </nuxt-link> -->
        <hr class="w-2/3" />
        <a
          href="https://twitter.com/KarelDoostrlnck"
          class="hover:underline"
          target="_blank"
        >
          <span class="text-lg font-color-1">Twitter</span>
          <img
            class="inline-block h-4 pl-2 mb-1 opacity-60"
            src="/assets/twitter.svg"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/karel-doosterlinck/"
          class="hover:underline"
          target="_blank"
        >
          <span class="text-lg font-color-1">LinkedIn</span>
          <img
            class="inline-block h-4 pl-2 mb-1 opacity-60"
            src="/assets/linkedin.svg"
          />
        </a>
      </div>
    </div>
    <!-- Mobile side drawer mask -->
    <div
      @click="drawerVisible = false"
      class="drawer-mask sm:hidden"
      :style="{
        width: drawerVisible ? '100vw' : '0vw',
        opacity: drawerVisible ? '0.6' : '0',
      }"
    ></div>
  </div>
</template>

<script>
import splash from "./splash.vue";
export default {
  components: { splash },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
      drawerVisible: false,
    };
  },

  // a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },

    testClick() {},
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff7ed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  z-index: 0;
  background-color: #fff7ed;
}

nav.scrolled {
  @apply shadow-2xl;
  z-index: 10;
  border-bottom: 0px;
}

.right-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 0; /* initially */
  overflow: hidden;
  height: 100vh;
  padding-left: 0; /* initially */
  background: #fff7ed;
  z-index: 200;
  transition: all 0.2s;
}

.drawer-mask {
  position: fixed;
  right: 0;
  top: 0;
  width: 0; /* initially */
  height: 100vh;
  background: #000;
  opacity: 0.3;
  z-index: 199;
  transition: opacity ease 0.3s;
}

a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>

