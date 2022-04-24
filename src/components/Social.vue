<template>
  <div>
    <a
      v-for="(item,index) in icons"
      :key="index"
      class="social-icon-container my-2 mx-1"
      target="_blank"
      :href="item.link"
    >
      <v-icon :dark="isDark" :title="item.name" class="social-icon" size="30">{{item.icon}}</v-icon>
    </a>
  </div>
</template>
<style scoped>
.social-links-container{
  width:60px;
}
.social-icon {
  top:10px;
  position:relative;
}

.social-icon:hover{
    color:#2196F3;
    top:2px;
}

.social-icon-container {
  animation: animate 1s linear forwards;
  opacity: 0;
  text-decoration: none;
}

@media only screen and (max-height:480px){
  .social-icon{
    font-size:20px !important;
  }
}

@keyframes animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<script>
export default {
  name:"Social",
  props:{'isDark':Boolean},
  data() {
    return {
      icons: [ 
        {
          name: "LinkedIn",
          icon: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/radoslav-mandev"
        },
        {
          name: "Github",
          icon: "fab fa-github",
          link: "https://github.com/Radotornado"
        },
        {
          name: "Instagram",
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/radoslav.mandev/"
        },
        {
          name: "WhatsApp",
          icon: "fab fa-whatsapp",
          link: "https://wa.me/359882027807"
        },
        {
          name: "Goodreads",
          icon: "fab fa-goodreads-g",
          link: "https://www.goodreads.com/user/show/132864977-radoslav-mandev"
        },
        {
          name: "Local Guide",
          icon: "fab fa-google",
          link: "https://www.google.com/maps/contrib/106864606957923008552"
        },
        {
          name: "PayPal",
          icon: "fab fa-paypal",
          link: "https://paypal.me/radotornado"
        }
      ]
    };
  },
  methods: {
    gotoLink(url) {
      document.location = url;
    }
  }
};
</script>