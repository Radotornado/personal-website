<template>
  <div :class="theme">
    <Home :isDark="isDark" />
    <About :isDark="isDark"/>
    <Experience :isDark="isDark"/>
    <Projects :isDark="isDark"/>
    <Contact :isDark="isDark" />
    <div :class="[theme,'pb-5','text-center','text-title','font-weight-bold','repo-link']">
      <a href="https://github.com/Radotornado/personal-website" target="_blank">
        <v-icon :dark="isDark" class="mr-2 mb-1">fab fa-github</v-icon>
        <span>{{$t('main.built-by-me')}}</span>
      </a>
    </div>
  </div>
</template>
<style scoped>
.white-text {
  color:white;
}
.repo-link a {
    text-decoration:none;
    opacity:0.6;
    color:gray;
}
.repo-link a:hover {
    text-decoration:none;
    opacity:1;
    color:gray;
}
</style>
<script>
import { defineAsyncComponent } from 'vue';

const Home = defineAsyncComponent(() => import("@/sections/Home.vue"));
const About = defineAsyncComponent(() => import("@/sections/About.vue"));
const Experience = defineAsyncComponent(() => import("@/sections/Experience.vue"));
const Projects = defineAsyncComponent(() => import("@/sections/Projects.vue"));
const Contact = defineAsyncComponent(() => import("@/sections/Contact.vue"));

export default {
  name: "Main",
  props: {'isDark':Boolean},
  components: {
    Home,
    About,
    Experience,
    Projects,
    Contact
  },
  computed: {
    theme(){
      return this.isDark ? ['secondary','white-text'] : '';    
    }
  }
};
</script>