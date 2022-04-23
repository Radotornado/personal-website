<template>
  <div class="rotate-container">
    <span class="rotate-text">{{$t('home.rotator.for-the-web')}}.</span>
    <span class="rotate-text">{{$t('home.rotator.for-pq-crypto')}}.</span>
    <span class="rotate-text">{{$t('home.rotator.java')}}.</span>
    <span class="rotate-text">{{$t('home.rotator.ble')}}.</span>
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
  animation: animate 10s linear infinite;
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
  animation-delay: 2s;
  color:#6eb6e5;
}
.rotate-text:nth-child(3) {
  animation-delay: 4s;
  color:#56aae0
;
}
.rotate-text:nth-child(4) {
  animation-delay: 6s;
  color:#2692d8;
}
.rotate-text:nth-child(5) {
  animation-delay: 8s;
  color:#0c78be;
}
</style>