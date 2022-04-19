<template>
  <v-card dark>
    <v-navigation-drawer
      app
      temporary
      right
      v-model="drawer"
      class="d-flex flex-column align-center"
    >
      <v-list class="text-center">
        <v-list-item>
          <v-list-item-content>
              <div>
              <v-icon @click="drawer = !drawer">mdi-close</v-icon>
              </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  @click="navigate('#about')">
          <v-list-item-content>
            <v-icon>mdi-card-account-mail</v-icon>
            <v-list-item-title>{{$t('home.right-nav.about')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  @click="navigate('#experience')">
          <v-list-item-content>
            <v-icon>mdi-account-star</v-icon>
            <v-list-item-title>{{$t('home.right-nav.experience')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  @click="navigate('#projects')">
          <v-list-item-content>
            <v-icon>mdi-text-box-check</v-icon>
            <v-list-item-title>{{$t('home.right-nav.projects')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  @click="navigate('#contact')">
          <v-list-item-content>
            <v-icon>mdi-at</v-icon>
            <v-list-item-title>{{$t('home.right-nav.contact')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name:"RightNav",
  data() {
    return {
      drawer: false,
      scrollOptions: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      }
    };
  },
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    },
    navigate(target){
      this.$vuetify.goTo(target, this.scrollOptions);
      this.toggle();
    }
  }
};
</script>