<template>
  <v-container
    fluid
    style="height:100vh;position:relative"
    class="d-flex align-start"
    color="primary"
  >
    <v-row class="mt-5">
    <v-col cols="1"></v-col>
      <v-col cols="11">
        <v-container>
          <v-row>
            <v-col class="mb-4">
              <div class="title blue--text font-weight-bold mb-4">{{$t('home.my-name-is')}}</div>
              <transition name="slide-fade">
                <div
                  transition="fade-transition"
                  class="text-h4 text-sm-h2 font-weight-bold mb-4"
                  v-if="showName"
                >
                  {{$t('home.radoslav-mandev')}}
                </div>
              </transition>
              <transition name="slide-fade">
                <h2
                  transition="fade-transition"
                  v-if="showTitle"
                  class="text-h4 text-sm-h3 font-weight-bold mb-5 grey--text"
                >
                  {{$t('home.build-and-research')}}
                  <Rotator />
                </h2>
              </transition>
              <transition name="slide-fade">
                <p
                  transition="fade-transition"
                  v-if="showBio"
                  class="description text-body-1 font-weight-regular"
                >
                  {{$t('home.I-am')}}
                  <span class="font-weight-bold blue--text">{{$t('home.cs-stud')}}</span>{{$t('home.spec')}}
                  <b>{{$t('home.web-dev')}}</b> {{$t('home.and')}}
                  <b>{{$t('home.cybersec')}}</b>{{$t('home.special')}}.
                </p>
              </transition>
              <transition name="slide-fade">
                <v-btn
                  class="mt-2 pa-6 rounded-r-0"
                  v-if="showBio"
                  primary
                  dark
                  color="blue"
                  target="_blank"
                  :href="mailTo"
                >
                  <v-icon class="mr-5">fa-envelope</v-icon>{{$t('home.get-in-touch')}}
                </v-btn>
              </transition>
              <transition name="slide-fade">
                <v-btn
                  class="mt-2 pt-6 pb-6 pl-0 pr-0 rounded-l-0"
                  v-if="showBio"
                  style="font-size:1em"
                  primary
                  dark
                  color="blue"
                  target="_blank"
                  href="http://mandev.net/email_signature/OpenPGP_key.asc"
                >
                  PGP
                </v-btn>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="1" align="right" justify="bottom" align-self="end"></v-col>
    </v-row>
    <div class="down-arrow" @click="$vuetify.goTo('#about', scrollOptions)">
      <v-icon :dark="isDark" href="#about" size="50px">fa-chevron-down</v-icon>
    </div>
  </v-container>
</template>

<style scoped>
.down-arrow {
  position: absolute;
  bottom: 60px;
  width: 80px;
  height: 80px;
  left: calc(50vw - 20px);
  animation: downArrow 0.8s linear infinite;
  opacity: 0;
}

@keyframes downArrow {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.description {
  width: 400px;
}

@media only screen and (max-width: 599px) {
  .description {
    width: 100%;
  }
}
</style>

<script>
const Rotator = () => import("@/components/Rotator.vue");

export default {
  name: "Home",
  props: ['isDark'],
  data: () => ({
    showName: false,
    showTitle: false,
    showBio: false,
    mailTo: "mailto:git.bash168@dralias.com",
    scrollOptions: {
      duration: 600,
      offset: 0,
    }
  }),
  components: {
    Rotator,
  },
  mounted: function () {

    setTimeout(() => {
      this.showName = true;
    }, 300);
    setTimeout(() => {
      this.showTitle = true;
    }, 500);
    setTimeout(() => {
      this.showBio = true;
    }, 700);
  },
};
</script>