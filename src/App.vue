<template>
  <v-app>
    <v-app-bar hide-on-scroll fixed app :dark="isDark" flat v-if="$route.name != 'loading'">
      <div class="d-flex align-center justify-center">
        <v-btn href="https://mandev.net" icon>
          <v-img
            alt="Radoslav Mandev"
            class="shrink mr-2"
            contain
            :src="require('@/assets/favicon.svg')"
            transition="scale-transition"
            width="40"
          />
        </v-btn>
      </div>
      <v-spacer></v-spacer>
        <v-switch v-model="isDark" class="d-flex d-sm-none mt-5">
          <template #prepend>
              <v-icon :color="themeColor">fas fa-moon</v-icon>
          </template>
        </v-switch>
      <v-spacer></v-spacer>
      <transition name="slide-fade">
        <div class="d-none d-sm-flex flex-row nav-links align-center">
          <div @click="$vuetify.goTo('#about', scrollOptions)">
            <span>01.</span> About
          </div>
          <div @click="$vuetify.goTo('#experience', scrollOptions)">
            <span>02.</span> Experience
          </div>
          <div @click="$vuetify.goTo('#projects', scrollOptions)">
            <span>03.</span> Projects
          </div>
          <div @click="$vuetify.goTo('#contact', scrollOptions)">
            <span>04.</span> Contact
          </div>
        </div>
      </transition>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="toggleDrawer()" />
    </v-app-bar>

    <v-main style="scroll-snap-type:y proximity;position:relative">
      <router-view :isDark="isDark"></router-view>

      <div class="social-links d-none d-sm-flex">
        <Social :isDark="isDark"/>
      </div>

      <div class="theme-toggle d-none d-sm-flex flex-row align-center justify-center">
        <v-icon class="mr-3" :color="themeColor">fas fa-moon</v-icon>
        <v-switch v-model="isDark">
        </v-switch>
      </div>
    </v-main>

    <RightNav ref="rightNav" />
  </v-app>
</template>

<style>

.social-links {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 45px;
  height: 75vh;
  display: block;
  position: fixed;
  right: 16px;
  bottom: 0px;
  padding-right: 16px;
  text-align: center;
}

.theme-toggle{
  transform:rotate(90deg);
  width:80px;
  height:150px;
  position:fixed;
  display:block;
  bottom:0px;
  left:0px;
}

.nav-links div {
  margin-left: 16px;
  cursor: pointer;
}
.nav-links span {
  color: rgb(15, 167, 46);
  font-weight: bold;
}
.nav-links div:hover {
  text-decoration: underline;
}


.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
import RightNav from "@/components/RightNav";
import Social from "@/components/Social";

export default {
  name: "App",
  components: {
    RightNav,
    Social,
  },

  data: () => ({
    scrollOptions: {
      duration: 600,
      offset: 0,
      easing: "easeInOutCubic",
    },
    isDark:false
  }),

  computed: {
    themeColor(){
      return this.isDark ? 'yellow' : 'blue lighten-3';
    }

  },

  methods: {
    toggleDrawer() {
      this.$refs.rightNav.toggle();
    },
  },
};
</script>
