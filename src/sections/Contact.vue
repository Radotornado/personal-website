<template>
  <Base>
    <template #header>
      <h1 id="contact"></h1>
    </template>
    <template #content>
      <v-container class="d-flex flex-column text-center align-center">
        <div class="text-center text-h4 text-sm-h2">Get In Touch</div>
        <div
          class="grey--text text--darken-3 ma-5 pa-5 align-center text-center text-h5 text-sm-h4"
          style="max-width: 85%"
        >
          I am currently looking for <b>freelance</b> work, and/or interesting <b>job opportunities</b>, so be sure to send me a mail.
        </div>
        <v-btn
          dark
          class="blue"
          large
          outlined
          href="mailto:radoslav.mandev99@gmail.com"
          target="_blank"
        >
          <v-icon class="mr-4">fa-envelope</v-icon>
          WRITE ME</v-btn
        >
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