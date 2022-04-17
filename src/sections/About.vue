<template>
  <Base>
    <template #header>
      <div id="about" class="text-h5 text-sm-h4">
        <span class="blue--text">01.</span>
        About Me
      </div>
    </template>
    <template #content>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-row align-center justify-center">
            <div class="profile-picture-container">
              <v-img
                class="mx-auto"
                :src="require('@/assets/profile-pic.jpg')"
                :lazy-src="require('@/assets/profile-pic.jpg')"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="px-xs-0">
            <v-list color="transparent" :dark="isDark">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue">fa-user-tag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    My name is <b>Radoslav Mandev</b>, and I was born in 1999 in the beautiful country Bulgaria.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue">fa-graduation-cap</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I am currently doing my degree in <b>Computer Science</b> in the <b>University of Passau</b>, Germany.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue">fa-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    Since I was 13 years old I am passionate about everything <b>tech</b>, <b>web</b>, <b>IT-</b> and <b>cybersecurity</b> and <b>programming</b>.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue">fa-camera</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    In my free time sometimes I'm doing <b>reading</b>, doing <b>photography</b>, geocaching, dialing in espresso, <b>mountain biking</b> or orienteering.
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </Base>
</template>
<style>
.profile-picture-container {
  overflow: hidden;
  max-width: 300px;
  height: 300px;
  text-align: center;
  box-shadow: #d2d2d2 10px -10px;
}
</style>
<script>
const Base = () => import("@/sections/Base");
export default {
  name: "About",
  props: {isDark:Boolean},
  components: {
    Base,
  },
};
</script>
