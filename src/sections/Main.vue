<template>
  <div :class="theme">
    <Home :isDark="isDark" />
    <About :isDark="isDark"/>
    <Experience />
    <Projects :isDark="isDark"/>
    <Contact :isDark="isDark" />
    <div :class="[theme,'pb-5','text-center','text-title','font-weight-bold','repo-link']">
      <a href="https://github.com/Radotornado/personal-website" target="_blank">
        <v-icon :dark="isDark" class="mr-2">fab fa-github</v-icon>
        <span>Built by Radoslav Mandev</span>
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
    opacity:0.8;
    color:gray;
}
.repo-link a:hover {
    text-decoration:none;
    opacity:1;
    color:blue;
}
</style>
<script>
const Home = () => import("@/sections/Home.vue");
const About = () => import("@/sections/About.vue");
const Experience = () => import("@/sections/Experience.vue");
const Projects = () => import("@/sections/Projects.vue");
const Contact = () => import("@/sections/Contact.vue");

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