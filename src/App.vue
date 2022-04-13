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
        <SocialIcons :isDark="isDark"/>
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

