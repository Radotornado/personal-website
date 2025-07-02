<template>
  <div class="rotate-container">
    <span class="rotate-text">{{$t('home.rotator.for-the-web')}}.</span>
    <span class="rotate-text">{{$t('home.rotator.for-android')}}.</span>
    <span class="rotate-text">{{$t('home.rotator.java')}}.</span>
    <span class="rotate-text">{{$t('home.rotator.spring')}}.</span>
    <span class="rotate-text">{{$t('home.rotator.devops')}}.</span>
    <span class="rotate-text">{{$t('home.rotator.js')}}.</span>
  </div>
</template>

<script>
export default {
  name:"Rotator"
};
</script>

<style scoped>
.rotate-container{
  position:relative;
  display:inline-block;
  overflow:visible;
  width:auto;
  width:840px;
  height:1em;
}


@media only screen and (max-width: 1300px){
  .rotate-container {
    width:100%;
    height:3em;
  }
}

.rotate-text {
  position: absolute;
  overflow: hidden;
  top:7px;
  opacity:0;
  animation: animate 10.2s linear infinite;
  height:130px
}

@keyframes animate {
  0% {
    opacity: 1;
    transform: translateY(-50px);
  }
  2% {
    opacity: 1;
    transform: translateY(0px);
  }
  18% {
    opacity: 1;
    transform: translateY(0px);
  }
  20% {
    opacity: 0;
    transform: translateY(50px);
  }
}

.rotate-text:nth-child(1) {
  animation-delay: 0s;
}
.rotate-text:nth-child(2) {
  animation-delay: 1.7s;
  color:#6eb6e5;
}
.rotate-text:nth-child(3) {
  animation-delay: 3.4s;
  color:#56aae0;
}
.rotate-text:nth-child(4) {
  animation-delay: 5.1s;
  color:#2692d8;
}
.rotate-text:nth-child(5) {
  animation-delay: 6.8s;
  color:#0c78be;
}
.rotate-text:nth-child(6) {
  animation-delay: 8.5s;
  color:#19639b;
}
</style>