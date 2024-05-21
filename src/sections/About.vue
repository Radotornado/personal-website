<template>
  <Base>
    <template #header>
      <div id="about" class="text-h5 text-sm-h4">
        <span class="blue--text">01.</span>
        {{$t('about.about-me')}}
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
                  <v-icon color="blue" class="mb-3">fa-user-tag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p style="line-height:120%;">
                    {{$t('about.me.my-name-is')}}<b>{{$t('about.me.radoslav-mandev')}}</b>{{$t('about.me.born-in')}}
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue" class="mb-3">fa-graduation-cap</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p style="line-height:120%;">
                    {{$t('about.study.degree')}}<b>{{$t('about.study.backend')}}</b>{{$t('about.study.deg')}}<b>{{$t('about.study.cs')}}</b>{{$t('about.study.de')}}.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue" class="mb-3">fa-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p style="line-height:120%;">
                    {{$t('about.field.passion')}}<b>{{$t('about.field.tech')}}</b>, <b>{{$t('about.field.web')}}</b>, <b>IT-</b>, <b>{{$t('about.field.cybersecurity')}}</b>{{$t('about.field.and')}}<b>{{$t('about.field.programming')}}</b>.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue" class="mb-3">fa-camera</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p style="line-height:120%;">
                    {{$t('about.hobbies.h1')}}<b>{{$t('about.hobbies.h2')}}</b>{{$t('about.hobbies.h3')}}<b>{{$t('about.hobbies.h4')}}</b>{{$t('about.hobbies.h5')}}<b>{{$t('about.hobbies.h6')}}</b>{{$t('about.hobbies.h7')}}.
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
  box-shadow: #a8a8a8 -10px 10px;
  border-radius: 1%;
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
