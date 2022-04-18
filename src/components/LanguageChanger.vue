<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" :dark="isDark">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" v-on:click="$i18n.locale=lang">
        {{name[i]}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props:{'isDark':Boolean},
  name: 'locale-changer',
  data () {
    return { 
        langs: ['en', 'de', 'bg'] ,
        name: ['English', 'Deutsch', 'Български']
      }
  }
}
</script>