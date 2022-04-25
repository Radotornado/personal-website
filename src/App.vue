<template>
  <v-app>
    <v-app-bar hide-on-scroll fixed app :dark="isDark" flat v-if="$route.name != 'loading'">
      <div class="d-flex align-center justify-center">
        <v-switch v-model="isDark" class="d-fixed mt-5">
          <template #prepend>
              <v-icon :color="themeColor" size="27" >mdi-white-balance-sunny</v-icon>
          </template>
        </v-switch>
        <v-icon class="ml-10" size="30" :color="themeColor">mdi-web</v-icon>
        <LanguageChanger :dark="isDark"/>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <transition name="slide-fade">
        <div class="d-none d-sm-flex flex-row nav-links align-center">
          <div @click="$vuetify.goTo('#about', scrollOptions)">
            <span :class="this.isDark ? 'yellow--text' : 'blue--text lighten-3'">01.</span> {{$t('home.right-nav.about')}}
          </div>
          <div @click="$vuetify.goTo('#experience', scrollOptions)">
            <span :class="this.isDark ? 'yellow--text' : 'blue--text lighten-3'">02.</span> {{$t('home.right-nav.experience')}}
          </div>
          <div @click="$vuetify.goTo('#projects', scrollOptions)">
            <span :class="this.isDark ? 'yellow--text' : 'blue--text lighten-3'">03.</span> {{$t('home.right-nav.projects')}}
          </div>
          <div @click="$vuetify.goTo('#contact', scrollOptions)">
            <span :class="this.isDark ? 'yellow--text' : 'blue--text lighten-3'">04.</span> {{$t('home.right-nav.contact')}}
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
  width:80px;
  height:150px;
  position:fixed;
  display:none;
  top:0px;
  left:0px;
}
.nav-links div {
  margin-left: 16px;
  cursor: pointer;
}
.nav-links span {
  color: themeColor;
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
import LanguageChanger from "@/components/LanguageChanger";

export default {
  name: "App",
  components: {
    RightNav,
    Social,
    LanguageChanger
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
