<template>
  <Base>
    <template #header>
    <h1 id="contact"></h1>
      <div id="projects" class="text-h5 text-sm-h4">
        <span class="blue--text"> 04. </span>
        {{$t('cont.title')}}
      </div>
    </template>
    <template #content>
      <v-container class="d-flex flex-column text-center align-center">
        <div
          class="grey--text ma-5 pa-5 align-center text-center text-h5 text-sm-h4"
          style="max-width: 85%"
        >
          {{$t('cont.text.I-am')}}<b>{{$t('cont.text.freelance')}}</b>{{$t('cont.text.work')}}<b>{{$t('cont.text.job')}}</b>{{$t('cont.text.email')}}
        </div>
        <v-container fill-height fluid>
          <v-row no-gutters  align="center" justify="center">
            <v-col cols="12" md="4" class="mt-5 mb-5">
              <v-btn
                dark
                class="blue rounded-r-0 pa-6"
                large
                href="mailto:radoslav.mandev99@gmail.com"
                target="_blank"
                >
                  <v-icon class="mr-4">fa-envelope</v-icon>
                  {{$t('cont.get-in-touch')}}
              </v-btn>
                <v-btn
                dark
                class="blue rounded-l-0 mr-0 ml-0 pt-6 pb-6"
                href="http://mandev.net/email_signature/OpenPGP_key.asc"
                target="_blank"
                >
                  PGP
              </v-btn>
            </v-col>
            <v-col cols="12" md="4" class="mt-5 mb-5">
              <v-btn
                dark
                class="blue pa-6"
                href="https://paypal.me/radotornado"
                target="_blank"
              >
                <v-icon class="mr-4">fab fa-paypal</v-icon>
                {{$t('cont.coffee')}}</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
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