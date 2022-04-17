<template>
  <Base>
    <template #header>
    <h1 id="contact"></h1>
      <div id="projects" class="text-h5 text-sm-h4">
        <span class="blue--text"> 04. </span>
        Contact
      </div>
    </template>
    <template #content>
      <v-container class="d-flex flex-column text-center align-center">
        <div
          class="grey--text ma-5 pa-5 align-center text-center text-h5 text-sm-h4"
          style="max-width: 85%"
        >
          I am currently looking for <b>freelance</b> work, and/or interesting <b>job opportunities</b>, so be sure to send me a mail.
        </div>
        <div>
        <v-btn
          dark
          class="blue mr-5"
          large
          outlined
          href="mailto:radoslav.mandev99@gmail.com"
          target="_blank"
        >
          <v-icon class="mr-4">fa-envelope</v-icon>
          Get in touch</v-btn
        >
        <v-btn
          dark
          class="blue ml-5"
          large
          outlined
          href="https://paypal.me/radotornado"
          target="_blank"
        >
          <v-icon class="mr-4">fab fa-paypal</v-icon>
          Buy me a coffee</v-btn
        >
        </div>
        <Social :isDark="isDark" class="mt-5 pt-5 hidden-sm-and-up" />
      </v-container>
    </template>
  </Base>
</template>
<script>
const Base = () => import("@/sections/Base.vue");
const Social = () => import("@/components/Social.vue");

export default {
  name: "Contact",
  components: {
    Base,
    Social,
  },
  props: { isDark: Boolean },
};
</script>